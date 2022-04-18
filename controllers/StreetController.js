const { user } = require('pg/lib/defaults')
const { Street, StreetLike, User } = require('../models')

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

const GetAllStreets = async (req, res) => {
    try{
        const streets = await Street.findAll({
            include: User
        })
        res.send(streets)
    }catch (error) {
        throw error
    }
}

// const GetLikedStreets = async (req, res) => {
//     try{
//         const likedStreets = await Street.findAll({
//             where:
//         })
//     }
// }

const LikeStreet = async (req, res) => {
    try {
        let userId = req.params.id
        let streetId = req.params.streetid
        let likeBody = {
            userId,
            streetId
        }
        let newStreetLike = await StreetLike.create(likeBody)
        res.send(newStreetLike)
    }   catch (error) {
        throw error
    }
}

module.exports = {
    CreateStreet,
    GetAllStreets,
    LikeStreet
}