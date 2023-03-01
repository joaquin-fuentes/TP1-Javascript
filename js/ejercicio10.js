/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
 */

let numero = parseInt(prompt("Ingrese un número: "))


if( numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){
    document.write(`El número ${numero} SI es divisible por alguno de estos numeros (2, 3, 5 o 7)`)
} else {
    document.write(`El número ${numero} NO es divisible por ninguno de estos numeros (2, 3, 5 o 7)`)
}