const { detectEmotion } = require("../services/huggingface.service");
const { extractDominantEmotion } = require("../utils/emotion.utils");

const testEmotion = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text required" });
    }

    const raw = await detectEmotion(text);
    const result = extractDominantEmotion(raw);

    res.json(result);
  } catch (err) {
    console.error("Emotion Test Error:", err.response?.data || err.message);
    res.status(500).json({
      error: "Emotion detection failed",
      details: err.response?.data || null
    });
  }
};

module.exports = { testEmotion };