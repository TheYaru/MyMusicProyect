document.getElementById("menu-toggle").addEventListener("click", function() {
  var menu = document.getElementById("menu");
  var menuToggle = document.getElementById("menu-toggle");
  
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menuToggle.classList.add("active");
  } else {
    menu.style.display = "none";
    menuToggle.classList.remove("active");
  }
});
