const usuariosRouter = require('express').Router()
const {nuevoUsuario, getUsuario} = require('../../controllers/usuarios.controller')

usuariosRouter.post('/', nuevoUsuario)
usuariosRouter.get('/', getUsuario)

module.exports = usuariosRouter