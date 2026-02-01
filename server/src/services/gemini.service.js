const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro"
});

const runGemini = async ({ userMessage, chatHistory }) => {
    const prompt = `
You are a calm, supportive AI companion.

Rules:
- Be empathetic and human.
- Do NOT give medical or psychological advice.
- Do NOT mention diagnoses or therapy.
- Keep responses short and gentle.

Tasks:
1. Respond empathetically to the user.
2. Infer the dominant emotion from: sadness, fear, anger, joy, neutral.
3. Give a confidence score between 0 and 1.
4. Decide whether a short mindfulness exercise could help.
5. If helpful, generate a 3–4 minute guided meditation.
6. If not, meditation must be null.

Conversation so far:
${chatHistory.map(m => `${m.role}: ${m.message}`).join("\n")}

User message:
"${userMessage}"

Respond ONLY in valid JSON with this exact shape:
{
  "reply": string,
  "emotion": string,
  "confidence": number,
  "suggestMeditation": boolean,
  "meditation": string | null
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return JSON.parse(text);
};

module.exports = { runGemini };
