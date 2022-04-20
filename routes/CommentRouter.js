const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

Router.post('/:id/:streetid/new', middleware.stripToken,
                                    middleware.verifyToken,
                                    controller.CreateComment)
Router.get('/:streetid', middleware.stripToken,
                            middleware.verifyToken,
                            controller.GetStreetsComments)
Router.post('/:id/like/:commentid', middleware.stripToken,
                                    middleware.verifyToken,
                                    controller.LikeComment)
Router.get('/:id/like/:commentid', middleware.stripToken,
                                    middleware.verifyToken,
                                    controller.CheckLike)
Router.delete('/:id/delete/:commentid', middleware.stripToken,
                                        middleware.verifyToken,
                                        controller.DeleteComment)
Router.put('/:id/update/:commentid', middleware.stripToken,
                                        middleware.verifyToken,
                                        controller.UpdateComment)
Router.get('/:id/mylikes', middleware.stripToken,
                            middleware.verifyToken,
                            controller.GetLikedComments)
Router.get('/:id/mycomments', middleware.stripToken,
                                middleware.verifyToken,
                                controller.GetMyComments)

module.exports = Router