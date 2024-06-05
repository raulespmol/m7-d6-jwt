require('dotenv').config()
const usuariosModel = require('../models/usuarios.model')
const jwt = require("jsonwebtoken")

const iniciarSesion = async (req, res) => {
  try {
    const credenciales = req.body
    const {email} = credenciales
    await usuariosModel.verificarCredenciales(credenciales)

    const token = jwt.sign({email}, process.env.SECRET)
    res.send({token})
  } catch (error) {
    res.status(error.code).send(error)
  }
}

module.exports = {
  iniciarSesion
}