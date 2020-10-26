const express = require("express");

//Importamos el almacén
const almacen = require("./almacen");
const app = express();
//Creamos el array cesta[]
let cesta = [];

app.get("/fruteria", function (req, res) {
  //En la ruta /fruteria creamos la variable contenidoTabla y la igualamos a un string vacio
  let contenidoTabla = "";

  //Recorremos el array productos que está dentro del indice 0 del array almacen[]
  for (let i = 0; i < almacen[0].productos[i].length; i++) {
    //Por cada vuelta sumamos a contenidoTabla lo que ya tiene más el código necesario
    //Para crear la tabla con la información solicitada
    contenidoTabla += `
            <tr>
                <td>${almacen[0].productos[i].nombre}</td>
                <td>${almacen[0].productos[i].precio}</td>
                <td>${almacen[0].productos[i].stock}</td>
            </tr>
        `;
  }

  //Creamos la variable tabla y en el <tbody> metemos la variable "contenidoTabla" que guarda el body de la tabla
  let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
            ${contenidoTabla}
            </body>
        </table
    `;

  //Envíamos la tabla
  res.send(tabla);
});
app.get("/pescaderia", function (req, res) {
  //Esta ruta es exactamente que la anterior solo que con el indice 1 del array almacén
  let contenidoTabla = "";
  for (let i = 0; i < almacen[1].productos.length; i++) {
    contenidoTabla += `
            <tr>
                <td>${almacen[1].productos[i].nombre}</td>
                <td>${almacen[1].productos[i].precio}</td>
                <td>${almacen[1].productos[i].stock}</td>
            </tr>
        `;
  }

  let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
            ${contenidoTabla}
            </body>
        </table
    `;
  res.send(tabla);
});
app.get("/carniceria", function (req, res) {
  //Esta ruta es exactamente que la anterior solo que con el indice 2 del array almacén

  let contenidoTabla = "";
  for (let i = 0; i < almacen[2].productos.length; i++) {
    contenidoTabla += `
            <tr>
                <td>${almacen[2].productos[i].nombre}</td>
                <td>${almacen[2].productos[i].precio}</td>
                <td>${almacen[2].productos[i].stock}</td>
            </tr>
        `;
  }

  let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
            ${contenidoTabla}
            </body>
        </table
    `;
  res.send(tabla);
});

app.get("/fruteria/:producto/:cantidad", function (req, res) {
  //Guardamos en  variables los parametros que nos llegan en la ruta
  let producto = req.params.producto;
  let cantidad = req.params.cantidad;

  //Creamos una variable booleana. Le damos el valor por defecto false
  let isProductoEnCesta = false;

  //Recorremos el array productos del indice 0 del array almacen
  for (let i = 0; i < almacen[0].productos.length; i++) {
    //Si el nombre del producto que nos llega por parametros es igual al nombre del indice i
    //del array produtos y la cantidad que nos llega por parametros es menor o igual al stock del indice i
    //del array productos
    if (
      producto === almacen[0].productos[i].nombre &&
      cantidad <= almacen[0].productos[i].stock
    ) {
      //Al stock del indice i del array productos le restamos la cantidad
      almacen[0].productos[i].stock -= cantidad;
      //hacemos push al array cesta de un objeto con las propiedades producto, cantidad y stock
      cesta.push({
        producto: producto,
        cantidad: cantidad,
        stock: almacen[0].productos[i].stock,
      });
      //cambiamos el valor de la variable booleana a true
      isProductoEnCesta = true;
    }
  }
  //Si isProductoEnCesta es true
  isProductoEnCesta
    ? res.send("se han añadido " + cantidad + producto)
    : //Enviamos que se ha añadido el producto
      res.send("No existe ese producto, o no hay suficiente Stock");
  //Si es false enviamos el error
});
app.get("/pescaderia/:producto/:cantidad", function (req, res) {
  //Esta ruta es exactamente que la anterior solo que con el indice 1 del array almacén

  let producto = req.params.producto;
  let cantidad = req.params.cantidad;
  for (let i = 0; i < almacen[1].productos.length; i++) {
    if (
      producto === almacen[1].productos[i].nombre &&
      cantidad <= almacen[1].productos[i].stock
    ) {
      almacen[1].productos[i].stock -= cantidad;
      cesta.push({
        producto: producto,
        cantidad: cantidad,
        stock: almacen[1].productos[i].stock,
      });
      res.send("se han añadido " + cantidad + producto);
    } else {
      res.send("No se encuentra ese producto, o no tenemos suficiente Stock");
    }
  }
});
app.get("/carniceria/:producto/:cantidad", function (req, res) {
  //Esta ruta es exactamente que la anterior solo que con el indice 2 del array almacén

  let producto = req.params.producto;
  let cantidad = req.params.cantidad;
  for (let i = 0; i < almacen[2].productos.length; i++) {
    if (
      producto === almacen[2].productos[i].nombre &&
      cantidad <= almacen[2].productos[i].stock
    ) {
      almacen[2].productos[i].stock -= cantidad;
      cesta.push({
        producto: producto,
        cantidad: cantidad,
        stock: almacen[2].productos[i].stock,
      });
      res.send("se han añadido " + cantidad + producto);
    } else {
      res.send("No se encuentra ese producto, o no tenemos suficiente Stock");
    }
  }
});

app.get("/cesta", function (req, res) {
  //Creamos la variable mensaje y la igualamos a un array vacio
  let mensaje = "";
  //Si cesta[] tiene algo dentro
  if (cesta.length) {
    //Recorremos el array cesta[]
    for (let i = 0; i < cesta.length; i++) {
      //Sumamos a la variable mensaje lo que ya tiene más el código HTML en formato string... por cada vuelta
      mensaje += `
                <h1>${cesta[i].producto}</h1>
                <p>Cantidad: ${cesta[i].cantidad}</p>
                <p>Stock: ${cesta[i].stock}</p>
            `;
    }
    //Enviamos mensaje
    res.send(mensaje);
  } else {
    //Si cesta no tiene nada enviamos el error
    res.send("no hay nada en la cesta");
  }
});

app.get("/comprar", function (req, res) {
  //Si la cesta tiene algo dentro
  if (cesta.length) {
    //Igualamos la cesta a un array vacio
    cesta = [];
    //Mandamos un mensaje de confirmación
    res.send("Su compra ha sido pagada. Muchas gracias");
  } else {
    //Si no tiene nada dentro mandamos el error
    res.send("No hay nada en la cesta");
  }
});

app.listen(3000);
