const Product = require("../models/Product");

// @desc    Get all products
// @route   GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
  console.error("Error in getAllProducts:", err);
  res.status(500).json({ message: "Error getting products", error: err.message });
}
};

module.exports = { getAllProducts };
