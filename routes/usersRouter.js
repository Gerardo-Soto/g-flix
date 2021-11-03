const express = require('express');
const route = express.Router();// = /users

// route for get user by id
route.get('/:id', (req, res) => {
  const {id} = req.params;
  // if user exists
  if (id) {
    res.status(200).json({userId: id});
  } else {
    res.status(404).json({message: 'User not found'});
  }
});

// route of user with Query params
route.get('/', (req, res) => {
  // Names of the Query params:
  const { limit, offset } = req.query;
  // validate if received params:
  if (limit && offset) {
    res.status(200).json({
      limit,
      offset
    });
  } else {
    res.status(200).send('There are not params.');
  }
});

// exports routes:
module.exports = route;
