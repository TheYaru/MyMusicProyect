const bcrypt = require("bcrypt")
const Registros = require("../modelos/registros")
const jwt = require("../services/jwt")

async function registros(req,res){
    const { nombre, password, direccion, correo } = req.body
    console.log(nombre, password , direccion, correo);

    if( !nombre || !password || !direccion || !correo){
        return res.status(400).json({
            status: "error",
            message: "Faltan datos por enviar"
        })
    }
    let nuevoCliente = req.body

    
    
    const clienteRepetido = await Registros.findOne({correo: nuevoCliente.correo})
    
    if(clienteRepetido){
        return res.status(400).json({
            status: "error",
            message: "El usuario existe en la base de datos"
        })
    }
    
    
    let pwd = await bcrypt.hash(password , 10)
    console.log(pwd);


    let usuarioARegistrar = new Registros(nuevoCliente)
    usuarioARegistrar.password = pwd

    let clienteAlmacenado = await usuarioARegistrar.save()



    return res.status(200).json({
        status: "success",
        message: "Datos recibidos"

    })
}


async function iniciarSesion (req,res){
    const { password, correo } = req.body
    if(!password || !correo){
        return res.status(400).json({
            status: "error",
            message: "Faltan datos por enviar"
        })
    }

    const user = await Registros.findOne({correo: correo})

    if(!user){
        return res.status(400).json({
            status: "error",
            message: "El usuario no existe, registrese"
        })
    }

    let comparePwd =  bcrypt.compareSync(password, user.password)

    if(!comparePwd){
        return res.status(400).json({
            status: "error",
            message: "Contraseña incorrecta"
        })
    }

    let token = jwt.crearToken(user)

    return res.status(200).json({
        status: "success",
        message: "Sesión iniciada",
        client: {
            id: user._id,
            nombre: user.nombre,
            rol: user.rol
        },
        token
        
    })


}

module.exports = {
    registros,
    iniciarSesion
}