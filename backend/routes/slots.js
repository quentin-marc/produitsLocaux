var express = require('express');
var router = express.Router();

const { getSlots } = require("../controllers/slots");

/* GET */

// get all the available slots
router.route("/").get(getSlots);

module.exports = router;