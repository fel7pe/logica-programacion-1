//No cambiar el nombre de la función ordenarNumeros
const prompt = require('prompt-sync')();

  let num1;
  let num2;
  let num3;

function ordenarNumeros(num1,num2,num3){
  
    while (true) {
    num1 = parseFloat(prompt("Ingrese el primer número: "));
    num2 = parseFloat(prompt("Ingrese el segundo número: "));
    num3 = parseFloat(prompt("Ingrese el tercer número: "));

    if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
      break;
    } else {
      console.log("Por favor, ingrese números diferentes.");
    }
  }

  let mayor
  let centro
  let menor


  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      mayor = num1
      centro = num2
      menor = num3
    } else {
      mayor = num1
      centro = num3
      menor = num2
    }
  
  } else if (num2 > num1 && num2 > num3){
    if (num1 > num3) {
      mayor = num2
      centro = num1
      menor = num3
    } else {
      mayor = num2
      centro = num3
      menor = num1
    }
  
  } else if(num3 > num1 && num3 > num2){
    if(num1 > num2){
       mayor = num3
       centro = num1
       menor = num2
    
    } else {
       mayor = num3
       centro = num2
       menor = num1
    
  }
  } 
 
// No modificar el código debajo de esta línea
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}

module.exports = ordenarNumeros;

let mostrar = ordenarNumeros(num1, num2, num3);
console.log("El orden de los numeros de mayor a menor es: ", mostrar.ordenMayorAMenor);
console.log("El orden de los numeros de menor a mayor es: ", mostrar.ordenMenorAMayor);