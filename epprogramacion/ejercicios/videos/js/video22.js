"use strict"
let zbola = document.getElementById("bola");
let zcanyon = document.getElementById("canyon");
let posX = 150;
let posY = 300;
let intervalo;
let velocidad = 20;
let anguloU = 0;
let anguloS = 0;
let anguloR = 0;


let velocidadX = 0;
let velocidadY = 0;

zbola.style.left = posX + "px";
zbola.style.top = posY + "px";

zcanyon.style.left = posX + "px";
zcanyon.style.top = posY + "px";
zcanyon.style.transformOrigin = "12.5% 50";

const mover = () => {
posX += velocidadX;
posY += velocidadY;

zbola.style.left = posX + "px";
zbola.style.top = posY + "px";
}

window.addEventListener("keydown", (event) => {
    console.log(event.key);
    switch(event.key){
        case "Tab":
            anguloR = anguloS * Math.PI/180;
            velocidadX = velocidad * Math.cos(anguloR);
            velocidadY = velocidad * Math.sin(anguloR);
            intervalo = setInterval(mover ,20);
break;
case "ArrowLeft":
    anguloU++;
    break;
    case "ArrowRight":
    anguloU--;
    break;
}
anguloS = -anguloU;
document.title = anguloU;
zcanyon.style.transform = "rotate(  "+ anguloS +  " deg )";
})