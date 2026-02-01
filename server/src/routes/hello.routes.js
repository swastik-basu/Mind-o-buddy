const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({
    message: "Hello route works",
    body: req.body || null
  });
});

module.exports = router;
