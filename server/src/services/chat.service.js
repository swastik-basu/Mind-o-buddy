const axios = require("axios");

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const generateChatReply = async ({ chatHistory }) => {
  const systemPrompt = `
You are a calm, empathetic companion.
Keep responses short, supportive, and human.
Do not give medical or psychological advice.
`;

  const messages = [
    { role: "system", content: systemPrompt },
    ...chatHistory
  ];

  const response = await axios.post(
    OPENROUTER_URL,
    {
      model: "mistralai/mistral-7b-instruct",
      messages,
      temperature: 0.7
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Mind-o-buddy"
      }
    }
  );

  return response.data.choices[0].message.content;
};

module.exports = { generateChatReply };
