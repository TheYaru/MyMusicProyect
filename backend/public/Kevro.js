document.getElementById("menu-toggle").addEventListener("click", function() {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menuToggle.classList.add("active");
  } else {
    menu.style.display = "none";
    menuToggle.classList.remove("active");
  }
});



let formulario = document.querySelector("#formularioPagos")

formulario.addEventListener("submit", pagar)

function pagar(e){
  e.preventDefault()  
  let usuario = localStorage.getItem("client")
  usuario = JSON.parse(usuario)
  let correo = document.querySelector("#correo")
  let precio = document.querySelector("#precio")
  let producto = document.querySelector("#producto")

  let objeto= {
    nombre_comprador: usuario.nombre,
    precio: precio.value,
    producto: producto.value,
    correo: correo.value
  }

  const accionPagar = async ()=>{
    const request = await fetch("http://localhost:1234/api/pago", {
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem("token"),
        "Content-type": "application/json"
      },
      body: JSON.stringify(objeto)
    })
    const data = await request.json()
    console.log(data);
    
  }
  accionPagar()

}