var palabras = [];
for (var i = 0; localStorage.getItem(i); i++){
  palabras[i] = localStorage.getItem(i);
}

for (var i = 0; (pal = localStorage.getItem(i)); i++){
  console.log(pal);
}
var intentos = 0;
var palabraSecreta = "";
var num = palabras.length;
var numeroRandom = parseInt(Math.random() * num);
while (numeroRandom >= num) {
  numeroRandom = parseInt(Math.random() * num);
}
palabraSecreta = palabras[numeroRandom];

var palabra = document.getElementById("juego");
for (var i = 0; i < palabraSecreta.length; i++){
    palabra.innerHTML += "<p name='letra'>_</p>";
}

var pincel = document.querySelector("canvas").getContext("2d");

function ingresoLetra(letra){
  var palabra = document.getElementsByName("letra");
  var fallo = true;
  var i = 0;
  for (; i < palabraSecreta.length; i++){
    if(palabra[i].innerHTML == "_" && palabraSecreta[i] == letra){
      palabra[i].innerHTML = letra;
      fallo = false;
    }
  }
  document.getElementById(letra).disabled = true;
  if(fallo){
    document.getElementById("fallas").innerHTML += "<p>" + letra + " </p>";
    intentos ++;
    switch(intentos){
      case 1:
        pincel.fillStyle= "#076BCF";
        pincel.beginPath();
        pincel.moveTo(90,200);
        pincel.lineTo(40,250);
        pincel.lineTo(140,250);
        pincel.fill()
        pincel.strokeStyle = "#076BCF";
        pincel.strokeRect(90,100,0,150);
        pincel.strokeRect(90,100,70,0);
        pincel.strokeRect(160,100,0,30);
        break;
      case 2:
        pincel.beginPath();
        pincel.arc(160,140,15,0,2 * 3.14);
        pincel.fill();
        break;
      case 3:
        pincel.strokeRect(160,155,0,40);
        break;
      case 4:
        pincel.lineWidth = 2;
        pincel.moveTo(160,155);
        pincel.lineTo(145,175);
        pincel.stroke();
        pincel.moveTo(160,155);
        pincel.lineTo(175,175);
        pincel.stroke();
        break;
      case 5:
        pincel.moveTo(160,195);
        pincel.lineTo(145,225);
        pincel.stroke();
        pincel.moveTo(160,195);
        pincel.lineTo(175,225);
        pincel.stroke();
        var divs = document.getElementsByName("botonesLetra")
        for(i = 0; i < divs.length; i++){
          divs[i].style.display = "none";
        }
        document.getElementById("fallas").insertAdjacentHTML("afterend","<h2 style='text-align: center; margin-right: 5%;'>Fin del juego</h2>");
        document.getElementsByTagName("h2")[0].insertAdjacentHTML("afterend","<p style='text-align: center; margin-right: 5%;'>La palabra oculta era: " + palabraSecreta + "</p>");
        break;
    }
  }else{
    for(i = 0; i < palabraSecreta.length && palabra[i].innerHTML != "_"; i++);
    if(i == palabraSecreta.length){
      var divs = document.getElementsByName("botonesLetra")
      for(i = 0; i < divs.length; i++){
        divs[i].style.display = "none";
      }
      document.getElementById("fallas").insertAdjacentHTML("afterend","<h2 style='text-align: center; margin-right: 5%;'>Felicidades ha encontrado la palabra oculta</h2>");
      document.getElementsByTagName("h2")[0].insertAdjacentHTML("afterend","<p style='text-align: center; margin-right: 5%;'>Cantidad de fallos: " + intentos + "</p>");
    }
  }
}