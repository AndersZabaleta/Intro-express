//Creamos la funcion aleatorio()

function aleatorio() {
  //Devolvemosun numero aleatorio entre 0 y 9 (ambos incluidos)
  return Math.floor(Math.random() * 10);
}

//Exportamos la funcion
module.exports = aleatorio;
