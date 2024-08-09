/* 1- Par o Impar*/

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

esParOImpar(4);

/* 2-Nmero mayor */

function numeroMayor(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1);
    } else {
        console.log("Los números son iguales");
    }
}

numeroMayor(10, 5);

/* 3-Multiplo de 5 */

function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        console.log("El número es múltiplo de 5");
    } else {
        console.log("El número no es múltiplo de 5");
    }
}

esMultiploDeCinco(25);

/*4-Numeros del 0 al número x*/

function imprimirHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

imprimirHasta(5);

/* 5- Repetir palabra x veces */

function repetirPalabra(palabra, cantidad) {
    let resultado = "";
    for (let i = 0; i < cantidad; i++) {
        resultado += palabra + " ";
    }
        console.log(resultado);
}

repetirPalabra("felices", 3);

/* 6- Imprimir Array */

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let miArray = [1, 2, 3, 4, 5, 6, 7, 8];
imprimirArray(miArray); 

/* 7- Imprimir array sin el quinto elemento*/

function imprimirArraySinQuinto(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) { // Si no es el índice 4 (quinto elemento)
        console.log(array[i]);
        }
    }
}

let MiArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArraySinQuinto(MiArray);

/* 8- Multiplicar elementos de un array*/

function multiplicarElementos(array, multiplicador) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * multiplicador);
    }
}

let ArrayEs = [1, 2, 3, 4, 5];
multiplicarElementos(ArrayEs, 4);