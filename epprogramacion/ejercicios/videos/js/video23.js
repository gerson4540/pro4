"use strict"
let productos = document.querySelectorAll("#Almacen img");
let carro = document.getElementById("carrito");
let xAlmacen = document.getElementById("Almacen")

for(let i=0; i<productos.length; i++){
    productos[i].setAttribute("draggable", "true")
    productos[i].setAttribute("id", "productos" + i)
    productos[i].addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("objeto", event.target.id);  
    })
}

carro.addEventListener("dragover", (event) => {
    event.preventDefault();
})

carro.addEventListener("drop",(event) => {
    event.preventDefault();
    if(event.target.className === "caja"){
        let data = event.dataTransfer.getData("objeto"); 
        event.target.appendChild(document.getElementById(data));
    }
}) 
xAlmacen.addEventListener("dragover", (event) => {
    event.preventDefault();
})

xAlmacen.addEventListener("drop",(event) => {
    event.preventDefault();
    if(event.target.className === "caja"){
        let data = event.dataTransfer.getData("objeto"); 
        event.target.appendChild(document.getElementById(data));
    }
}) 
carro.addEventListener("drop",(event) => {
    event.preventDefault();
    if(event.target.className === "caja2"){
        let data = event.dataTransfer.getData("objeto"); 
        event.target.appendChild(document.getElementById(data));
    }
}) 
xAlmacen.addEventListener("dragover", (event) => {
    event.preventDefault();
})

xAlmacen.addEventListener("drop",(event) => {
    event.preventDefault();
    if(event.target.className === "caja2"){
        let data = event.dataTransfer.getData("objeto"); 
        event.target.appendChild(document.getElementById(data));
    }
}) 

