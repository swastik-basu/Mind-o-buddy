const Session = require("../models/Session");
const { detectEmotion } = require("../services/huggingface.service");
const { extractDominantEmotion } = require("../utils/emotion.utils");
const { generateMeditation } = require("../services/openrouter.service");
const { parseMeditationResponse } = require("../utils/meditation.utils");

const analyzeText = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "Text is required" });
    }

    // 1️⃣ Emotion detection
    const emotionRaw = await detectEmotion(text);
    const { emotion, scores } = extractDominantEmotion(emotionRaw);

    // 2️⃣ Meditation generation
    const llmOutput = await generateMeditation({ text, emotion });
    const { meditationType, meditationText } =
      parseMeditationResponse(llmOutput);

    // 3️⃣ Save full session
    await Session.create({
      sessionId: req.sessionId,
      userText: text,
      detectedEmotion: emotion,
      emotionScores: scores,
      meditationType,
      meditationText
    });

    res.status(200).json({
      emotion,
      meditationType,
      meditationText
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Mindfulness analysis failed" });
  }
};

module.exports = { analyzeText };
