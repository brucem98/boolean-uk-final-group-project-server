const prisma = require("../../utils/database");
const getAll = async (req, res) => {
  try {
    const data = await prisma.competition.findMany();
    res.json({ data });
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
};

module.exports = { getAll };
