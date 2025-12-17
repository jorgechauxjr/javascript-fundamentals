/*

estructura de datos

key / value 

objeto {
propiedad: valor, 
propiedad: valor, 
propiedad: valor 
Metodos()
}

*/

const persona = {
    nombre: "Juan",
    edad: 33,
    direccion: {
        calle: "Av Insurgente 187",
        ciudad: "CDMX"
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    }
}

console.log("====Imprimiendo Objeto Persona====")
console.log(persona);
console.log("====Imprimiendo metodo saludar===")
persona.saludar();
console.log();

persona.telefono = "555-555-5555";

console.log("====propiedad telefono===");
console.log(persona.telefono);

persona.despedir = () => {
    console.log("Good bye");
}

console.log("====Imprimiendo metodo despedir===");
persona.despedir();

delete persona.telefono;