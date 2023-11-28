const mongoose = require("mongoose")

const textToConection = "mongodb://localhost:27017/musica"
mongoose.set('strictQuery', false)

module.exports = ()=>{
    const conexion = async ()=>{


        try {
            await mongoose.connect(textToConection)
            console.log("Conectado a la base de datos mùsica, MongoDb");
            
        } catch (error) {
            throw new Error("Error en la conexiòn")
        }
    }
    conexion()
}