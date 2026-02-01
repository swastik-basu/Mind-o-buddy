const express = require("express");
const router = express.Router();

console.log("🔥 emotionTest.routes.js LOADED");

const { testEmotion } = require("../controllers/emotionTest.controller");

router.post("/", testEmotion);

module.exports = router;
