const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.post('/new', controller.CreateUser)

module.exports = Router