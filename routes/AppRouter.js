const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const StreetRouter = require('./StreetRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/street', StreetRouter)
Router.use('/user', UserRouter)
Router.use('/comment', CommentRouter)


module.exports = Router