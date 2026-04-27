const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { Groq } = require("groq-sdk");

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

app.get('/', (req, res) => {
  res.send("backend running....");
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  console.log("User Message:", userMessage);

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: userMessage
        }
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.3,
      max_completion_tokens: 200,
      top_p: 1,
      stream: false
    });

    console.log("Groq Full Response:", chatCompletion);

    const bot_reply =
      chatCompletion.choices[0]?.message?.content || "No response";

    console.log("Bot Reply:", bot_reply);

    res.json({
      reply: bot_reply
    });

  } catch (error) {
    console.log("Backend Error:", error.response?.data || error.message);

    res.status(500).json({
      reply: "Something went wrong"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});