const express = require("express");

const {
  getAllDogs,
  createOneDogAndParticipant,
  getOneById,
  updateOneById,
  deleteById
} = require("./controller");

const router = express.Router();

router.get("/", getAllDogs);

router.post("/", createOneDogAndParticipant);

router.get("/:id", getOneById);

router.patch("/:id", updateOneById);

router.delete("/:id", deleteById);

module.exports = router;
