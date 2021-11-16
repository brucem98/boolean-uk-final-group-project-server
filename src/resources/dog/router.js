const express = require("express");

const {
  getAllDogs,
  createOneDogAndParticipant,
  getOneById,
  updateOneById,
} = require("./controller");

const router = express.Router();

router.get("/", getAllDogs);

router.post("/", createOneDogAndParticipant);

router.get("/:id", getOneById);

router.patch("/:id", updateOneById);

module.exports = router;
