function adivinanza(){

    var intentos = document.getElementById("intentos").textContent;
    var ganar = document.getElementById("ganar");
    var pista1 = document.getElementById("pista1");
    var pista2 = document.getElementById("pista2");
    var incorrecto = document.getElementById("incorrecto");
    var perder = document.getElementById("perder");
    var respuesta = document.getElementById("respuesta");

    


    if(intentos > 0){
        if(respuesta.value === "Hedy Lamarr"){
            ganar.style.display = "block"
            incorrecto.style.display = "none"
            pista1.style.display = "none"
            pista2.style.display = "none"
        }
        else{
            intentos = intentos - 1;
            document.getElementById("intentos").innerHTML = intentos
        }
        if(intentos === 2){
            incorrecto.style.display = "block"
            pista1.style.display = "block"
        }
    
        if(intentos === 1){
            incorrecto.style.display = "block"
            pista2.style.display = "block"
        }
    
    
        if(intentos === 0){
            perder.style.display = "block"
            incorrecto.style.display = "none"
            pista1.style.display = "none"
            pista2.style.display = "none"
        }
    }
  
}

function validar(){
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var edad= document.getElementById('edad');
    var email=document.getElementById('email');
    var textArea=document.getElementById('textArea');
    if (nombre.value === ""||nombre.value=== null) {
        alert('Nombre incorecto');
        nombre.focus();
        return false;
    }
    if (apellido.value === ""||apellido.value===null) {
        alert('Apellido incorrecto');
        apellido.focus();
        return false;
    }
    if (isNaN(edad.value)||edad.value===null||edad.value==="") {
        alert('Edad incorrecta');
        edad.focus();
        return false;
    }
    if (email.value===""||email.value===null) {
        alert('Email incorrecto');
        email.focus();
        return false;
    }
    if (textArea.value===""||textArea.value===null) {
        alert('Complete el mesaje');
        textArea.focus();
        return false;
    }
    alert('Consulta enviada con éxito');
    return true;
}