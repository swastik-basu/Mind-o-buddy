const Session = require("../models/Session");
const { detectEmotion } = require("../services/huggingface.service");
const { extractDominantEmotion } = require("../utils/emotion.utils");
const { generateChatReply } = require("../services/chat.service");
const { shouldSuggestMeditation } = require("../utils/trigger.utils");
const { generateChatReplyHF } = require("../services/hfChat.service");


const chatHandler = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    let session = await Session.findOne({ sessionId: req.sessionId });
    if (!session) {
      session = await Session.create({ sessionId: req.sessionId });
    }

    // Add user message
    session.chatHistory.push({
      role: "user",
      message
    });

    // Emotion detection
    const emotionRaw = await detectEmotion(message);
    const { emotion, scores } = extractDominantEmotion(emotionRaw);

    // Generate chat reply
    const reply = await generateChatReply({
      chatHistory: session.chatHistory.map((m) => ({
        role: m.role,
        content: m.message
      })),
      emotion
    });

    // Add assistant reply
    session.chatHistory.push({
      role: "assistant",
      message: reply
    });

    session.detectedEmotion = emotion;
    session.emotionScores = scores;

    const suggestMeditation = shouldSuggestMeditation(emotion, scores);

    await session.save();

    res.json({
      reply,
      suggestMeditation
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Chat failed" });
  }
};

module.exports = { chatHandler };
