if(!localStorage.getItem("0")){
  palabras = ["HOLA", "PERRO", "ADIOS", "GATO", "TORTUGA"];
  for (var i = 0; i < palabras.length; i++){
    localStorage.setItem(i,palabras[i]);
  }
}