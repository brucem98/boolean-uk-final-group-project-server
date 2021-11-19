const prisma = require("../../utils/database");
// const { connect } = require("../ticket/router");

const getAllDogs = async (req, res) => {
  try {
    const data = await prisma.dog.findMany({
      include: {
        competitions: {
          include: {
            competition: true,
          },
        },
        participant: true,
      },
    });
    res.json({ data });
  } catch (error) {
    console.error({ error });

    res.status(500).json({ error: error.message });
  }
};

const getOneById = async (req, res) => {
  const dogId = parseInt(req.params.id);
  try {
    const dogData = await prisma.dog.findUnique({
      where: {
        id: dogId,
      },
      include: {
        competitions: {
          include: {
            competition: true,
          },
        },
        participant: true,
      },
    });
    res.json(dogData);
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
};

async function createOneDogAndParticipant(req, res) {
  console.log({ body: req.body });
  const { name, petAge, breed, img, shotStatus } = req.body;
  const { firstName, lastName, vaccinated } = req.body.participant;
  try {
    const result = await prisma.dog.create({
      data: {
        name,
        petAge: parseInt(petAge),
        breed,
        img,
        shotStatus,
        participant: {
          create: {
            firstName,
            lastName,
            age: parseInt(req.body.participant.age),
            vaccinated,
          },
        },
        competitions: {
          create: [
            {
              competition: {
                connect: {
                  id: req.body.competitionId,
                },
              },
            },
          ],
        },
      },
      include: {
        participant: true,
        competitions: true,
      },
    });
    res.json({ data: result });
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error: error.message });
  }
}

const updateOneById = async (req, res) => {
  console.log({ params: req.params, body: req.body });

  const { id } = req.params;

  try {
    const dogToUpdate = await prisma.dog.update({
      where: { id: parseInt(id) },
      data: { ...req.body },
    });
    res.json({ data: dogToUpdate });
  } catch (error) {
    console.error("[ERROR] updateOneById", { error });

    res.status(500).json({ error: error.message });
  }
};

const deleteById = async (req, res) => {
  console.log("req.params", req.params.id);

  const targetId = parseInt(req.params.id);

  try {
    const deleteById = await prisma.dog.delete({
      where: {
        dogId: targetId,
      },
    });
    res.json({ data: deleteById });
  } catch (error) {
    console.error({ error });

    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDogs,
  createOneDogAndParticipant,
  getOneById,
  updateOneById,
  deleteById,
};
