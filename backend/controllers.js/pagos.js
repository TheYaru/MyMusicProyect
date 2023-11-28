const controllerMysql = require("../conexiones/conexionMysql");
const crypto = require("node:crypto")

async function pagos(req,res){

    const { nombre_comprador, precio, correo, producto } = req.body

    if(!nombre_comprador || !precio || !correo || !producto){
        return res.status(400).json({
            status: "error",
            message: "Faltan datos por enviar"
        })
    }
    let uuid = crypto.randomUUID()

     
    controllerMysql.conexion.query("INSERT INTO pagos_ddbb (id,precio,nombre_comprador, correo,producto) VALUES (?,?,?,?,?);" , [uuid,precio,nombre_comprador,correo,producto], (error, resultado)=>{
        if(error){
            return res.status(400).json({
                status: "error",
                message: "Ocurrió un error en la consulta",
                error
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Pago exitoso"
        })
    })

}


module.exports = {
    pagos
}