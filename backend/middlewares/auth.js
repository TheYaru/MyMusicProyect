const jwt = require("jwt-simple")

const moment = require("moment")


const libjwt = require("../services/jwt")
const secret = libjwt.secret

exports.auth = (req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(400).json({
            status: "error",
            message: "La petición no tiene la cabecera de autorización"
        })
    }

    let token = req.headers.authorization.replace(/['"]+/g, '')

    try {
        let payload = jwt.decode(token,secret)

        if(payload.ex <= moment().unix()){
            return res.status(401).json({
                status: "error",
                message: "Token expirado"
            })
        }

        req.user = payload
        
    } catch (error) {
        return res.status(404).json({
            status: "error",
            message: "Token inválido"
        })
    }
    next()
}