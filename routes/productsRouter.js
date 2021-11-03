//const { application } = require('express');
const express = require('express');
const router = express.Router()// = /products

const faker = require('faker');


// route of all products
router.get('/', (req, res) => {
  const products = [];
  const { quantity } = req.query || 10;
  //const limit = quantity;
  for (let index = 0; index < quantity; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),// <- base 10
      image: faker.image.imageUrl(),
    });
  }
  res.status(200).json(products);
});


// Use of filter:
router.get('/filter', (req, res) => {
  res.status(200).send('I\'m a filter.');
});

// route of a product
router.get('/:id', (req, res) => {
  // EMACScript 5-
  //  const id = req.params.id;
  // EMACScript 6+
  const { id } = req.params;
  if (parseInt(id) > 99) {
    res.status(404).json({
      message: 'Not found.',
    });
  } else {
    res.status(200).json({
      id,
      name: 'Product 2',
      price: 150,
    });
  }
});

// route to get the detail product
router.get('/:id/details', (req, res) => {
  const { id } = req.params;
  if (parseInt(id) > 99) {
    res.status(404).json({
      message: 'Not found.',
    });
  } else {
    res.status(200).json({
      id,
      detail: 'Halloween'
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






















