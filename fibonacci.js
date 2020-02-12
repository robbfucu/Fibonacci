/* 
Declaracion de Variables y Lectura 
*/
let number = prompt('Ingresar un numero: ');

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

function average(numbers){
  
}