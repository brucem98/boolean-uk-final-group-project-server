const express = require("express");

const { getAllDogs, createOneDogAndParticipant } = require("./controller");

const router = express.Router();

router.get("/", getAllDogs);

router.post("/", createOneDogAndParticipant )

module.exports = router;
