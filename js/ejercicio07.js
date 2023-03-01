/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
 */

let numero1 = parseInt(window.prompt("Introduza el primer número: "));
let numero2 = parseInt(window.prompt("Introduza el segundo número: "));
let numero3 = parseInt(window.prompt("Introduza el tercer número: "));

if (numero1 > numero2 && numero1 > numero3) {
    document.write("El mayor de los tres numeros es el:" + " " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write("El mayor de los tres numeros es el:" + " " + numero2);
} else if (numero3 > numero1 && numero3 > numero2) {
    document.write("El mayor de los tres numeros es el:" + " " + numero3);
} else {
    document.write("Para determinar cual número es mayor, estos deben ser diferentes");
};