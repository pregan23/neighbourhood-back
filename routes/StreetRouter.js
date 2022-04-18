const Router = require('express').Router()
const controller = require('../controllers/StreetController')
const middleware = require('../middleware')

Router.post('/:id/new', middleware.stripToken,
                        middleware.verifyToken,
                        controller.CreateStreet)
Router.get('/feed', middleware.stripToken,
                    middleware.verifyToken,
                    controller.GetAllStreets)
Router.post('/:id/like/:streetid',  middleware.stripToken,
                                    middleware.verifyToken,
                                    controller.LikeStreet)
module.exports = Router