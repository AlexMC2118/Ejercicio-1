'use strict';

//console.log('Cargado');
//Comienzo del programa
let numero = prompt ('Número a comprobar: ');
//Comprobamos valores incorrectos
while (numero < 0 && !Number.isInteger(numero)){
  if(numero < 0)
    numero = prompt ('Número a comprobar: (El número debe ser positivo)');
  else if (!Number.isInteger(numero))
    numero = prompt ('Número a comprobar: (El número debe ser entero)');
}
//Comprobamos si el numero es divisible por los valores especificados
if(numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0)
  console.log('El numero ' + numero + ' es divisible por 2, 3, 5 y 7.');
else
  console.log('El numero ' + numero + ' no es divisible por 2, 3, 5 y 7.');
