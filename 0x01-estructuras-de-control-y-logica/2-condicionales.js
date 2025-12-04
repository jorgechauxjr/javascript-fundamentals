/* 
Estructuras de control
*/
console.log("=== RUNNING 2-condicionales ===")
let nombre = 'Juan';
if (nombre === 'Juan') {
    console.log(`Hola ${nombre}`);
} else {
    console.log("Tu nombre NO es Juan")
}


// let nombre = prompt("Digite su nombre:");
if (nombre === 'Juan') {
    console.log(`Hola ${nombre}`);
} else if (nombre === 'Pedro') {
    console.log("Hola Pedro")
} else {
    console.log("Nombre no encontrado");
}