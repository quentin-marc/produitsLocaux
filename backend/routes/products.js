var express = require('express');
var router = express.Router();

const { getProducts } = require("../controllers/products");

/* GET */

// get all the available products
router.route("/").get(getProducts);

module.exports = router;