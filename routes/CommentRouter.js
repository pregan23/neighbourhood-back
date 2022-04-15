const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.post('/:id/:streetid/new', controller.CreateComment)
Router.get('/:streetid', controller.GetStreetsComments)

module.exports = Router