const express = require("express");
const app = express();

//Creamos el array con los nombres
let bootcamp = [
  "Rafa",
  "Diego",
  "Elena",
  "Maialen",
  "Roberto",
  "Bego",
  "Luis",
  "Manu",
  "Isabel",
];

app.get("/", function (req, res) {
  //en la ruta / enviamos el array
  res.send(bootcamp);
});

app.get("/:parametro", function (req, res) {
  //A esta ruta le llega un parametro con nombre "parametro"
  //Hacemos push al array bootcamp[] de lo que nos llegapor parametros
  bootcamp.push(req.params.parametro);
  //enviamos el mensaje "Se ha añadido"
  res.send("Se ha añadido");
});

app.listen(3000);
