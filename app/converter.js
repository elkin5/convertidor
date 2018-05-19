/*
* Tipo: Logica de negocio
* Descripcion: Contiene las funciones que permite realizar conversiones entre 
* las diferentes escalas
* Autor: devkin
*
*/

/*
* Nombre: toFahrenheit
* Descripcion: Convierte de celsius a fahrenheit
* Autor: devkin
* Parametros: temperatura
* Retorno: temperatura en grados fahrenheit
*/
module.exports.toFahrenheit = function (temperature) {
  return (temperature * 9/5) + 32;  
}

/*
* Nombre: toCelsius
* Descripcion: Convierte de fahrenheit a celsius
* Autor: devkin
* Parametros: temperatura
* Retorno: temperatura en grados celsius
*/
module.exports.toCelsius = function (temperature) {
  return (temperature - 32) * 5/9;
}