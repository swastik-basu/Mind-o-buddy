const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user", "assistant"],
    required: true
  },
  message: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const sessionSchema = new mongoose.Schema({
  sessionId: String,
  chatHistory: [chatSchema],

  detectedEmotion: String,
  emotionScores: Object,

  meditationType: String,
  meditationText: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Session", sessionSchema);
