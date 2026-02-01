const express = require("express");
const router = express.Router();
const { chatHandler } = require("../controllers/chat.controller");

router.post("/", chatHandler);

module.exports = router;
