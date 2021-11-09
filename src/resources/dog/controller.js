const prisma  = require("../../utils/database")

const getAllDogs = async (req, res) => {
    try {
        const data = await prisma.dog.findMany()
        res.json({data})
    }catch (error) {
        console.error({error})

        res.status(500).json({error: error.message})
    }
   
}

module.exports = {getAllDogs}