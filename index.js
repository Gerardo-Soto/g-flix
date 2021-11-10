// Packages
const express = require('express');
const routeApi = require('./routes');// = ./routes/index.js

// config server
const app = express();
const port = 3000;

// Middleware to receive JSON POST:
app.use(express.json());

// Middleware created for the project:
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errors.handler');

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

// include my Middleware Errors to the end
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//run app:
app.listen(port, "0.0.0.0", () => {
  // console.log -> warning: Bad practice by Eslint:
  // console.log in Dev (yes) / console.log in Prod (NO)
  console.log('Server listen at http://localhost:' + port);
});


















