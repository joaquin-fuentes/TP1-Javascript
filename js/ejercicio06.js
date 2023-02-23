/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 */

let numero1 = parseInt(window.prompt("Introduza el primer número: "));
let numero2 = parseInt(window.prompt("Introduza el segundo número: "));

if (numero1 > numero2) {
    document.write("El mayor de los 2 numeros es el:" + " " + numero1)
} else if (numero2 > numero1) {
    document.write("El mayor de los 2 numeros es el:" + " " + numero2)
} else {
    document.write("Para determinar cual número es mayor, estos deben ser diferentes")
}