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

function createTicket(req, res) {
  console.log(req.body)
  prisma.ticket.create({
    data: {
      ...req.body,
    },
  })
    .then((result) => {
      console.log(result)
      res.json({ data: result })
    })
    .catch(error => {
      console.error(error)
      res.status(500).json(error)
    })
}

const deleteById = async (req, res) => {
  console.log("req.params", req.params.id)
  try {
    const deleteById = await prisma.ticket.delete({
      where: {
        id: parseInt(req.params.id),
      },
    })
    res.json({data: deleteById})
  } catch (error) {
    console.error({error})

    res.status(500).json({error: error.message})
  }
}


module.exports = { getAllTickets, getCompetitionFromOneTicket, createTicket, deleteById };
