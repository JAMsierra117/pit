const dbConnection = require("../../app/database/config")


const guardarUsuario = async(usuario) => {
    return new Promise((resolve,reject) => {
        dbConnection.query('insert into usuarios set ?', usuario, (err,res)=> {
            if(err) reject()

            resolve(res)
        })
    })
}

const findByCorreo = async(correo) => {
    return new Promise((resolve, reject) => {
        dbConnection.query('select * from usuarios where correo = ?', correo, (err,res) => {
            if(err) reject()

            resolve(res[0])
        })
    })
}


module.exports = {
    guardarUsuario,
    findByCorreo
}