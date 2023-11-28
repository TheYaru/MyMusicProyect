
const {model, Schema } = require("mongoose")



const usuarioSchema = Schema({
    nombre: {
       type: String,
       required:true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        default: "Usuario"
    }
    
}) 

module.exports = model('Registro', usuarioSchema , 'Registros')