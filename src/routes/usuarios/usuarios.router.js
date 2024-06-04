const usuariosRouter = require('express').Router()
const {nuevoUsuario} = require('../../controllers/usuarios.controller')

usuariosRouter.post('/', nuevoUsuario)

usuariosRouter.get('/', (req, res) => {
  res.json({msg: "Desde GET /usuarios"})
})

module.exports = usuariosRouter