//! callback
// Funcion que pasa como argumento otra funcion y puede o no ser utilizada.

function suma(num1, num2) {
  return num1 + num2;
}

function calcula(num1, num2, callback) {
  return callback(num1, num2); //? lo que hago acá es retornar la función callback con los argumentos de suma.
}

// calcula(2,2, suma);

// let calculado = (calcula);

//console.log(calcula);

console.log(calcula(2, 2, suma)); // ejemplo profe funciona
//************************************************************************************* */

//* Printing "Hola js a 2 segundos" after 2 seconds.

setTimeout(function () {
  console.log("Hola js a 2 segundos"); // utiliza una --función anónima-- y retorna el mensaje 2 sec después.
}, 2000);

/**
 * It takes a string as an argument and prints a greeting to the console
 * @param name - The name of the person you want to greet.
 */
function saludo(name) {
  console.log(`Hola ${name}`);
}

setTimeout(saludo, 2000, "Gus"); //? le paso como atributos, la function que voy a usar, el tiempo en mili-secs. y en este caso el parámetro de la function
