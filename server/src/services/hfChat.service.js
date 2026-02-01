const axios = require("axios");

const HF_CHAT_URL =
  "https://router.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta";

const generateChatReplyHF = async (prompt) => {
  const response = await axios.post(
    HF_CHAT_URL,
    {
      inputs: prompt,
      parameters: {
        max_new_tokens: 120,
        temperature: 0.7
      }
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return response.data[0].generated_text;
};

module.exports = { generateChatReplyHF };
