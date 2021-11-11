const prisma = require("../../utils/database");

const getAllTickets = async (req, res) => {
  try {
    const data = await prisma.ticket.findMany();
    res.json({ data });
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
};


module.exports = { getAllTickets };
