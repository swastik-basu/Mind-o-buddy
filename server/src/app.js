const express = require("express");
const cors = require("cors");
const sessionMiddleware = require("./middleware/sessions.middleware");

const chatRoutes = require("./routes/chat.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(sessionMiddleware);

app.use("/api/chat", chatRoutes);

module.exports = app;
