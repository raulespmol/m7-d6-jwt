const loginRouter = require('express').Router()

loginRouter.post('/', (req, res) => {
  res.json({msg: "Desde POST /login"})
})

module.exports = loginRouter