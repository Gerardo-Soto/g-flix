const express = require('express');

// config server
const app = express();
const port = 3000;

// paths app
// route by default:
app.get('/', (req, res) => {
  res.send('Hello, server on express');
});


app.get('/home', (req, res) => {
  res.send('Welcome to home!');
});


app.get('/new-path', (req, res) => {
  // Java Script Object Notation:
  res.json('Hello, I\'m a new path');
});


app.get('/products-json', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 120
  })
});


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

//run app:
app.listen(port, () => {
  // console.log -> warning: Bad practice by Eslint:
  // console.log in Dev (yes) / console.log in Prod (NO)
  console.log('Server listen at http://localhost:' + port);
});

