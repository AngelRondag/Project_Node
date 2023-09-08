const joi = require("joi");


const id = joi.string().uuid();
const name = joi.string().alphanum().min(3).max(15);
const price = joi.number().integer().min(10);

createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
});

updateProductSchema = joi.object({
  name: name,
  price:price,
});

getProductSchema = joi.object({
  id: id.required(),
});

module.exports = {createProductSchema, updateProductSchema, getProductSchema};
