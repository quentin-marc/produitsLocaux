var express = require('express');
var router = express.Router();

const { newUser, newOrder } = require("../controllers/users");

/* POST */

// create a new user
router.route("/").post(newUser);

// create a new order
router.route("/order").post(newOrder);


module.exports = router;