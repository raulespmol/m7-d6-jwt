const usuariosModel = require('../models/usuarios.model')

const nuevoUsuario = async (req, res) => {
  try {
    const usuario = req.body
    const result = await usuariosModel.registrarUsuario(usuario)
  
    res.send(result)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  nuevoUsuario
}