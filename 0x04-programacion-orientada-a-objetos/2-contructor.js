/*
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}

*/

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona("Juan", "Perez", 33);

console.log("===== PERSONA 1====");
console.log(persona1);

console.log("===== PERSONA 2====");

const persona2 = new  Persona("Lina", "Garcia", 15);
console.log(persona2);

// se ve en la consola del navegador no en bash
Persona.prototype.telefono = "123 456 789";

persona1.nacionalidad = "Mexico";

Persona.prototype.saludar = function() {
    console.log(`HOLA ME LLAMO ${this.nombre} ${this.apellido}`);
}

persona1.saludar();
persona2.saludar();