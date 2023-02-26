//Constantes para llamar al menú

const menuToggleElement = document.getElementById("toogle-menu");
const menuElement = document.getElementById("menu");
const triangleElement = document.getElementById("triangle");

function abrirMenu() {
  menuElement.classList.toggle("hide");
  triangleElement.classList.toogle("hide");
}

menuToggleElement.addEventListener("click", abrirMenu);
