const prisma = require("../../utils/database");

const getAllParticipants = async (req, res) => {
  try {
    const data = await prisma.participant.findMany({
      include: {
        dog: true,
      },
    });
    res.json({ data });
  } catch (error) {
    console.error({ error });

    res.status(500).json({ error: error.message });
  }
};

const getOneById = async (req, res) => {
  const participantId = parseInt(req.params.id);
  try {
    const dogData = await prisma.participant.findUnique({
      where: {
        id: participantId,
      },
      include: {
        dog: true,
      },
    });
    res.json(dogData);
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
};

const updateOneById = async (req, res) => {
  console.log({ params: req.params, body: req.body });

  const { id } = req.params;

  try {
    const participantToUpdate = await prisma.participant.update({
      where: { id: parseInt(id) },
      data: { ...req.body },
    });
    res.json({ data: participantToUpdate });
  } catch (error) {
    console.error("[ERROR] updateOneById", { error });

    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllParticipants, getOneById, updateOneById };
