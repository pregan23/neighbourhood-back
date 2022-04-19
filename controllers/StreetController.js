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
            order: [['createdAt', 'DESC']],
            include: [{model: User},{model: StreetLike}]
            
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
        let alreadyLiked = await StreetLike.count({where: likeBody})
        console.log(alreadyLiked)
        if (alreadyLiked>0) {
            res.send('already liked')
        }
        else {
        let newStreetLike = await StreetLike.create(likeBody)
        res.send(newStreetLike)
        }
    }   catch (error) {
        throw error
    }
}

const CheckLike = async (req, res) => {
    try {
        let userId = req.params.id
        let streetId = req.params.streetid
        let likeBody = {
            userId,
            streetId
        }
        let alreadyLiked = await StreetLike.count({where: likeBody})
        if (alreadyLiked>0) {
            res.send('already liked')
        }
        else {
            res.send('not yet liked')
        }
    } catch (error) {
        throw error
}
}


const DeleteStreet = async (req, res) => {
    try {
        let authorId = req.params.id
        let id = req.params.streetid
        let deleted = await Street.destroy({
            where: {
                authorId,
                id

            }
        })
        res.status(200).send('deleted')
    } catch (error) {
        throw error
}
}

const UpdateStreet = async (req, res) => {
    try{
        let id = req.params.streetid
        let authorId = req.params.id
        let updated = await Street.update(req.body, {
            where: { authorId,
                     id
            }
        }
        )
        res.send(updated)
    } catch (error) {
        throw error
}
}



module.exports = {
    CreateStreet,
    GetAllStreets,
    LikeStreet,
    DeleteStreet,
    UpdateStreet,
    CheckLike
}