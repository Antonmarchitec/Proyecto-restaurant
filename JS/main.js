
let estado = false;
let boton = document.getElementById("boton");
let afiche = document.getElementById("contAfiche");

boton.addEventListener("click", function(){
    if(estado == false){
        afiche.classList.add("mostrar");
        estado= true;
    }else if(estado==true){
        afiche.classList.remove("mostrar");
        estado = false;
    }
})