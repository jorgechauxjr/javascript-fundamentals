// 1. Tipo entero y decimal
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2. Notación cientifica
const cientifico = 5e3;

// 3. Infinitos y NaN
const infinito = Infinity;
const noEsUnNumero = NaN;

// Operaciones aritmeticas

// 1. Suma, resta, multplicación y división
const suma = 3 + 4;
const resta = 4 - 4;
const multiplicacion = 4 * 7;
const division = 16 / 2;

// 2. Módulo y exponenciación
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

// Presición
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1));

console.log(resultado === 0.3);

// Operaciones avanzadas
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const numeroAleatorio = Math.random();
console.log(`Raiz Cuadrada de 16: ${raizCuadrada}`);
console.log(`Valor absoluto de -7: ${valorAbsoluto}`);
console.log(`numero aleatorio: ${numeroAleatorio}`);