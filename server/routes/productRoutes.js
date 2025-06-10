const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// GET /api/products → Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error getting products", error: err.message });
  }
});

module.exports = router;
