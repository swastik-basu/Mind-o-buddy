# 🌿 Mind-o-Buddy

*A calm, anonymous space for mindfulness and reflection*

Mind-o-Buddy is a lightweight, privacy-first mindfulness web application.
It provides a gentle chat experience where users can express how they feel and, when appropriate, transition into a short, calming meditation screen.

This project focuses on **emotional safety, simplicity, and system stability**, making it suitable for hackathon demos and future expansion.

---

## ✨ Core Principles

* 🧘 Calm, distraction-free experience
* 🔐 Anonymous sessions (no login, no personal data)
* 🧱 Stable backend before AI dependencies
* 🔌 AI-agnostic architecture (can be added later safely)

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Plain CSS (gentle, minimal styling)

### Backend

* Node.js
* Express
* MongoDB (Mongoose)
* UUID (anonymous session handling)

---

## 📂 Project Structure

```
Mind-o-Buddy/
├── client/                  # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Landing.jsx
│   │   │   ├── Chat.jsx
│   │   │   └── Meditation.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   └── package.json
│
├── server/                  # Backend (Express)
│   ├── src/
│   │   ├── controllers/
│   │   │   └── chat.controller.js
│   │   ├── middleware/
│   │   │   └── session.middleware.js
│   │   ├── models/
│   │   │   └── Session.js
│   │   ├── routes/
│   │   │   └── chat.routes.js
│   │   └── app.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## 🔐 Privacy by Design

* No accounts
* No emails or identifiers
* Anonymous session ID via headers
* Chat history stored only for session continuity

---

## ⚙️ Setup Instructions (For Judges & Reviewers)

### ✅ Prerequisites

* Node.js (v18+ recommended)
* MongoDB (local or Atlas)

---

## 🚀 Backend Setup

### 1️⃣ Go to backend folder

```bash
cd server
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env`

```bash
cp .env.example .env
```

Edit `.env`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mindobuddy
```

### 4️⃣ Start MongoDB

```bash
mongod
```

(or ensure MongoDB Atlas is running)

### 5️⃣ Start backend server

```bash
npm start
```

Expected output:

```
MongoDB connected
Server running on port 5000
```

---

## 🌸 Frontend Setup

### 1️⃣ Go to frontend folder

```bash
cd client
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start frontend

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🧭 Application Flow

1. **Landing Page**
   A calm introduction and a single action: *Start a conversation*

2. **Chat Screen**
   Users express how they feel in a gentle, chat-style interface

3. **Meditation Screen**
   A quiet, focused screen with a short guided meditation text

Navigation is intentionally minimal and state-based to reduce cognitive load.

---

## 🧪 API Endpoints

### Health Check

```
GET /ping
```

Response:

```json
{ "status": "pong" }
```

---

### Chat Endpoint

```
POST /api/chat
```

Body:

```json
{
  "message": "I feel stressed today"
}
```

Response:

```json
{
  "reply": "I’m here with you. Thank you for sharing how you feel. Take a slow breath, and we can talk more if you want.",
  "suggestMeditation": false
}
```

---

## 🧠 Notes for Judges

* This submission prioritizes **stability and user safety**
* AI integration is intentionally **decoupled** to avoid demo risk
* The architecture is designed to support AI providers later
* The system works fully without external APIs

---

## 🔮 Future Scope

* AI-powered emotional awareness
* Dynamic meditation suggestions
* Audio-guided meditation
* Emotion trends over time
* Mobile-friendly UI

---

## 🤍 Final Note

Mind-o-Buddy is built around the idea that
**technology meant for mental wellbeing should feel calm, not overwhelming**.
