const prisma = require("../../utils/database");

const getAllTickets = async (req, res) => {
  try {
    const data = await prisma.ticket.findMany({
      include: {
        competition: true,
      },
    });
    res.json({ data });
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
};

const getCompetitionFromOneTicket = async (req, res) => {
  try {
    const data = await prisma.ticket.findUnique({
      //You can use .findFirst and .findUnique
      where: {
        id: parseInt(req.params.id),
      },

      include: {
        competition: true,
      },
    });
    res.json(data);
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
};

const createTicket = async (req, res) => {
  console.log({ body: req.body });

  const { firstName, lastName, email, vaccinated } = req.body;

  try {
    const newTicket = await prisma.ticket.create({
      data: {
        firstName,
        lastName,
        email,
        vaccinated,
        competition: {
          connect: { id: req.body.competitionId },
        },
      },
    });
    res.json({ data: newTicket });
  } catch (error) {
    console.error("[ERROR] createOneRecipe: ", { error });
    res.json({ error });
  }
};

const deleteById = async (req, res) => {
  console.log("req.params", req.params.id);
  try {
    const deleteById = await prisma.ticket.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json({ data: deleteById });
  } catch (error) {
    console.error({ error });

    res.status(500).json({ error: error.message });
  }
};

const updateOneById = async (req, res) => {
  console.log({ params: req.params, body: req.body });

  const { id } = req.params;

  try {
    const ticketToUpdate = await prisma.ticket.update({
      where: { id: parseInt(id) },
      data: { ...req.body },
    });
    res.json({ data: ticketToUpdate });
  } catch (error) {
    console.error("[ERROR] updateOneById", { error });

    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTickets,
  getCompetitionFromOneTicket,
  createTicket,
  deleteById,
  updateOneById,
};
