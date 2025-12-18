class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const  persona1 = new Persona("Juan", 25);
console.log(persona1);
console.log(persona1.nombre);

persona1.nuevoMetodo = function() {
    console.log(`Mi nombre es: ${this.nombre}`);
}