const express = require("express")
const cors = require("cors")
const conexion = require("./conexiones/conexion")
const app = express()
const conexionMysql = require("./conexiones/conexionMysql")
const controladorRegistros = require("./controllers.js/controladorRegistros")
const check = require("./middlewares/auth")
const controladorPagos = require("./controllers.js/pagos")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res)=>{
    res.sendFile(process.cwd() + '/public/iniciarSesion.html')
})

app.post("/api/registros", controladorRegistros.registros )
app.get("/paginaPrincipal", (req,res)=>{
    res.sendFile(process.cwd() + '/public/Kevro.html'  )
})

app.get("/registrarse", (req,res)=>{
    res.sendFile(process.cwd() + '/public/registro.html')
})

app.post("/api/iniciarSesion", controladorRegistros.iniciarSesion)

app.post("/api/pago", check.auth,  controladorPagos.pagos)



conexion()
const PORT = process.env.PORT ?? 1234 
app.listen(PORT, ()=>{
    console.log("Servidor conectado");
    console.log("Url:", `http://localhost:${PORT}`);
})