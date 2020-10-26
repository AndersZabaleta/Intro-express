const express = require("express");
const app = express();

//Creamos un array con nombres
let array = ["Ander", "Roberto", "Elena", "Bego", "Luis"];

app.get("/personas", function (req, res) {
  //La ruta personas recorre el array y muestra un h1 con cada nombre dentro del array
  let mensaje = "";
  for (let i = 0; i < array.length; i++) {
    mensaje += `<h1>${array[i]}</h1>`;
  }
  res.send(mensaje);
});

app.get("/personas/:nombre", function (req, res) {
  //Igualamos la variable nombre al valor del parametro nombre
  let nombre = req.params.nombre;
  //Recorremos el array[]
  for (let i = 0; i < array.length; i++) {
    //Si el nombre que nos llega por parametros es igual al indice i del array[]
    if (nombre === array[i]) {
      //enviamos el indice i del array
      res.send(array[i]);
    }
  }
  //Si no, enviamos error
  res.send("error");
});

app.listen(3000);
