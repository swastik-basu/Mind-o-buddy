const express = require("express");
const cors = require("cors");
const sessionMiddleware = require("./middleware/sessions.middleware");

const analyzeRoutes = require("./routes/analyse.routes");
const chatRoutes = require("./routes/chat.routes");
const emotionTestRoutes = require("./routes/emotionTest.routes");
const app = express();
app.use(cors());
app.use(express.json());
app.use(sessionMiddleware);


app.use("/api/analyse", analyzeRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/emotion-test", emotionTestRoutes);

console.log("🔥 app.js routes loaded: ping, hello, emotion-test");

module.exports = app;


// const express = require("express");
// const app = express();
// console.log("🔥 app.js LOADED");

// app.use(express.json());

// const pingRoutes = require("./routes/ping.routes");
// const helloRoutes = require("./routes/hello.routes");
// const emotionTestRoutes = require("./routes/emotionTest.routes");

// app.use("/ping", pingRoutes);
// app.use("/hello", helloRoutes);
// app.use("/emotion-test", emotionTestRoutes);

// module.exports = app;
