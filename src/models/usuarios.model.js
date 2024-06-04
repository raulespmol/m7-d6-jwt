const database = require('../database/config')

const checkConnection = async () => {
  const consulta = "SELECT NOW()"
  const {rows} = await database.query(consulta)

  return rows
}

const usuariosModel = {
  checkConnection
}

module.exports = usuariosModel