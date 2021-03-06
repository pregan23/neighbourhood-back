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
Router.delete('/:id/like/:streetid', middleware.stripToken,
                                        middleware.verifyToken,
                                        controller.UnlikeStreet)
Router.get('/:id/like/:streetid', middleware.stripToken,
                                    middleware.verifyToken,
                                    controller.CheckLike)
Router.get('/like/:streetid', middleware.stripToken,
                                middleware.verifyToken,
                                controller.LikeCount)

Router.delete('/:id/delete/:streetid', middleware.stripToken,
                                        middleware.verifyToken,
                                        controller.DeleteStreet)

Router.put('/:id/update/:streetid', middleware.stripToken,
                                    middleware.verifyToken,
                                    controller.UpdateStreet)
Router.get('/:id/mylikes', middleware.stripToken,
                            middleware.verifyToken,
                            controller.GetLikedStreets)
Router.get('/:id/mystreets', middleware.stripToken,
                            middleware.verifyToken,
                            controller.GetMyStreets)
Router.get('/:streetid/comments', middleware.stripToken,
                            middleware.verifyToken,
                            controller.CommentCount)
module.exports = Router