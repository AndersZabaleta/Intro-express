const express = require("express");
const app = express();

//Creamos el objeto persona
let persona = {
  nombre: "Ander",
  apellidos: "Salas Zabaleta",
  edad: 30,
};

app.get("/nombre/:parametro", function (req, res) {
  //Igualamos el nombre del objeto a lo que llega por parametro en la ruta
  persona.nombre = req.params.parametro;
  //enviamos el objeto
  res.send(persona);
});
app.get("/apellidos/:parametro", function (req, res) {
  //Igualamos los apellidos del objeto a lo que llega por parametro en la ruta

  persona.apellidos = req.params.parametro;
  //enviamos el objeto

  res.send(persona);
});
app.get("/edad/:parametro", function (req, res) {
  //Igualamos la edad del objeto a lo que llega por parametro en la ruta

  persona.edad = parseInt(req.params.parametro);
  //enviamos el objeto

  res.send(persona);
});

app.listen(3000);
