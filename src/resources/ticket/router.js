const express = require("express");

const { getAllTickets } = require("./controller");

const router = express.Router()

router.get("/", getAllTickets);

module.exports = router;
