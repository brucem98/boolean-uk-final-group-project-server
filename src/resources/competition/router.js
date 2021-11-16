const express = require("express");

const { getAll, getOneById } = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getOneById);

module.exports = router;
