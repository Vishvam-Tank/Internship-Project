const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/productModel');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch((err) => {
  console.error("❌ Connection error:", err.message);
});

const products = [
  {
    name: "Luxury Watch",
    image: "https://via.placeholder.com/150",
    price: 24999,
    description: "A classic old money style luxury watch.",
    category: "Accessories"
  },
  {
    name: "White Oxford Shirt",
    image: "https://via.placeholder.com/150",
    price: 1999,
    description: "Premium fabric white oxford shirt.",
    category: "Clothing"
  }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Sample Products Inserted!");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting products:", error.message);
    process.exit(1);
  }
};

importData();
