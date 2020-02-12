/* 
Declaracion de Variables y Lectura 
*/
let averArray = [];
let number = prompt('Ingresar un numero entero: ');
let average = 0;

/* 
Funcion que calcula la sucesion 
*/
function sucesion(number){
  let arrayF = [0,1];
  for(let i=2; i<number; i++){
    arrayF[i]= arrayF[i-2] + arrayF[i-1];
  }
  return arrayF;
}
console.log(sucesion(number));

/* 
Funcion que rellena un array y calcula su promedio 
*/
function average(numbers){
  for(let j=0; j<=10; j++){
    averArray[i] = prompt('Ingresa numeros enteros para rellenar el arreglo: ');
  }
  average = 
}