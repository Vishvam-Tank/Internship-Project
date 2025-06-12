const mongoose = require('mongoose');
const Product = require('../models/Product');

mongoose.connect('mongodb://localhost:27017/Ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dummyProducts = [
  {
    name: 'Old Money Blazer',
    image: 'old-money-blazzer.jpeg',
    price: 4999,
    description: 'Navy double-breasted wool blazer.',
    category: 'Clothing'
  },
  {
    name: 'Classic Loafers',
    image: 'classic loafers.jpeg',
    price: 2999,
    description: 'Handmade leather old money loafers.',
    category: 'Shoes'
  },
  {
    name: 'Elegant Leather Bag',
    image: 'Elegant-Leather-Bag.jpeg',
    price: 3499,
    description: 'Vintage-style leather handbag.',
    category: 'Accessories'
  },
  {
    name: 'Silk Tie',
    image: 'Silk-Tie.jpeg',
    price: 999,
    description: '100% pure silk tie with striped pattern.',
    category: 'Accessories'
  }
];

async function seed() {
  try {
    await Product.deleteMany({});
    await Product.insertMany(dummyProducts);
    console.log('✅ Dummy products added to MongoDB');
    process.exit();
  } catch (err) {
    console.error('❌ Failed to insert products:', err);
    process.exit(1);
  }
}

seed();
