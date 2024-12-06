"use strict"
let nBola = document.getElementById("bola");
let posX = 150;
let posY = 0;
let intervalo;

nBola.style.left = posX + "px";
nBola.style.top = posY + "px";

let velocidadX = 1.5;
let velocidadY = 2;

let aceleracion = 0.1;
let perdida = 0.8;

const mover = () => {
    velocidadY += aceleracion;
    posY += velocidadY;
    posX += velocidadX;
    if( posY >= window.innerHeight - nBola.offsetHeight){
        posY = window.innerHeight - nBola.offsetHeight
        velocidadY = perdida * velocidadY;
        if(velocidadY<0.1){
            clearInterval(intervalo);
        }
        velocidadY = -velocidadY;
    }
    if(posX>= window.innerWidth - nBola.offsetWidth){
        posX = window.innerWidth - nBola.offsetWidth
        velocidadX = -velocidadX;
    } 
        if(posX <=0){
            posX = 0;
            velocidadX = -velocidadX;
        }
    
    document.title = velocidadY;
    nBola.style.top = posY + "px";
    nBola.style.left = posX + "px";
}
 intervalo = setInterval(mover,20)