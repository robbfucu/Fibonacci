/* 
Declaracion de Variables y Lectura 
*/
averArray = [];
let averageArray = 0;
let number = prompt('Ingresar un numero entero: ');

/* 
Funcion que calcula la sucesion 
*/
function fibonacci(number) {
  var a = 0;
  var b = 1;
  var fibonacciArray = [0];

  while (b <= number) {
    fibonacciArray.push(b);
    b += a;
    a = b - a;
  }

  return fibonacciArray;
}
console.log(fibonacci(number));
/* 
Funcion que rellena un array y calcula su promedio 
*/
let limite = prompt('De cuantos numeros va a constituir el arreglo?');
let array = [];
  for(i=0; i<limite; i++){
    var arrayVal =+ prompt('Introduzca el valor '+i);
    array.push(arrayVal);
  }

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let suma = (array.reduce(reducer)); 

let promedio =suma/array.length;
console.log("El promedio de los valores del array es: " +promedio);