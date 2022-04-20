const { Comment, CommentLike, User } = require('../models')

const CreateComment = async (req, res) => {
    try {
        let authorId = parseInt(req.params.id)
        let streetId = parseInt(req.params.streetid)
        let commentBody = {
            authorId,
            ...req.body,
            streetId
        }
        let newComment = await Comment.create(commentBody)
        res.send(newComment)
    } catch (error) {
        throw error
    }
}

const GetStreetsComments = async (req, res) => {
    try {
        let streetId = req.params.streetid
        let streetsComments = await Comment.findAll({
            where:{
                streetId
            },
            order: ['createdAt'],
            include:[{model: User}, {model: CommentLike}]
        })
        res.send(streetsComments)
    } catch (error) {
        throw error
    }
}

const LikeComment = async (req, res) => {
    try {
        let userId = req.params.id
        let commentId = req.params.commentid
        let likeBody = {
            userId,
            commentId
        }
        let alreadyLiked = await CommentLike.count({where: likeBody})
        if (alreadyLiked>0) {
            res.send('already liked')
        }
        else{
            let newCommentLike = await CommentLike.create(likeBody)
            res.send(newCommentLike)
        }
        
    }   catch (error) {
        throw error
    }
}

const GetLikedComments = async (req, res) => {
    try{
        let userId = req.params.id
        let likedComments = await CommentLike.findAll({
            where: { userId },
            include: Comment
        })
        res.send(likedComments)
    } catch (error) {
        throw error
    }
}

const CheckLike = async (req, res) => {
    try {
        let userId = req.params.id
        let commentId = req.params.commentid
        let likeBody = {
            userId,
            commentId
        }
        let alreadyLiked = await CommentLike.count({where: likeBody})
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

const DeleteComment = async (req, res) => {
    try {
        let authorId = req.params.id
        let id = req.params.commentid
        let deleted = await Comment.destroy({
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

const UpdateComment = async (req, res) => {
    try{
        let id = req.params.commentid
        let authorId = req.params.id
        let updated = await Comment.update(req.body,{
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
    CreateComment,
    GetStreetsComments,
    LikeComment,
    DeleteComment,
    UpdateComment,
    CheckLike,
    GetLikedComments
} 