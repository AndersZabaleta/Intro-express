//Importamos express

const express = require("express");
//Igualamos app a lo que devuelve la funcion express()
const app = express();

app.get("/", function (req, res) {
  //Enviamos a la ruta / un h1 que diga hola mundo y un h4 que diga Desde express
  res.send(`
        <h1>Hola Mundo</h1>
        <h4>Desde express</h4>
    `);
});

//Nuestra aplicacion escuchará el puerto 3000
app.listen(3000);
