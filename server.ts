import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

// Initialize GoogleGenAI client with standard telemetry
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Role system instructions
const SYSTEM_INSTRUCTIONS: Record<string, string> = {
  general: `You are ENGVERO's friendly, encouraging English Practice Partner. 
Your mission is to help English learners worldwide build natural conversational confidence and fluency.
Guidelines:
1. Always communicate in clear, natural, idiomatic English.
2. Adapt your tone to be supportive, educational, and engaging.
3. If the user makes a grammar or vocabulary error, gently provide a helpful "💡 Quick Language Note:" at the very end of your response with the corrected sentence and reason, while keeping your main response focused on the ongoing conversation.
4. Keep answers concise, clear, and easy to read. Encourage the user to keep practicing.`,

  fast: `You are ENGVERO's Instant Grammar & Sentence Fixer.
Your goal is to provide fast, crisp, highly accurate grammar corrections.
Guidelines:
1. For any sentence or paragraph provided by the user, immediately show:
   - ✕ Original error(s)
   - ✓ Corrected, natural native version
   - 📖 Rule explanation (1-2 concise bullet points)
   - 🎯 1-2 practical example sentences demonstrating the rule.
2. Be direct, structured, and fast. Avoid unnecessary pleasantries.`,

  complex: `You are ENGVERO's Advanced Writing & Academic English Reviewer.
You specialize in formal academic essays, IELTS/TOEFL writing assessment, executive correspondence, and complex grammatical structures.
Guidelines:
1. Evaluate writing across 4 key criteria:
   - Coherence & Cohesion (transitions, logical flow, paragraph architecture)
   - Lexical Resource (precision, idiomatic collocations, academic register)
   - Grammatical Range & Accuracy (sentence variety, complex clauses, punctuation)
   - Tone & Register Calibration (formal, diplomatic, or academic).
2. Offer concrete elevated rewrites with explanations of subtle nuances in vocabulary choice.`
};

// Model selection helper based on role and guidelines
function selectModelForRole(role: string): string[] {
  switch (role) {
    case 'fast':
      // gemini-3.1-flash-lite for instant corrections
      return ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    case 'complex':
      // gemini-3.8-flash is the premier model for comprehensive explanations and IELTS critiques
      return ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];
    case 'general':
    default:
      // gemini-3.8-flash for conversational practice and language coaching
      return ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];
  }
}

async function generateWithFallback(
  modelCandidates: string[],
  contents: any[],
  systemInstruction: string,
  temperature: number
): Promise<{ text: string; modelUsed: string }> {
  for (const model of modelCandidates) {
    try {
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error(`Timeout for ${model}`)), 25000)
      );

      const callPromise = ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction,
          temperature,
        },
      });

      const response: any = await Promise.race([callPromise, timeoutPromise]);
      if (response && response.text) {
        return { text: response.text, modelUsed: model };
      }
    } catch (err: any) {
      console.warn(`Model ${model} failed or timed out: ${err.message}. Trying next candidate...`);
    }
  }

  // Final fallback to gemini-3.1-flash-lite
  const fallbackRes = await ai.models.generateContent({
    model: 'gemini-3.1-flash-lite',
    contents,
    config: { systemInstruction, temperature },
  });
  return { text: fallbackRes.text || '', modelUsed: 'gemini-3.1-flash-lite' };
}

// Multi-turn chat API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, role = 'general' } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: 'Messages array is required.' });
      return;
    }

    if (!apiKey) {
      res.status(500).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please check your AI Studio secrets.',
      });
      return;
    }

    const candidateModels = selectModelForRole(role);
    const systemInstruction = SYSTEM_INSTRUCTIONS[role] || SYSTEM_INSTRUCTIONS.general;

    // Convert client message history to Gemini API contents format:
    // [{ role: 'user' | 'model', parts: [{ text: string }] }]
    const contents = messages.map((m: { role: 'user' | 'assistant'; text: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

    const result = await generateWithFallback(
      candidateModels,
      contents,
      systemInstruction,
      role === 'fast' ? 0.3 : 0.7
    );

    res.json({
      reply: result.text || 'I could not generate a response. Please try again.',
      modelUsed: result.modelUsed,
    });
  } catch (error: any) {
    console.error('Gemini Chat API Error:', error);
    res.status(500).json({
      error: error?.message || 'An error occurred while generating a response from Gemini.',
    });
  }
});

// Vite middleware for dev or static files for prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, port: 3000, host: '0.0.0.0' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`ENGVERO server running on http://0.0.0.0:${port}`);
  });
}

startServer();
