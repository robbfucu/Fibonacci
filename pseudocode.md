## Pseudocodigo Fibonacci

### Primera funcion

Se inicia por realizar la declaracion de variables, donde se asigna una varible para sacar el promedio.

Se declara una funcion que calculara la sucesion, asignandole un nombre y un parametro, donde se declaran 3 variables.

- a = 0
- b = 1
- fibonacciArray = [0] (Desde donde comenzara)

Declarando el siguiente ciclo donde se estara realizando el proceso. Asignando la siguiente regla *mientras b sea menor al numero ingresado (limite)*, comenzara el metodo *push* quien agregara nuevos elementos al array, devolviendo una nueva longitud. Continuando con la siguientes operaciones.

```
b += a, sumara el valor de la variable de b con la variable a
a = b - a, el valor de b sera restado al valor de a dando como resultado el nuevo valor en *a*

```
retornando el array hasta cumplir con la regla establecida.

### Segunda funcion

Se declaran las varibles donde ingresaremos el numero que tendra el arreglo y un array vacio.

Se inicia el ciclo for repetira el proceso hasta que el valor llegue al numero ingresado.
Utilizando el metodo *push* para agregar nuevos elementos, devolviendo un nueva longitud de array.

```
let limite = prompt('De cuantos numeros va a constituir el arreglo?');
let array = [];
  for(i=0; i<limite; i++){
    var arrayVal =+ prompt('Introduzca el valor '+i);
    array.push(arrayVal);
  }

```
Utilizando el metodo reduce donde ejecutara una funcion sobre cada elemento devolviendo un valor.

```
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let suma = (array.reduce(reducer)); 
```
Asignamos un variable donde se calculara el promedio, utilizando los numeros sumados dividiendolos con el nuevo array.
```
let promedio =suma/array.length;
console.log("El promedio de los valores del array es: " +promedio);
```

