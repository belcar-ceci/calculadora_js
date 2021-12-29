const displayAnterior = document.getElementById("anterior");
const displayActual = document.getElementById("actual");
const botonNumeros = document.querySelectorAll(".numero");
const botonOperacion = document.querySelectorAll(".operador");

const display = new Display(displayAnterior, displayActual);

botonNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
})

botonOperacion.forEach(boton => {
    boton.addEventListener('click', () => display.contar(boton.value))
});