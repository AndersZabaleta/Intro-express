const express = require("express");
const app = express();
let array = [1, 2, 3, 4];

let persona = {
  nombre: "Ander",
  edad: 30,
};
app.get("/", function (req, res) {
  res.send(persona);
});

app.get("/superhero/:nombre", function (req, res) {
  let nombre = req.params.nombre;
  let edad = req.params.edad;
  persona.nombre = nombre;
  persona.edad = edad;
  res.send(persona);
});

// app.get("/saludo/:nombre", function (req, res) {
//   let name = req.params.nombre;
//   res.send(`<h1>Hola ${name}</h1>`);
// });

// app.get("/despedida", function (req, res) {
//   res.send("<h1>Adiós</h1>");
// });

app.listen(3000);
