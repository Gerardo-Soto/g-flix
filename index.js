const express = require('express');
const routeApi = require('./routes');// = ./routes/index.js

// config server
const app = express();
const port = 3000;

// Middleware to receive JSON POST:
app.use(express.json());

// paths app
// route by default:
app.get('/', (req, res) => {
  res.send('Hello, server on express');
});

// route home page
app.get('/home', (req, res) => {
  res.send('Welcome to home!');
});

// Add to routeApi the routes of this file:
routeApi(app);


//run app:
app.listen(port, () => {
  // console.log -> warning: Bad practice by Eslint:
  // console.log in Dev (yes) / console.log in Prod (NO)
  console.log('Server listen at http://localhost:' + port);
});










