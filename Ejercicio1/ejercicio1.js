/**
 * Resolver el problema utilizando javascript, para identificar una figura geométrica:
 * Teniendo una variable numérica que representa el número de lados de una figura geométrica, mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:

Círculo: si el número de lados es 0.
Triángulo: si el número de lados es 3.
Cuadrado: si el número de lados es 4.
Pentágono: si el número de lados es 5.
Hexágono: si el número de lados es 6.
Polígono: si el número de lados es mayor que 6.
Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.
 */

const lados = 3;
const lados2 = 0;
const lados3 = -1;
const lados4 = '3';
const noLado = 'Casa';
const lados5 = '7';


const tipoFigura = (numeroDeLados) => {
    let resultado = '';
    if (numeroDeLados < 0 || isNaN(numeroDeLados)) {
        resultado = 'El dato ingresado no es valido'
    } else {
        if (numeroDeLados === 0) {
            resultado = 'La figura Geométrica es un Circulo';
        } else if (numeroDeLados == 3) {
            resultado = 'La figura Geométrica es un Triangulo';
        } else if (numeroDeLados == 4) {
            resultado = 'La figura Geométrica es un Cuadrado';
        } else if (numeroDeLados == 5) {
            resultado = 'La figura Geométrica es un Pentágono';
        } else if (numeroDeLados == 6) {
            resultado = 'La figura Geométrica es un Hexágono';
        } else if (numeroDeLados > 6) {
            resultado = 'La figura Geométrica es un Polígono';
        }
    }
    return resultado;
}

console.log(tipoFigura(lados));
console.log('*******************************');
console.log(tipoFigura(lados2));
console.log('*******************************');
console.log(tipoFigura(lados3));
console.log('*******************************');
console.log(tipoFigura(noLado));
console.log('*******************************');
console.log(tipoFigura(lados5));
console.log('*******************************');
console.log(tipoFigura(lados4));
console.log('*******************************');