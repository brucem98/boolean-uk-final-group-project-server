const express = require("express");

const { getAllTickets, getCompetitionFromOneTicket } = require("./controller");

const router = express.Router();

router.get("/", getAllTickets);

// router.get("/tickets/:id/competitions", getCompetitionFromOneTicket)

router.get("/:id", getCompetitionFromOneTicket)

module.exports = router;
