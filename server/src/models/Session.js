const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  role: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const sessionSchema = new mongoose.Schema({
  sessionId: String,
  chatHistory: [messageSchema],
  lastEmotion: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Session", sessionSchema);
