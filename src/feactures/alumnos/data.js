const dbConnection = require('../../app/database/config')
const Alumno = require('./model')


const findById = async(id) => {
    return Alumno.findAll({
        attributes: ['id','clave','nombres','paterno','materno','fechaNacimiento'],
        where: { id: id}
    })
}

const findAll = async() => {
    return new Promise((resolver, reject) => {
        dbConnection.query('select * from alumnos', (err,res)=> {
            if (err) reject()
            
            resolver(res)
        })
    })
}

module.exports = {
    findById,
    findAll
}