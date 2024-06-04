const database = require('../database/config')

const registrarUsuario = async ({email, password, rol, lenguage}) => {
  const consulta = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *"
  const values = [email, password, rol, lenguage]

  const {rows: usuario} = await database.query(consulta, values)
  return usuario
}

const usuariosModel = {
  registrarUsuario
}

module.exports = usuariosModel