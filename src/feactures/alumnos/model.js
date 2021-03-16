const { Sequelize } = require('sequelize')
const sequelize = require('../../app/database/sequelize')

const Alumno = sequelize.define('alumnos',{
    clave: {type: Sequelize.STRING},
    nombres: {type: Sequelize.STRING},
    paterno: {type: Sequelize.STRING},
    fechaNacimiento: {type: Sequelize.DATE}
})

module.exports = Alumno