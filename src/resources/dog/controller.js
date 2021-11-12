const prisma = require("../../utils/database");

const getAllDogs = async (req, res) => {
  try {
    const data = await prisma.dog.findMany({
        include: {
            competitions: {
              include: {
                competition: true,
              }
            },
            participant: true,
          }     
    
    });
    res.json({ data });
  } catch (error) {
    console.error({ error });

    res.status(500).json({ error: error.message });
  }
};

function createOneDogAndParticipant(req,res){ 
  console.log(req.body)
  prisma.dog.create({
    data: {
        ...req.body,   // copies the keys and fills them with the corresponding req.body (ex: req.body.firstName) 
        participant: {
            create: {
                  ...req.body.participant,                                // we're creating an object inside req.body
                },  
          },
          
      },
      include : {
          participant: true,
      },
      })
      .then((result)=>{
          console.log(result)
          res.json({data: result})
      })
      .catch(error=>{
          console.error(error)
          res.status(500).json(error)
      })
}

module.exports = { getAllDogs, createOneDogAndParticipant };
