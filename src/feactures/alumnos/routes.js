const { Router } = require('express')
const { validarJWT } = require('../../app/middlewares/validar-jwt')
const { getAlumno, getAlumnos } = require('./controller')


const router = Router()

router.get('/:id', validarJWT ,getAlumno)

router.get('/', validarJWT, getAlumnos)


module.exports = router