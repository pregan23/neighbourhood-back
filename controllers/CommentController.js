const { Comment } = require('../models')

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

module.exports = {
    CreateComment
} 