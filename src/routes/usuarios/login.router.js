const loginRouter = require('express').Router()
const {iniciarSesion} = require('../../controllers/login.controller')

loginRouter.post('/', iniciarSesion)

module.exports = loginRouter