const express = require("express");
const router = express.Router();

router.get("/:categoriId/products/:id",(req,res) => {
  const {categoriId, id} = req.params;
  res.json({
    categoriId,
    id


  })
})


module.exports = router;
