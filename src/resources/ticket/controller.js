const prisma = require("../../utils/database");

const getAllTickets = async (req, res) => {
  try {
    const data = await prisma.ticket.findMany({
      include: {
        competition: true
      }
    });
    res.json({ data });
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
}


const getCompetitionFromOneTicket = async (req, res) => {
 
  try {
  const data = await prisma.ticket.findUnique({   //You can use .findFirst and .findUnique
  where: {
    id: parseInt(req.params.id)
  },  
     
            include: {
              competition: true
            }
     
  })
  res.json(data)
} catch (error) {
  console.error("[ERROR] getAll: ", { error });
  res.json({ error });
}
}


module.exports = { getAllTickets, getCompetitionFromOneTicket };
