const usuariosRouter = require('express').Router()
const {connect} = require('../../controllers/usuarios.controller')

usuariosRouter.get('/', connect)
// usuariosRouter.get('/', (req, res) => {
//   res.json({msg: "Desde GET /usuarios"})
// })

usuariosRouter.post('/', (req, res) => {
  res.json({msg: "Desde POST /usuarios"})
})

module.exports = usuariosRouter