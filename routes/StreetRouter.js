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
Router.get('/:id/like/:streetid', middleware.stripToken,
                                    middleware.verifyToken,
                                    controller.CheckLike)

Router.delete('/:id/delete/:streetid', middleware.stripToken,
                                        middleware.verifyToken,
                                        controller.DeleteStreet)

Router.put('/:id/update/:streetid', middleware.stripToken,
                                    middleware.verifyToken,
                                    controller.UpdateStreet)
Router.get('/:id/mylikes', middleware.stripToken,
                            middleware.verifyToken,
                            controller.GetLikedStreets)
module.exports = Router