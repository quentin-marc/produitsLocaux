var express = require('express');
var router = express.Router();

const { newCheckout } = require("../controllers/checkout");

/* POST checkout. */
router.route("/").post(newCheckout);

module.exports = router;