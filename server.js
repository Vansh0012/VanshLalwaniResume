require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai'); // ✅ Import OpenAI class (v4+)

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json()); // This ensures that Express can parse JSON bodies

// ✅ Log to confirm API key is loaded
console.log("🔑 Loaded OpenAI API Key:", process.env.OPENAI_API_KEY ? "✅ Yes" : "❌ No");

// ✅ Create OpenAI client using API key from .env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API key from .env file
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use the right model for your request
      messages: [{ role: "user", content: message }], // User's message
    });

    const reply = response.choices[0].message.content;
    res.json({ reply }); // Send back the generated reply
  } catch (error) {
    // 🔄 Enhanced error logging with custom message
    console.error("❌ OpenAI error:", error.response?.data || error.message || error);
    res.status(500).json({ reply: "🚨 AI took a nap. Try again in a bit!" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
