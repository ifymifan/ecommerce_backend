const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add New Product
router.post("/", async (req, res) => {
  const { name, price, image, description } = req.body;
  const newProduct = new Product({ name, price, image, description });
  await newProduct.save();
  res.json({ message: "Product Added" });
});

module.exports = router;
