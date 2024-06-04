const usuariosModel = require('../models/usuarios.model')

const connect = async (req, res) => {
  const result = await usuariosModel.checkConnection()

  res.json(result)
}

module.exports = {
  connect
}