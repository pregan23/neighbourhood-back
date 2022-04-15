const { Street } = require('../models')

const CreateStreet = async (req, res) => {
    try {
        let authorId = parseInt(req.params.id)
        let streetBody = {
            authorId,
            ...req.body
        }
        let newStreet = await Street.create(streetBody)
        res.send(newStreet)
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateStreet
}