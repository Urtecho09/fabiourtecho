const edad = document.getElementById("entrada");
const boton= document.getElementById("agregar");
const respuesta = document.getElementById("respuesta");

function mensaje(){
    const nac = 2023-parseInt(edad.value);
    respuesta.innerHTML = "Su año de nacimiento es: " + nac;
    edad.value="";
}

edad.addEventListener("keydown",(event)=>{
    if (event.key==="Enter"){
        mensaje();
    }
});

boton.addEventListener("click", mensaje);