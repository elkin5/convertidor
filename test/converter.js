/*
* Tipo: Dependencia
* Descripcion: Modulo para los test TDD de el convertidor
* Autor: devkin
*
*/

var compare = require('chai');
var expect = compare.expect;
var converter = require('..');
describe('Convertidor de temperatura', function () {

  describe('Conversion de Celsius a Fahrenheit', function () {
    it('Corvertir 100 C a Fahrenheit', function () {
      var fahrenheit = converter.toFahrenheit(100);
      expect(fahrenheit).to.equal(212);
    })
  });

  describe('Conversion de Fahrenheit a Celsius', function () {
    it('Corvertir 212 F a Celsius', function () {
      var celsius = converter.toCelsius(212);
      expect(celsius).to.equal(100);
    })
  });

});
