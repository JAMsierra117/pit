const jwt = require('jsonwebtoken')

const validarJWT = (req, res, next) => {

    const token = req.header('x-token')

    if (!token)
        return res.status(401).json({ success: false, messasge: 'no hay un token'})

    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET)

        req.uid = uid

        next()
    } 
    catch(erro) {
        return res.status(401).json({ success: false, message: 'token invalido'})
    }


}

module.exports = {
    validarJWT
}