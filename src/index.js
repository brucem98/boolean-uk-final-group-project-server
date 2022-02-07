require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

/*IMPORT ROUTERS */

const competitionsRouter = require("./resources/competition/router");
const dogsRouter = require("./resources/dog/router");
const ticketsRouter = require("./resources/ticket/router");
const participantRouter = require("./resources/participant/router");

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* SETUP ROUTES */

app.use("/competitions", competitionsRouter);
app.use("/dogs", dogsRouter);
app.use("/tickets", ticketsRouter);
app.use("/participants", participantRouter);
app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
