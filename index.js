const express = require('express');
//const faker = require('faker');

// config server
const app = express();
const port = 3000;

// paths app
// route by default:
app.get('/', (req, res) => {
  res.send('Hello, server on express');
});

// route home page
app.get('/home', (req, res) => {
  res.send('Welcome to home!');
});


// route new product
app.get('/new-path', (req, res) => {
  // Java Script Object Notation:
  res.json('Hello, I\'m a new path');
});

// route of user id
app.get('/user/:id', (req, res) => {
  const {id} = req.params;
  res.json({userId: id});
});

// route of user with Query params
app.get('/users', (req, res) => {
  // Names of the Query params:
  const { limit, offset } = req.query;
  // validate if received params:
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('There are not params.');
  }
});

// route of all products
app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 120
    },
    {
      name: 'Product 2',
      price: 150
    }
  ]);
});

// route of a product
app.get('/products/:id', (req, res) => {
  // EMACScript 5-
  //  const id = req.params.id;
  // EMACScript 6+
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 150,
  });
});

// route of detail product
app.get('/products/:id/details', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    detail: 'Halloween.',
  });
});

// route of all categories
app.get('/categories', (req, res) => {
  res.send([{
    category: 'Comedy',
    quantity: 10,
  },
  {
    category: 'Action',
    quantity: 5,
  },
  {
    category: 'Fantasy',
    quantity: 7,
  }])
});

// route of some categories
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

//run app:
app.listen(port, () => {
  // console.log -> warning: Bad practice by Eslint:
  // console.log in Dev (yes) / console.log in Prod (NO)
  console.log('Server listen at http://localhost:' + port);
});










