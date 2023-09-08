const express = require("express");
const router = express.Router();
const ProductsServices = require("../services/products.services");
const service = new ProductsServices();
const validateHandle = require("../midlleware/validate.handle");
const { createProductSchema, updateProductSchema, getProductSchema } = require("../schemas/prouct.schema")


router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
});

router.get('/filter/', (req, res) => {
  res.send('filter...')
});

router.get("/:id", validateHandle(getProductSchema,"params"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error)
  }
});


router.post("/", validateHandle(createProductSchema, "body"), async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(200).json(newProduct);
});

router.patch("/:id", validateHandle(updateProductSchema, "params"), async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await service.update(id, body);
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    })
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await service.delete(id);
  res.json(data);
})

module.exports = router
