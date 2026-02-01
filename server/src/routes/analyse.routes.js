const express = require("express");
const router = express.Router();
const { analyzeText } = require("../controllers/analyse.controllers");

router.post("/", analyzeText);

module.exports = router;
