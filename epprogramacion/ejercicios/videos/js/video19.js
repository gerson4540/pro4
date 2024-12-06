"use strict"
let tMarca = document.getElementById("txMarca");
let txNombre = document.getElementById("textNombre");
let txPrecio = document.getElementById("textPrecio");
let txCantidad = document.getElementById("textCantidad");
let vtAgregar = document.getElementById("btmagreagar"); 
let dyproductos = document.getElementById("tbody-productos");
let xcaja = document.getElementById("caja-total");
let contenidoTa = "";
let total = 0;

vtAgregar.addEventListener("click", () => {
    let marca = tMarca.value;
    let nombre = txNombre.value;
    let precio = parseFloat(txPrecio.value); 
    let cantidad = parseInt(txCantidad.value); 
    let subtotal = precio * cantidad;
    total += subtotal;
    xcaja.innerText = "Total: " + total.toFixed(2); 

    let fila = "<tr><td>" + marca + 
    "</td><td>" + nombre + 
        "</td><td>" + precio.toFixed(2) + 
        "</td><td>" + cantidad + 
        "</td><td>" + subtotal.toFixed(2) + 
        "</td><td><button class='btnEliminar'>Eliminar</button></td></tr>";
    
    contenidoTa += fila;
    dyproductos.innerHTML = contenidoTa;

});


dyproductos.addEventListener("click", (event) => {
    if (event.target.classList.contains("btnEliminar")) {
        let posicionFila = event.target.parentNode.parentNode.rowIndex;
        let subtotalquitar = parseFloat(dyproductos.getElementsByTagName("tr")[posicionFila - 1].getElementsByTagName("td")[3].innerText); 
        total -= subtotalquitar;
        xcaja.innerText = "Total: " + total.toFixed(2);
        dyproductos.getElementsByTagName("tr")[posicionFila - 1].remove();
        contenidoTa = dyproductos.innerHTML;
    }
});
