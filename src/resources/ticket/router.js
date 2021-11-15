const express = require("express");

const { getAllTickets, getCompetitionFromOneTicket, createTicket, deleteById, updateOneById } = require("./controller");

const router = express.Router();

router.get("/", getAllTickets);

router.get("/:id", getCompetitionFromOneTicket);

router.post("/", createTicket)

router.delete("/:id", deleteById)

router.patch("/:id", updateOneById)

module.exports = router;
