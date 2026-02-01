const axios = require("axios");

const HF_MODEL_URL =
  "https://router.huggingface.co/models/SamLowe/roberta-base-go_emotions";

const detectEmotion = async (text) => {
  try {
    const response = await axios.post(
      HF_MODEL_URL,
      {
        inputs: text,
        options: { wait_for_model: true }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        timeout: 30000
      }
    );

    // HF returns: [[{label, score}, ...]]
    return response.data[0];
  } catch (err) {
    console.error(
      "HF ERROR:",
      err.response?.status,
      err.response?.data || err.message
    );
    throw err;
  }
};

module.exports = { detectEmotion };
