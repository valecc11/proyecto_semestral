//PAGINA CREAR CUENTA
$(document).ready(function () {
    $("#form1").submit(function (e) {
        e.preventDefault();
        var nombre = $("#name").val();
        var correo = $("#email").val();
        var clave = $("#password").val();
        var fecha = $("#fecha").val();

        let msjMostrar = "";
        let enviar = false;

        if (nombre.trim().length < 4 || nombre.trim().length > 10) {                        //validar nombre
            msjMostrar = msjMostrar + "El nombre debe tener entre 4 y 10 caracteres";
            enviar = true;
        }
        else if (/\d/.test(nombre)) {
            msjMostrar += "<br> El nombre no puede contener números"
            enviar = true;
        }

        var letra = nombre.trim().charAt(0);
        if (!esMayuscula(letra)) {
            msjMostrar += "<br>El nombre debe comenzar con mayúscula";
            enviar = true;
        }
        var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;                                     //validar correo, aun falta que funcione
        if (!correoRegex.test(correo)) {
            msjMostrar += "<br> Ingrese una dirección de correo válida"
            enviar = true;
        }


        if (clave.trim().length < 8) {                                                      //validar contraseña, tiene un minimo de 8 caracteres, un numero, caracter especial, minus, mayus 
            msjMostrar += "<br>La contraseña debe tener al menos 8 carácteres";
            enviar = true;
        }
        else if (!/\d/.test(clave)) {
            msjMostrar += "<br>La contraseña debe contener al menos un número";
            enviar = true;
        }
        else if (!/[a-z]/.test(clave)) {
            msjMostrar += "<br>La contraseña debe contener al menos una letra minúscula";
            enviar = true;

        }
        else if (!/[A-Z]/.test(clave)) {
            msjMostrar += "<br>La contraseña debe contener al menos una letra mayúscula";
            enviar = true;

        }
        else if (!/[!@#$&*]/.test(clave)) {
            msjMostrar += "<br>La contraseña debe contener al menos un carácter especial";
            enviar = true;

        }

        if (Date.parse(fecha)) {                                                             //Validar fecha de nacimiento, no permite menores de edad 
            var edadMilisegundos = Date.now() - Date.parse(fecha);
            var edad = new Date(edadMilisegundos).getUTCFullYear() - 1970;
            if (edad >= 18) {
                // El usuario tiene al menos 18 años
            } else {
                msjMostrar += "<br>Debes tener al menos 18 años para registrarte"
                enviar = true;
            }
        } else {

        }

        if (enviar) {
            $("#warnings").html(msjMostrar);
        }
        else {
            $("#warnings").html("Enviado");
        }




    });

    function esMayuscula(letra) {
        console.log("Estoy aqui");
        console.log(letra);
        console.log(letra.toUpperCase());

        if (letra == letra.toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
    }





});

//PAGINA LOGIN
$(document).ready(function () {
    $("#form2").submit(function (e) {
        e.preventDefault();
        var correo = $("#correo").val();
        var clave = $("palabraSecreta").val();


        let msjMostrar = "";
        let enviar = false;

        if(!correo == 'hola'){
            msjMostrar += "el correo no es correcto"
            enviar = true;

        }


     

        
        if (enviar) {
            $("#warnings").html(msjMostrar);
        }
        else {
            $("#warnings").html("Enviado");
        }
    });

   
});