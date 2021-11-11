// Packages
const express = require('express');
const cors = require('cors');
const routeApi = require('./routes');// = ./routes/index.js

// config server
const app = express();

const whitelist = ['http://127.0.0.1', 'http://github.gerardosoto.com/g-flix/'];
const options = {
  origin: (origin, callback) => {
    //console.log(origin);
    if (whitelist.includes(origin) || !origin ) {
      callback(null, true);
    } else {
      callback(new Error('Permission denied, you ['+ origin +'] are not on the whitelist. Contact administrator.'));
    }
  }
}

app.use(cors(options));
//const port = 3000;
const port = process.env.PORT || 3000;

// Middleware to receive JSON POST:
app.use(express.json());

// Middleware created for the project:
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/errors.handler');

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


















