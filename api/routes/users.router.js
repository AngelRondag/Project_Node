const express = require("express");
const router = express.Router();
const getusers = require("../../functions")


router.get("/", (req, res) => {
  const users = getusers(req,res);

});


module.exports = router;
