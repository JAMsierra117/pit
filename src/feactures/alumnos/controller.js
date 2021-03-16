
const { findById, findAll } = require('./data');
const Alumno = require('./model');


const getAlumno = async(req, res) => {
 
    try {
        
        const id = req.params.id;

        const alumno = await findById(id)

        if (!alumno.length){
            return res.json ({
                success:false,
                message:'El alumno no se encuentra registrado'
            })
        }

        res.json({
            success: true,
            data : alumno[0]
        })
    }
    catch(err) {
        console.log(err)
        res.json({
            success:false,
            message: 'Ocurrio un problema en el servidor favor de contactar a soporte.'
        })
    }

}

const getAlumnos = async(req, res) => {
 
    try {

        const alumnos = await findAll()
        
        res.json({
            success: true,
            data: alumnos
        })

    } catch(err) {
        res.json({
            success:false,
            message: 'Ocurrio un problema en el servidor favor de contactar a soporte.'
        })
    }

}


module.exports = {
    getAlumno,
    getAlumnos
}