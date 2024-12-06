"use strict"
let dPaises = document.getElementById("Paises")
let dElegidos = document.getElementById("Elegidos")
let dbtmDerecha = document.getElementById("btmDerecha")
let dbtmIzquierda = document.getElementById("btmIzquierda")
let dbtmDerechaTodos = document.getElementById("btmDerechaTodos")
let dbtmIzquierdaTodos = document.getElementById("btmIzquierdaTodos")


dbtmDerecha.addEventListener("click", () => {
    if(dPaises.selectedIndex !== -1 ){
    console.log(dPaises.querySelectorIndex)
     console.log(dPaises.options[dPaises.selectedIndex].text )
     let paisesSelector = dPaises.options[dPaises.selectedIndex].text
     dPaises.options[dPaises.selectedIndex].remove()
     let nuevaoption = document.createElement("option")
        nuevaoption.textContent= paisesSelector
     dElegidos.appendChild(nuevaoption)
    }
})
dbtmIzquierda.addEventListener("click", () => {
    if(dElegidos.selectedIndex!== -1){
    console.log(dPaises.querySelectorIndex)
     console.log(dPaises.options[dPaises.selectedIndex].text )
     let paisesSelector = dElegidos.options[dElegidos.selectedIndex].text
     dPaises.options[dPaises.selectedIndex].remove()

     let nuevaoption = document.createElement("option")
        nuevaoption.textContent= paisesSelector
     dPaises.appendChild(nuevaoption)
    }
})
dbtmDerechaTodos.addEventListener("click", () => {
    for(let i=0; i<dPaises.children.length; i++){
     let paisesSelector = dPaises.options[i].text   
     let nuevaoption = document.createElement("option")
     nuevaoption.textContent = paisesSelector
     dPaises.appendChild(nuevaoption)
    }
    dElegidos.innerHTML = ""
})
dbtmIzquierdaTodos.addEventListener("click", () => {
    for(let i=0; i<dElegidos.children.length; i++){
     let paisesSelector = dElegidos.options[i].text   
     let nuevaoption = document.createElement("option")
     nuevaoption.textContent = paisesSelector
     dPaises.appendChild(nuevaoption)
    }
    dElegidos.innerHTML = ""
})