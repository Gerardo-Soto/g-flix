// Packages
const express = require('express');
const path = require('path');
const cors = require('cors');
const routeApi = require('./routes');// = ./routes/index.js
const fs = require('fs');

//joining path of directory
let directory = "images/test";
let files = fs.readdirSync(directory);
console.log(files);

files.forEach(file => {
  console.log(file);
});

function fetchMovie(id) {
  return files[id];
}


// config server
const app = express();

const whitelist = ['http://127.0.0.1:3000', 'http://github.gerardosoto.com/g-flix/'];
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
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  //res.send('Hello, server on express');
  let movieSelected = fetchMovie(1);
  console.log("Movie selected: "+ movieSelected);
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/movies', (req, res) => {
  console.log("Backend get movies test:b");
  res.setHeader('Content-Type', 'text/plain');
  res.send(Buffer.from('navidad, grtinch'));
  //res.status(200).send({data: 'navidad, grtinch'});
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


















