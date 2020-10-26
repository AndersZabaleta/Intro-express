//importamos express
const express = require("express");
//Importamos saludo
const saludo = require("./saludo");

const app = express();

app.get("/", function (req, res) {
  //Igualamos la variable saludar a lo que nos trae la función saludo. Le pasamos por parametros un string
  let saludar = saludo("Ander");
  //Envíamos la variable saludar
  res.send(saludar);
});

app.listen(3000, function () {
  console.log("puerto 3000 abierto");
});
