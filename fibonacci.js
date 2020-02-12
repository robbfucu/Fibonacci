/* 
Declaracion de Variables y Lectura 
*/
let averArray = new averArray();
let number = prompt('Ingresar un numero entero: ');


/* 
Funcion que calcula la sucesion 
*/
function succession(number){
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
   var numbers = prompt("Introducir un numero entero para rellenar el arreglo: ");
    averArray.push(numbers);
  }
  sum = 0;
  for(let k=0; k<=10; k++){
    sum = sum+averArray[k];
  }
  average = sum/10;
  return average;
}
succession();
