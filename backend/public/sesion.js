let formuario = document.getElementById("formularioRegistro")


formuario.addEventListener("submit", iniciarSesion)

let botonInicioSesion = document.querySelector("#btn-inicioSesion")

function iniciarSesion(e){
        e.preventDefault()
        let correo = document.querySelector("#correo")
        let password = document.querySelector("#password")
        let nombre = document.querySelector("#nombre")
        let direccion = document.querySelector("#direccion")



        
        const registrarse = async ()=>{
          
          let objeto = {
            password: password.value,
            correo: correo.value,
            nombre: nombre.value,
            direccion: direccion.value
          }
          const request = await fetch("http://localhost:1234/api/registros", {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(objeto)
          })
          data = await request.json()
          console.log(data);
          if(data.status =="success"){
            botonInicioSesion.classList.remove("deshabilitado")
          }
          
          
        }
        registrarse()
}