
import React, { useEffect, useRef, useState } from 'react';
import {
  Mic,
  Square,
  Play,
  Volume2,
  RotateCcw,
  StopCircle
} from 'lucide-react';

interface SpeakingActivityProps {
  passage: string;
}

export const SpeakingActivity: React.FC<SpeakingActivityProps> = ({
  passage
}) => {
  // Track whether the example is being spoken.
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Track whether the microphone is recording.
  const [isRecording, setIsRecording] = useState(false);

  // Store the temporary URL of the recorded audio.
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null);

  // Display microphone or playback errors.
  const [error, setError] = useState<string | null>(null);

  // Hold the browser's recording controller.
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  // Hold the microphone stream for cleanup.
  const streamRef = useRef<MediaStream | null>(null);

  // Store audio chunks during recording.
  const chunksRef = useRef<Blob[]>([]);

  // Hold the current recording URL for cleanup.
  const recordingUrlRef = useRef<string | null>(null);

  // Track the current speech utterance.
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Prevent callbacks from updating an unmounted component.
  const mountedRef = useRef(true);

  // Release the microphone after recording.
  const releaseMicrophone = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  };

  // Release an old recording URL.
  const clearRecordingUrl = () => {
    if (recordingUrlRef.current) {
      URL.revokeObjectURL(recordingUrlRef.current);
      recordingUrlRef.current = null;
    }

    setRecordingUrl(null);
  };

  // Stop browser speech playback.
  const stopExample = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    utteranceRef.current = null;
    setIsSpeaking(false);
  };

  // Play the example speaking passage.
  const playExample = () => {
    setError(null);

    if (
      !('speechSynthesis' in window) ||
      !('SpeechSynthesisUtterance' in window)
    ) {
      setError('Speech playback is not supported by this browser.');
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(passage);

    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1;

    utterance.onstart = () => {
      if (mountedRef.current) {
        setIsSpeaking(true);
      }
    };

    utterance.onend = () => {
      if (mountedRef.current) {
        setIsSpeaking(false);
      }
    };

    utterance.onerror = (event) => {
      if (!mountedRef.current) return;

      setIsSpeaking(false);

      if (event.error !== 'canceled' && event.error !== 'interrupted') {
        setError('Unable to play the example. Please try again.');
      }
    };

    utteranceRef.current = utterance;

    window.speechSynthesis.speak(utterance);
  };

  // Start recording the learner's voice.
  const startRecording = async () => {
    setError(null);

    if (
      !navigator.mediaDevices?.getUserMedia ||
      !('MediaRecorder' in window)
    ) {
      setError(
        'Microphone recording is not supported in this browser or context.'
      );
      return;
    }

    try {
      // Request permission to use the microphone.
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });

      // Stop immediately if the component was removed.
      if (!mountedRef.current) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }

      streamRef.current = stream;

      // Remove any previous recording.
      clearRecordingUrl();

      chunksRef.current = [];

      // Let the browser select its supported recording format.
      const recorder = new MediaRecorder(stream);

      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, {
          type: recorder.mimeType || 'audio/webm'
        });

        chunksRef.current = [];

        releaseMicrophone();

        if (!mountedRef.current) return;

        setIsRecording(false);

        if (audioBlob.size === 0) {
          setError('No audio was captured. Please try again.');
          return;
        }

        const url = URL.createObjectURL(audioBlob);

        recordingUrlRef.current = url;
        setRecordingUrl(url);
      };

      recorder.onerror = () => {
        releaseMicrophone();

        if (mountedRef.current) {
          setIsRecording(false);
          setError('Recording failed. Please try again.');
        }
      };

      recorder.start();
      setIsRecording(true);
    } catch (err) {
      releaseMicrophone();

      if (!mountedRef.current) return;

      setIsRecording(false);

      if (err instanceof DOMException && err.name === 'NotAllowedError') {
        setError(
          'Microphone permission was denied. Allow microphone access in your browser settings.'
        );
      } else {
        setError(
          'Could not start recording. Check your microphone and browser permissions.'
        );
      }
    }
  };

  // Stop recording and finalize the audio.
  const stopRecording = () => {
    const recorder = mediaRecorderRef.current;

    if (recorder && recorder.state !== 'inactive') {
      recorder.stop();
    }

    setIsRecording(false);
  };

  // Remove the previous recording so the learner can try again.
  const tryAgain = () => {
    clearRecordingUrl();
    setError(null);
  };

  // Clean up microphone, audio and object URLs on unmount.
  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }

      const recorder = mediaRecorderRef.current;

      if (recorder && recorder.state !== 'inactive') {
        recorder.stop();
      }

      releaseMicrophone();

      if (recordingUrlRef.current) {
        URL.revokeObjectURL(recordingUrlRef.current);
        recordingUrlRef.current = null;
      }
    };
  }, []);

  return (
    <div className="mt-6 space-y-5 rounded-xl border border-slate-200 bg-white p-5">
      <div>
        <h3 className="text-lg font-bold text-slate-900">
          Interactive Speaking Practice
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          Listen to the example, record your response, and compare
          your pronunciation, fluency, and speaking confidence.
        </p>
      </div>

      {/* Example speaking passage */}
      <div className="rounded-lg bg-slate-50 p-4">
        <h4 className="mb-3 font-semibold text-slate-800">
          Example Speaking Model
        </h4>

        <p className="whitespace-pre-line leading-7 text-slate-700">
          {passage}
        </p>
      </div>

      {/* Example speech controls */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={playExample}
          disabled={isSpeaking}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white disabled:opacity-50"
        >
          <Volume2 size={18} />
          Listen to Example
        </button>

        <button
          type="button"
          onClick={stopExample}
          disabled={!isSpeaking}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 disabled:opacity-50"
        >
          <StopCircle size={18} />
          Stop Example
        </button>
      </div>

      {/* Microphone recording controls */}
      <div className="border-t border-slate-200 pt-5">
        <h4 className="mb-3 font-semibold text-slate-900">
          Record Your Response
        </h4>

        <div className="flex flex-wrap gap-3">
          {!isRecording ? (
            <button
              type="button"
              onClick={startRecording}
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-semibold text-white"
            >
              <Mic size={18} />
              Start Recording
            </button>
          ) : (
            <button
              type="button"
              onClick={stopRecording}
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white"
            >
              <Square size={18} />
              Stop Recording
            </button>
          )}
        </div>

        {isRecording && (
          <p
            role="status"
            className="mt-3 flex items-center gap-2 text-sm font-medium text-red-600"
          >
            <span className="h-2 w-2 rounded-full bg-red-600" />
            Recording in progress...
          </p>
        )}
      </div>

      {/* Learner recording playback */}
      {recordingUrl && (
        <div className="space-y-3 rounded-lg bg-green-50 p-4">
          <h4 className="flex items-center gap-2 font-semibold text-green-900">
            <Play size={18} />
            Your Recording
          </h4>

          <audio
            controls
            src={recordingUrl}
            className="w-full"
          >
            Your browser does not support audio playback.
          </audio>

          <button
            type="button"
            onClick={tryAgain}
            className="inline-flex items-center gap-2 rounded-lg border border-green-700 px-4 py-2 font-semibold text-green-800"
          >
            <RotateCcw size={18} />
            Try Again
          </button>
        </div>
      )}

      {/* Error messages */}
      {error && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <p className="text-xs text-slate-500">
        Your recording is temporary and stays in this browser.
        It is not uploaded to ENGVERO. You can listen to it
        before leaving this page.
      </p>
    </div>
  );
};
