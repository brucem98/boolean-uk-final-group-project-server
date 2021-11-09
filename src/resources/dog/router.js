const express = require("express")

const {getAllDogs} = require("./controller")

const router = express.Router();

router.get("/", getAllDogs)

module.exports = router;