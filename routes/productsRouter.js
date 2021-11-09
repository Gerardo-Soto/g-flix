//Packages:
const express = require('express');
const router = express.Router()// = /products at g-flix/index.js

// Services:
const ProductService = require('../services/productService');

// initialization class ProductService
const productService = new ProductService();


// route of all products
router.get('/', async (req, res) => {
  const products = await productService.find();
  res.status(200).json(products);
});


// Use of filter:
router.get('/filter', (req, res) => {
  res.status(200).send('I\'m a filter.');
});


// route to get a specific product by ID
router.get('/:id', async (req, res) => {
  // EMACScript 5-
  //  const id = req.params.id;
  // EMACScript 6+
  try {
    const { id } = req.params;
    const product = await productService.findOne(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,// internal error
    });
  }
});


// route to get the detail product
router.get('/:id/details', async (req, res) => {
  const { id } = req.params;
  const product = await productService.findOne(id);
  if (product) {
    res.status(200).json({
      product
    });
  } else {
    res.status(404).json({
      id,
      detail: 'Not found.'
    });
  }
});


// route to create product (/products == /)
router.post('/', async (req, res) => {
  const body = req.body;// Get the body request
  const newProduct = await productService.create(body);
  res.status(201).json({newProduct});
});


// route to partial update product
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;// get url params
    const body = req.body;// Get the body request
    const product = await productService.update(id, body);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
});


// router to delete a product
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await productService.delete(id);
  if (product) {
    res.status(201).json({
      message: 'Product deleted successfully',
      id
    });
  } else {
    res.status(404).json({
      message: 'Product not found.',
    });
  }
});

// Export router
module.exports = router;






















