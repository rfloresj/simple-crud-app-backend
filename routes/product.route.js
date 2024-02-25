const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller.js');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);

// Update Product
router.put('/:id', updateProduct);

// Delete Product
router.delete('/:id', deleteProduct);

module.exports = router;

// CONTROLLER FUNCTION
// async (req, res) => {
//     try {
//       const products = await Product.find({});
//       res.status(200).json(products);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
