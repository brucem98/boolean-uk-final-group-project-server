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

const getOneById = async(req, res) => {
    const competitionId = parseInt(req.params.id)
    try {
        const competitionData = await prisma.competition.findUnique({
            where: {
                id:competitionId
            }
        })
        res.json(competitionData)
    } catch (error) {
        console.error("[ERROR] getAll: ", { error });
        res.json({ error });   
    }
}

module.exports = { getAll, getOneById };
