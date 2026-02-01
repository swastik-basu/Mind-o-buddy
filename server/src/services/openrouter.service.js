const axios = require("axios");

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const generateMeditation = async ({ text, emotion }) => {
    try {
        const prompt = `
You are a calm mindfulness guide.

User message:
"${text}"

Detected emotional state: ${emotion}

Task:
1. Choose the most suitable meditation type from:
   - breathing
   - grounding
   - body scan
   - compassion
   - focus

2. Write a gentle, non-clinical guided meditation lasting 3–4 minutes.
3. Do NOT mention diagnoses, therapy, or mental illness.
4. Use simple, soothing language.

Output format:
Meditation Type: <type>

Meditation:
<guided meditation text>
`;

        const response = await axios.post(
            OPENROUTER_URL,
            {
                model: "openai/gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: 0.6
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(
            "OpenRouter error:",
            error.response?.data || error.message
        );
        throw new Error("Meditation generation failed");
    }
};

module.exports = { generateMeditation };
