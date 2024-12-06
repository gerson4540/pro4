"use strict"

const dPanel = document.getElementById("panel");
dPanel.width = 700;
dPanel.height = 500;
const context = dPanel.getContext("2d");

// Variables para el dibujo
let dibujo = false;
const xColor = document.getElementById("color");
const xGrosor = document.getElementById("grosor");
const btnBorrar = document.getElementById("btnBorrar"); // Nuevo botón
let colorTrazo = xColor.value;
let grosorTrazo = xGrosor.value;

// Configuración inicial del contexto
context.lineCap = 'round';
context.lineJoin = 'round';

const obtenerCoordenadas = (event) => {
    const rect = dPanel.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

const empezarDibujo = (event) => {
    dibujo = true;
    const coords = obtenerCoordenadas(event);
    context.beginPath();
    context.moveTo(coords.x, coords.y);
}

const terminarDibujo = () => {
    dibujo = false;
    context.beginPath();
}

const dibujar = (event) => {
    if (!dibujo) return;

    const coords = obtenerCoordenadas(event);
    context.lineWidth = grosorTrazo;
    context.strokeStyle = colorTrazo;
    context.lineTo(coords.x, coords.y);
    context.stroke();
    context.beginPath();
    context.moveTo(coords.x, coords.y);
}

// Función para limpiar el canvas
const limpiarCanvas = () => {
    context.clearRect(0, 0, dPanel.width, dPanel.height);
}

// Event Listeners
dPanel.addEventListener("mousedown", empezarDibujo);
dPanel.addEventListener("mouseup", terminarDibujo);
dPanel.addEventListener("mousemove", dibujar);
dPanel.addEventListener("mouseout", terminarDibujo);

xColor.addEventListener("input", (event) => {
    colorTrazo = event.target.value;
});

xGrosor.addEventListener("input", (event) => {
    grosorTrazo = event.target.value;
});

// Agregar evento al botón de borrar
btnBorrar.addEventListener("click", limpiarCanvas);
