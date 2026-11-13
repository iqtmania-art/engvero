
import { GoogleGenAI } from '@google/genai';

type ChatRole = 'general' | 'fast' | 'complex';
type Message = { role: 'user' | 'assistant'; text: string };

const instructions: Record<ChatRole, string> = {
  general: `You are ENGVERO's friendly English Practice Partner.
Help learners improve natural conversation and fluency.
Use clear English, encourage practice, and provide brief grammar
corrections when helpful.`,

  fast: `You are ENGVERO's Instant Grammar Fixer.
Show the original error, corrected sentence, a concise grammar
explanation, and one or two practical examples.`,

  complex: `You are ENGVERO's Advanced Writing and IELTS Reviewer.
Evaluate coherence, vocabulary, grammar, and tone.
Provide improved rewrites with explanations.
Do not present estimated IELTS scores as official results.`
};

const models: Record<ChatRole, string[]> = {
  general: ['gemini-3.8-flash', 'gemini-3.1-flash-lite'],
  fast: ['gemini-3.1-flash-lite', 'gemini-3.8-flash'],
  complex: ['gemini-3.8-flash', 'gemini-3.1-flash-lite']
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error('Gemini API key is not configured');
    return json({ error: 'AI Tutor is temporarily unavailable' }, 503);
  }

  const contentLength = Number(request.headers.get('content-length') || 0);

  if (contentLength > 30000) {
    return json({ error: 'Request is too large' }, 413);
  }

  let body: unknown;

  try {
    const raw = await request.text();

    if (raw.length > 30000) {
      return json({ error: 'Request is too large' }, 413);
    }

    body = JSON.parse(raw);
  } catch {
    return json({ error: 'Invalid JSON request' }, 400);
  }

  if (!body || typeof body !== 'object') {
    return json({ error: 'Invalid request body' }, 400);
  }

  const input = body as Record<string, unknown>;
  const role: ChatRole =
    input.role === 'fast' || input.role === 'complex'
      ? input.role
      : 'general';

  if (!Array.isArray(input.messages) ||
      input.messages.length === 0 ||
      input.messages.length > 20) {
    return json({ error: 'Provide 1 to 20 messages' }, 400);
  }

  const messages = input.messages as Message[];

  if (!messages.every(m =>
    m &&
    (m.role === 'user' || m.role === 'assistant') &&
    typeof m.text === 'string' &&
    m.text.trim().length > 0 &&
    m.text.length <= 4000
  )) {
    return json({ error: 'Invalid message format' }, 400);
  }

  if (messages[messages.length - 1].role !== 'user') {
    return json({ error: 'Last message must be from the user' }, 400);
  }

  const ai = new GoogleGenAI({ apiKey });

  const contents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.text }]
  }));

  for (const model of models[role]) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction: instructions[role],
          temperature: role === 'fast' ? 0.3 : 0.7,
          httpOptions: { timeout: 15000 }
        }
      });

      if (response.text?.trim()) {
        return json({
          reply: response.text,
          modelUsed: model
        });
      }
    } catch (error) {
      console.error(`Gemini model ${model} failed`, error);
    }
  }

  return json({
    error: 'AI Tutor could not generate a response. Please try again.'
  }, 502);
}
