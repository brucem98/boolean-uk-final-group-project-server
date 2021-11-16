const express = require("express");

const {
  getOneById,
  getAllParticipants,
  updateOneById,
} = require("./controller");

const router = express.Router();

router.get("/", getAllParticipants);

router.get("/:id", getOneById);

router.patch("/:id", updateOneById);

module.exports = router;
