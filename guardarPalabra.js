var palabraIngresada = document.getElementById("input");
function guardarPalabra(){
    if (palabraIngresada.value.length > 8) {
        document.getElementById("limite").innerHTML = "Solo palabras de hasta 8 caracteres";
        palabraIngresada.value = "";
        return;
    } 
    for (var i = 0; i < palabraIngresada.value.length; i++){
        if (palabraIngresada.value[i] == " "){
            document.getElementById("limite").innerHTML = "Ingrese una palabra sin espacios";
            palabraIngresada.value = "";
            return;
        }
    }
    if (palabraIngresada.value.length == 0){
        document.getElementById("limite").innerHTML = "Ingrese una palabra";
        return;
    }
    if (palabraIngresada.value.length > 0) {
        var pal = palabraIngresada.value.toUpperCase();
        var i;
        for (i = 0; localStorage.getItem(i); i++);
        localStorage.setItem(i,pal);
        location.href = "index.html";
        return;
    }
}
