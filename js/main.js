var nombre = document.getElementById("name");
var correo = document.getElementById("email");
var clave = document.getElementById("clave");
var fecha = document.getElementById("f_nac")
var edad = document.getElementById("edad")

const formulario = document.getElementById("form1");
var msj = document.getElementById("warnings");

formulario.addEventListener('submit',e =>{
    e.preventDefault();
    let msjMostrar ="";
    let enviar = false;

    if(nombre.value.length < 4 || nombre.value.length > 10){
        msjMostrar = msjMostrar + "<br>El nombre debe tener entre 4 y 10 carácteres";
        enviar = true;
    }

    var letra = nombre.value.charAt(0);
    if(!esMayuscula(letra)){
        msjMostrar += "<br>El nombre debe comenzar con mayúscula";
        enviar = true;
    }

    if(nombre.value == 'Gustavo'){
        msjMostrar += "<br>El nombre no puede ser Gustavo";
        enviar = true;
    }

    if(enviar){
        msj.innerHTML = msjMostrar;
    }
    else{
        msj.innerHTML = "<br>Enviado";
    }
    if(!validarEdad(edad)){
        msjMostrar = msjMostrar + "Debe ser mayor de 18 años";
        enviar = true;
    }
    

});


function esMayuscula(letra){
    if(letra == letra.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}

function validarEdad(edad){
    if(edad < 18){
        

    }
}
