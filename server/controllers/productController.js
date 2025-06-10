const Product = require("../models/productModel");

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
