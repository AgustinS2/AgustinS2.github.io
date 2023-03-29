var clickMenu = document.getElementById("desplegar-menu");
var clickContraer = document.getElementById("contraer-menu");

clickMenu.addEventListener("click", ()=>{
    document.getElementById("items-menu").style.opacity="1";
    document.getElementById("items-menu").style.visibility="visible";
    document.getElementById("desplegar-menu").style.visibility="hidden";
    document.getElementById("contraer-menu").style.visibility="visible";
});

clickContraer.addEventListener("click", ()=>{
    document.getElementById("items-menu").style.opacity="0";
    document.getElementById("items-menu").style.visibility="hidden";
    document.getElementById("desplegar-menu").style.visibility="visible";
    document.getElementById("contraer-menu").style.visibility="hidden";
});


let primerTarjeta = document.getElementById("tarjeta1");
let segundaTarjeta = document.getElementById("tarjeta2");
let terceraTarjeta = document.getElementById("tarjeta3");
let cuartaTarjeta = document.getElementById("tarjeta4");

primerTarjeta.addEventListener("mouseover", ()=>{
    primerTarjeta.setAttribute("src","img/nike2.jpg");
    primerTarjeta.style.width="100%";
    primerTarjeta.style.objectFit="cover";
})

primerTarjeta.addEventListener("mouseout", ()=>{
    primerTarjeta.setAttribute("src","img/nike.jpg");
    primerTarjeta.style.width="100%";
    primerTarjeta.style.objectFit="cover";
})
segundaTarjeta.addEventListener("mouseover", ()=>{
    segundaTarjeta.setAttribute("src","img/adidas2.jpg");
    segundaTarjeta.style.width="100%";
    segundaTarjeta.style.objectFit="cover";
})

segundaTarjeta.addEventListener("mouseout", ()=>{
    segundaTarjeta.setAttribute("src","img/adidas.jpg");
    segundaTarjeta.style.width="100%";
    segundaTarjeta.style.objectFit="cover";
})
terceraTarjeta.addEventListener("mouseover", ()=>{
    terceraTarjeta.setAttribute("src","img/puma2.jpg");
    terceraTarjeta.style.width="100%";
    terceraTarjeta.style.objectFit="cover";
})

terceraTarjeta.addEventListener("mouseout", ()=>{
    terceraTarjeta.setAttribute("src","img/puma.jpg");
    terceraTarjeta.style.width="100%";
    terceraTarjeta.style.objectFit="cover";
})
cuartaTarjeta.addEventListener("mouseover", ()=>{
    cuartaTarjeta.setAttribute("src","img/new-balance2.jpg");
    cuartaTarjeta.style.width="100%";
    cuartaTarjeta.style.objectFit="cover";
})

cuartaTarjeta.addEventListener("mouseout", ()=>{
    cuartaTarjeta.setAttribute("src","img/newbalance.jpg");
    cuartaTarjeta.style.width="100%";
    cuartaTarjeta.style.objectFit="cover";
})