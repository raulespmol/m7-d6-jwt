const usuariosModel = require('../models/usuarios.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const nuevoUsuario = async (req, res) => {
  try {
    const usuario = req.body
    const result = await usuariosModel.registrarUsuario(usuario)
  
    res.send(result)
  } catch (error) {
    console.log(error)
    res.send(error.detail)
  }
}

const getUsuario = async (req, res) => {
  try {
    const Authorization = req.header("Authorization")
    const token = Authorization.split(" ")[1]
    
    jwt.verify(token, process.env.SECRET)
    const {email} = jwt.decode(token)
    const usuario = await usuariosModel.obtenerInfoUsuario(email)
    
    res.send(usuario)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  nuevoUsuario,
  getUsuario
}