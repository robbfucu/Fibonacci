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

while(b < number) {
    fibonacciArray.push(b);
    b += a;
    a = b - a;
}

return fibonacciArray;
}
console.log(fibonacci(10));

/* 
Funcion que rellena un array y calcula su promedio 
*/
function average(numbers){
  for(let j=0; j<=10; j++){
   var numbers = prompt("Introducir un numero entero para rellenar el arreglo: ");
    averArray.push(numbers);
  }
  sum = 0;
  for(let k=0; k<=10; k++){
    sum = sum+averArray[k];
  }
  averageArray = sum/10;
  return averageArray;
}
console.log(averageArray);
succession();
average();