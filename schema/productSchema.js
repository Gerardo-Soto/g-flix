const Joi = require('joi');

// Schema from Product
const id = Joi.string().uuid();
const name = Joi.string().min(4).max(30);
const price = Joi.number().positive().min(10);
const image = Joi.string().uri();

// Operations
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const updateProductSchema = Joi.object({
  //id: id.required(),
  name: name,
  price: price,
  image: image,
});

const deleteProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {createProductSchema, updateProductSchema, deleteProductSchema, getProductSchema};
