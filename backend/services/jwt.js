const jwt = require("jwt-simple")
const moment = require("moment")

const secret = "Clave_secreta-DelPROYECTO"

const crearToken = (user)=>{
    const payload = {
        id: user._id,
        nombre: user.nombre,
        rol: user.rol,
        iat: moment().unix(),
        exp: moment().add(30, "days").unix()
    }
    return jwt.encode(payload, secret)
}

module.exports = {
    crearToken,
    secret
}