require('dotenv').config()
const usuariosModel = require('../models/usuarios.model')
const jwt = require("jsonwebtoken")

const iniciarSesion = async (req, res) => {
  try {
    const credenciales = req.body
    await usuariosModel.verificarCredenciales(credenciales)

    const token = jwt.sign(credenciales.email, process.env.SECRET)
    res.send({token})
  } catch (error) {
    res.status(error.code).send(error)
  }
}

module.exports = {
  iniciarSesion
}