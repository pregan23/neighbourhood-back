const Router = require('express').Router()
const controller = require('../controllers/StreetController')

Router.post('/:id/new', controller.CreateStreet)
Router.get('/feed', controller.GetAllStreets)
Router.post('/:id/like/:streetid', controller.LikeStreet)
module.exports = Router