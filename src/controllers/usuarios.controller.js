const usuariosModel = require('../models/usuarios.model')

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
    console.log(req.header("Authorization"));
    res.send("desde GET /usuarios")
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  nuevoUsuario,
  getUsuario
}