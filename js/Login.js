document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (username === "admin" && password === "admin123") {
        alert("Inicio de sesión exitoso");

        window.location.href = "Kevro.html"; 
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
