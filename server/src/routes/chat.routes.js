const express = require("express");
const router = express.Router();
const { chatHandler } = require("../controllers/chat.controllers");

router.post("/", chatHandler);

module.exports = router;
