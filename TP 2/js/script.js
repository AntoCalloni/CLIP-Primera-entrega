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
