/*
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
*/

let numero1 = parseInt(prompt("Introduza un número: ")); 
let numero2 = parseInt(prompt("Introduza otro número: ")); 
document.write("El resultado de sumar " + " " + numero1 + " " + "mas" + " " + numero2 + " " + "es:" + " " + (numero1 + numero2));
document.write(`<br> El resultado de sumar ${numero1} + ${numero2} es = ${(numero1 + numero2)} `);
