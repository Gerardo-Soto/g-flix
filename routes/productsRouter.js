//Packages:
const express = require('express');
const router = express.Router()// = /products

// Services:
const ProductService = require('../services/productService');

// initialization class ProductService
const productService = new ProductService();

// route of all products
router.get('/', (req, res) => {
  const products = productService.find();
  res.status(200).json(products);
});


// Use of filter:
router.get('/filter', (req, res) => {
  res.status(200).send('I\'m a filter.');
});

// route to get a specific product by ID
router.get('/:id', (req, res) => {
  // EMACScript 5-
  //  const id = req.params.id;
  // EMACScript 6+
  const { id } = req.params;
  const product = productService.findOne(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json(product);
  }
});

// route to get the detail product
router.get('/:id/details', (req, res) => {
  const { id } = req.params;
  const product = productService.findOne(id);
  if (product) {
    res.status(200).json({

    });
  } else {
    res.status(404).json({
      id,
      detail: 'Not found.'
    });
  }
});


// route to create product (/products == /)
router.post('/', (req, res) => {
  const body = req.body;// Get the body request
  res.status(201).json({
    message: 'created',
    data: body
  });
});

// route to partial update product
router.patch('/:id', (req, res) => {
  const { id } = req.params;// get url params
  const body = req.body;// Get the body request
  if (parseInt(id) > 99) {
    res.status(404).json({
      message: 'Not found.',
    });
  } else {
    // Code 204: resource updated successfully
    res.status(202).json({
      message: 'Resource updated successfully',
      data: body,
      id
    });
  }
});

// router to delete a product
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  if (parseInt(id) > 99) {
    res.status(404).json({
      message: 'Not found.',
    });
  } else {
    res.status(204).json({
      message: 'Resource deleted successfully',
      id
    });
  }
});

// Export router
module.exports = router;






















