const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Dummy route to check server
app.get("/", (req, res) => {
  res.send("🚀 Backend is working!");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB");
})
.catch(err => {
  console.error("❌ MongoDB connection error:", err.message);
});

module.exports = app;
