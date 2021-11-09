const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (event) => {
  console.log("Query: \n", event.query);
  console.log("Params: \n", event.params);
});

module.exports = prisma;