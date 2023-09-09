const express = require("express");
const productsRouter = require("./products.router");
const usersRouter = require("./categories.router");
const categories = require("./users.router")

const apiRouter = (app) => {
  const router = express.Router();
  app.use('/api/v1',router)
  router.use("/products/",productsRouter);
  router.use("/users",usersRouter);
  router.use("categories",categories)
}


module.exports = apiRouter
