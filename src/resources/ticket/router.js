const express = require("express");

const { getAllTickets, getCompetitionFromOneTicket, createTicket, deleteById } = require("./controller");

const router = express.Router();

router.get("/", getAllTickets);

router.get("/:id", getCompetitionFromOneTicket);

router.post("/", createTicket)

router.delete("/:id", deleteById)

module.exports = router;
