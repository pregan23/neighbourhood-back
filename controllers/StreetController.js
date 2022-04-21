const { user } = require('pg/lib/defaults')
const { Street, StreetLike, User, Comment } = require('../models')

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

const GetMyStreets = async (req, res) => {
    try{
        let authorId = req.params.id
        const streets = await Street.findAll({
            where:{authorId}
        })
        res.send(streets)
    } catch (error) {
        throw error
    }
}

const GetLikedStreets = async (req, res) => {
    try{
        let userId = req.params.id
        let likedStreets = await StreetLike.findAll({
            where: { userId },
            include: Street
        })
        res.send(likedStreets)
    } catch (error) {
        throw error
    }
}

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

const UnlikeStreet = async (req, res) => {
    try {
        let userId = req.params.id
        let streetId = req.params.streetid
        let likeBody = {
            userId,
            streetId
        }
        let alreadyLiked = await StreetLike.count({where: likeBody})
        if (alreadyLiked>0) {
            let unliked = await StreetLike.destroy({where: likeBody})
            res.status(200).send('unliked')
        }
        else{
            
            res.status(200).send('not yet liked')
        }
        

    }  catch (error) {
        throw error
    }
}

const LikeCount = async (req, res) => {
   try {
    let streetId = req.params.streetid
    let howMany = await StreetLike.count({where: {streetId}})
    console.log(howMany)
    res.json({number: howMany})
   } catch (error) {
    throw error
}
}

const CommentCount = async (req, res) => {
    try {
     let streetId = parseInt(req.params.streetid)
     let howMany = await Comment.count({where: {streetId}})
     console.log(howMany)
     res.json({number: howMany})
    } catch (error) {
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
            res.json(alreadyLiked)
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
    CheckLike,
    GetLikedStreets,
    GetMyStreets,
    UnlikeStreet,
    LikeCount,
    CommentCount
}