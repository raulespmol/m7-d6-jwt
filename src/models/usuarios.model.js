const database = require('../database/config')
const bcrypt = require('bcryptjs')

const registrarUsuario = async ({email, password, rol, lenguage}) => {
  const passwordEncriptada = bcrypt.hashSync(password)

  const consulta = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *"
  const values = [email, passwordEncriptada, rol, lenguage]

  const {rows: usuario} = await database.query(consulta, values)
  return usuario
}

const verificarCredenciales = async ({email, password}) => {
  const consulta = "SELECT * FROM usuarios WHERE email = $1"
  const values = [email]
  
  const {rows: [usuario], rowCount} = await database.query(consulta, values)
  const {password: passwordEncriptada} = usuario
  const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)

  if(!passwordEsCorrecta || !rowCount){
    throw {code: 401, message: "No existe un usuario con estas credenciales"}
  }
}

const usuariosModel = {
  registrarUsuario,
  verificarCredenciales
}

module.exports = usuariosModel