let firstName = 'Juan';
let secondName = 'Perez';

let saludo = 'Hola ' + firstName + ' ' + secondName;
console.log(saludo);

let saludo2 = `Hola ${firstName} ${secondName}`;
console.log(saludo2)

// manipulacion de string
let frase = 'JavaScript es Estremadamente Genial';
console.log(frase.length);
console.log(frase.toLocaleLowerCase());
console.log(frase.toUpperCase());
console.log(frase.substring(0, 10));