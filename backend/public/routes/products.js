const express = require('express');
const router = express.Router();

// Sample product list
const products = [
  { id: 1, name: "Wireless Headphones", price: 89.99 },
  { id: 2, name: "Smart Watch", price: 129.99 },
  { id: 3, name: "Laptop Backpack", price: 49.99 },
  { id: 4, name: "Wireless Charger", price: 29.99 }
];

// GET /api/products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
