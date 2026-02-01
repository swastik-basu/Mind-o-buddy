# 🧘 Mind-o-Buddy

**An AI-powered mindfulness companion that listens first and guides meditation when needed**

Mind-o-Buddy is a backend-driven AI system that:

* Allows users to express how they feel (chat-style)
* Detects emotional signals from text
* Gently suggests short mindfulness exercises when appropriate

This project is designed to be **simple to run**, **privacy-friendly**, and **hackathon-ready**.

---

## 🛠 Tech Stack

* **Node.js** + **Express** — backend server
* **MongoDB** — session storage
* **Hugging Face Inference API** — emotion detection
* **REST APIs** — clean separation of concerns

> No login required. Sessions are anonymous.

---

## 📂 Project Structure

```
mind-o-buddy/
├── server/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── utils/
│   │   └── middleware/
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   └── .gitignore
```

---

## ⚙️ Setup Instructions (For Judges)

Follow these steps **exactly**.

---

### ✅ Step 1: Prerequisites

Ensure the following are installed:

* **Node.js** (v18 or later recommended)
  👉 [https://nodejs.org](https://nodejs.org)
* **MongoDB** (local or Atlas)
  👉 [https://www.mongodb.com](https://www.mongodb.com)

Check installation:

```bash
node -v
npm -v
```

---

### ✅ Step 2: Clone the Repository

```bash
git clone <repository-url>
cd mind-o-buddy/server
```

---

### ✅ Step 3: Install Dependencies

```bash
npm install
```

---

### ✅ Step 4: Environment Variables

Create a `.env` file inside the `server/` directory.

You can copy from the example:

```bash
cp .env.example .env
```

Edit `.env` and add the following:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mindfulness
HF_API_KEY=your_huggingface_api_key_here
```

🔑 **Hugging Face API Key**

* Create a free account at [https://huggingface.co](https://huggingface.co)
* Go to **Settings → Access Tokens**
* Create a **Read** token
* Paste it here

---

### ✅ Step 5: Start MongoDB

If using local MongoDB:

```bash
mongod
```

Or ensure MongoDB Atlas is running and accessible.

---

### ✅ Step 6: Run the Server

```bash
npm start
```

You should see:

```
Server running on port 5000
MongoDB connected
```

---

## 🧪 API Testing (Optional but Recommended)

Use **Thunder Client**, **Postman**, or **curl**.

### 🔹 Health Check

```
GET http://localhost:5000/ping
```

Response:

```json
{ "status": "pong" }
```

---

### 🔹 Emotion Detection Test

```
POST http://localhost:5000/emotion-test
```

Body:

```json
{
  "text": "I'm feeling overwhelmed and stressed"
}
```

Response (example):

```json
{
  "emotion": "sadness",
  "scores": {
    "sadness": 0.42,
    "fear": 0.31,
    "anger": 0.08,
    "neutral": 0.12,
    "joy": 0.06
  }
}
```

---

## 🧠 How It Works (For Judges)

1. User inputs free-form text
2. Text is sent to Hugging Face for **emotion classification**
3. Dominant emotional signals are extracted
4. System decides whether mindfulness guidance may help
5. Meditation is suggested **only when appropriate**

> The system does **not** diagnose, treat, or replace professional care.

---

## 🔐 Privacy & Ethics

* No user accounts
* No personal identifiers
* Anonymous sessions only
* No medical or therapeutic claims

---

## 🚀 Future Scope

* Frontend chat UI
* Audio-based guided meditation
* Emotion trends over time
* Mobile app integration

---

## 👥 Team Notes

If anything fails to run:

1. Check `.env`
2. Ensure MongoDB is running
3. Restart the server

---

### ✅ That’s it!

The project is now ready to be reviewed, tested, and judged.
