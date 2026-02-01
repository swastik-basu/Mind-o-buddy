const Session = require("../models/Session");
const { runGemini } = require("../services/gemini.service");

const chatHandler = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message required" });
    }

    let session = await Session.findOne({ sessionId: req.sessionId });
    if (!session) {
      session = await Session.create({ sessionId: req.sessionId, chatHistory: [] });
    }

    session.chatHistory.push({ role: "user", message });

    const geminiResponse = await runGemini({
      userMessage: message,
      chatHistory: session.chatHistory
    });

    session.chatHistory.push({
      role: "assistant",
      message: geminiResponse.reply
    });

    session.lastEmotion = geminiResponse.emotion;
    await session.save();

    res.json(geminiResponse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gemini processing failed" });
  }
};

module.exports = { chatHandler };
