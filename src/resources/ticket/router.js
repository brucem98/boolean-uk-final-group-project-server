const express = require("express");

const { getAllTickets, getCompetitionFromOneTicket, createTicket } = require("./controller");

const router = express.Router();

router.get("/", getAllTickets);

// router.get("/tickets/:id/competitions", getCompetitionFromOneTicket)

router.get("/:id", getCompetitionFromOneTicket);

router.post("/", createTicket)

module.exports = router;
