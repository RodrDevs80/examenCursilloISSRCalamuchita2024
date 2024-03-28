/**
 * 2- Mejorar el ejercicio anterior con manejo de errores:

Modifica la función tipoFigura para que, además de determinar el tipo de figura geométrica, verifique que el número de lados sea válido (mayor o igual a cero). Si el número de lados es menor a cero,  debe mostrar  un mensaje de error indicando que el número de lados no es correcto.

 */
//variables
const lados = 3;
const lados2 = 0;
const lados3 = -1;
const lados4 = '3';
const noLado = 'Casa'
const ladosNoValidos = 1;
const ladosNoValidos2 = 2;
//función
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
        } else {
            //se controlan los valores 1 y 2
            resultado = `El valor ingresado ${numeroDeLados} esta fuera del rango valido!`
        }
    }
    return resultado;
}
//test
console.log(tipoFigura(lados));
console.log('*******************************');
console.log(tipoFigura(lados2));
console.log('*******************************');
console.log(tipoFigura(lados3));
console.log('*******************************');
console.log(tipoFigura(lados4));
console.log('*******************************');
console.log(tipoFigura(noLado));
console.log('*******************************');
console.log(tipoFigura(ladosNoValidos));
console.log('*******************************');
console.log(tipoFigura(ladosNoValidos2));
console.log('*******************************');