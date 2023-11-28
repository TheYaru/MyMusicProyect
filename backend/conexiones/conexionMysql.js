const mysql = require("mysql2")

const conexion =  mysql.createConnection({
    host: "localhost",
    user: "juan",
    password: "123456789",
    database: "pagos"

}, console.log("Conectado a la base de datos mysql"))




module.exports = {
    conexion
}

