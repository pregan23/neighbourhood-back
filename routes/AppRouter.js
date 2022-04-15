const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const StreetRouter = require('./StreetRouter')

Router.use('/street', StreetRouter)
Router.use('/user', UserRouter)


module.exports = Router