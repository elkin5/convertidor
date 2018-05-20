/*
* Tipo: modulo de test
* Descripcion: Contiene los test del server
* Autor: devkin
*
*/

var chai = require('chai');
var expect = chai.expect;
var request = require('axios');

describe('Convertidor de temperatura por API', function () {
  
  describe('Conversion de celsius a fahrenheit', function () {
    
    it('Estado retornado igual a 200', function (done) {
      
      request
        .get('http://localhost:3000/toFahrenheit?temperature=100')
        .then(function (res) {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('Valor de la conversion de 100C igual a 212F', function (done) {

      request
        .get('http://localhost:3000/toFahrenheit?temperature=100')
        .then(function (res) {
          expect(res.data).to.equal(212);
          done();
        });
    });
  });

  describe('Conversion de fahrenheit a celsius', function () {

    it('Estado retornado igual a 200', function (done) {

      request
        .get('http://localhost:3000/toCelsius?temperature=212')
        .then(function (res) {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('Valor de la conversion de 212F igual a 100C', function (done) {

      request
        .get('http://localhost:3000/toCelsius?temperature=212')
        .then(function (res) {
          expect(res.data).to.equal(100);
          done();
        });
    });
  });

});