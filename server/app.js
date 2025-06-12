const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// API routes
app.use('/api/products', productRoutes);

// Serve static frontend
app.use(express.static(path.join(__dirname, '..', 'client')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Serve images
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

module.exports = app;
