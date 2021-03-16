const { Router } = require('express')
const { registrarUsuario, loginUsuario } = require('./controller')


const router = Router()


router.post('/registrar', registrarUsuario)

router.post('/login', loginUsuario)


module.exports = router