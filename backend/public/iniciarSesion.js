let formulario = document.getElementById("formularioSesion")


formulario.addEventListener("submit", function(e){
  e.preventDefault()
  let correo = document.querySelector("#correo")
  let password = document.querySelector("#password")
  
  const iniciarSesion = async ()=>{
    
    let objeto = {
      password: password.value,
      correo: correo.value
    }
    const request = await fetch("http://localhost:1234/api/iniciarSesion", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(objeto)
    })
    data = await request.json()
    console.log(data);
    if(data.status == "success"){
      let cliente = JSON.stringify(data.client)
      localStorage.setItem("client", cliente  )
      localStorage.setItem("token", data.token)
      setTimeout(()=>{
        window.location.href= "paginaPrincipal"
      }, 2000)
    }
  }
  iniciarSesion()
})


