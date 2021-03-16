const bcrypt = require('bcryptjs')
const { generarToken } = require('../../app/helpers/jwt')
const { guardarUsuario, findByCorreo } = require('./data')
const { Usuario } = require('./model')

const registrarUsuario = async(req,res) => {

    try{
        const { user, correo, password } = req.body
        
        var usuario = new Usuario(user, correo, password)

        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password, salt)


        const newUser = await guardarUsuario(usuario)

        const token = await generarToken(newUser.insertId)

        console.log(newUser)

        res.json({
            success:true,
            token: token
        })
    }
    catch(err){
        res.json({
            success:false,
            data: 'Ocurrio un problema al guardar en el servidor, favor de contactar a soporte'
        })
    }
}

const loginUsuario = async(req, res) => {

    try {

        const { correo, password } = req.body

        const usuariodb = await findByCorreo(correo)

        if (!usuariodb){
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            })
        }
      

        const validPassword = bcrypt.compareSync(password, usuariodb.password)

        if (!validPassword){
            return res.status(400).json({
                success: false,
                message: 'Contraseña invalida'
            })
        }

         

        const token = await generarToken(usuariodb.id)

      

        res.json({
            success:true,
            token: token
        })

    }
    catch(err){
        console.log(err)
        res.json({
            success:false,
            data: 'Ocurrio un problema al intentar logearse en el servidor, favor de contactar a soporte'
        })
    }


}




module.exports = {
    registrarUsuario,
    loginUsuario
}