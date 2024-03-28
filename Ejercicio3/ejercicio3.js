/**
 * Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:

Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo de un lado,  calcule y retorne el perímetro de la misma. El perímetro de una figura geométrica se calcula sumando las longitudes de todos sus lados. Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio, donde π es una constante (aproximadamente 3.14159) y radio es el radio del círculo.
 (para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales) .
 */

//variables de prueba de entrada
const lados = 3;
const lados2 = 0;
const lados3 = -1;
const lados4 = '3';
const noLado = 'Casa'
const ladosNoValidos = 1;
const ladosNoValidos2 = 2;

const largo = 4;
const largo2 = '4';
const largo3 = 'casa'

//función
const tipoFigura = (numeroDeLados, largo) => {
    const pi = 3.14159;
    let resultado = '';
    if (numeroDeLados < 0 || isNaN(numeroDeLados) || largo <= 0 || isNaN(largo)) {
        resultado = 'Alguno de los datos ingresados no es valido'
    } else {
        if (numeroDeLados === 0) {
            resultado = `La figura Geométrica es un Circulo y su circunferencia es ${2 * pi * largo}`;
        } else if (numeroDeLados == 3) {
            resultado = `La figura Geométrica es un triangulo y su perímetro es ${largo * numeroDeLados}`;
        } else if (numeroDeLados == 4) {
            resultado = `La figura Geométrica es un cuadrado y su perímetro es ${largo * numeroDeLados}`;
        } else if (numeroDeLados == 5) {
            resultado = `La figura Geométrica es un pentágono y su perímetro es ${largo * numeroDeLados}`;
        } else if (numeroDeLados == 6) {
            resultado = `La figura Geométrica es un Hexágono y su perímetro es ${largo * numeroDeLados}`;
        } else if (numeroDeLados > 6) {
            resultado = `La figura Geométrica es un Hexágono y su polígono es ${largo * numeroDeLados}`;
        } else {
            //se controlan los valores 1 y 2
            resultado = `El valor ingresado ${numeroDeLados} esta fuera del rango valido!`
        }
    }
    return resultado;
}
//test
console.log(tipoFigura(lados, largo));
console.log('*******************************');
console.log(tipoFigura(lados2, largo2));
console.log('*******************************');
console.log(tipoFigura(lados3, largo));
console.log('*******************************');
console.log(tipoFigura(lados4, largo3));
console.log('*******************************');
console.log(tipoFigura(noLado.largo));
console.log('*******************************');
console.log(tipoFigura(ladosNoValidos, largo));
console.log('*******************************');
console.log(tipoFigura(ladosNoValidos2, largo));
console.log('*******************************');
