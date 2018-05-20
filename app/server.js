/*
* Tipo: Modulo de API para el convertidor
* Descripcion: Obtiene la conversion levanta el server y responde a la solicitud
* Autor: devkin
*
*/

var express = require('express');
var converter = require('..');

var app = express();

app.get('/toCelsius', function (req, res) {
  var temperature = req.query.temperature; 
  res.send(200, converter.toCelsius(temperature));
});

app.get('/toFahrenheit', function (req, res) {
  var temperature = req.query.temperature;
  res.send(200, converter.toFahrenheit(temperature));
});

app.listen(3000, function (err) {
  if (err) return console.log("Hubo un error"), process.exit(1);

  console.log("Platzigram escuchando en el puerto 3000");
});