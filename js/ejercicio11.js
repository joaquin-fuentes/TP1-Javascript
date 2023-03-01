/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
 */
let numero = parseInt(prompt("Ingrese un número: "));


if (numero % 2 === 0) {
    document.write(`El número ${numero} SI es divisible por 2`);
    document.write("<br>");
};
if (numero % 3 === 0) {
    document.write(`El número ${numero} SI es divisible por 3`);
    document.write("<br>");
};
if (numero % 5 === 0) {
    document.write(`El número ${numero} SI es divisible por 5`);
    document.write("<br>");
};
if (numero % 7 === 0) {
    document.write(`El número ${numero} SI es divisible por 7`);
    document.write("<br>");
};
if (numero % 2 != 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 != 0) {
    document.write(`El número ${numero} NO es divisible por ninguno de estos numeros (2, 3, 5 o 7)`);
};