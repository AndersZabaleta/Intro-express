const express = require("express");

//Importamos la función aleatorio()
const aleatorio = require("./aleatorio");
//Importamos el array array[]
const array = require("./array");

const app = express();

app.get("/", function (req, res) {
  //Igualamos la variable numero a lo que nos devuelve la funcion aleatorio() que nos devuelve un número aleatorio
  let numero = aleatorio();

  //Sumamos 1  al indice numero del array
  array[numero] += 1;
  //Envíamos el array
  res.send(array);
});

app.get("/borrar/:numero", function (req, res) {
  //En esta ruta recibimos un numero por parametro. El parametro se llama numero
  //Igualamos la variable numero a lo que nos llega por parametros parseado
  let numero = parseInt(req.params.numero);
  //Recorremos el array
  for (let i = 0; i < array.length; i++) {
    //Si el número que nos llega por parametros es igual al que está en el indice i del array
    if (numero === array[i]) {
      //Igualamos ese indice a 0
      array[i] = 0;
    }
  }
  //Enviamos el array
  res.send(array);
});

app.listen(3000);
