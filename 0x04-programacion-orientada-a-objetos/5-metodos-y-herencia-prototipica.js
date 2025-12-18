class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido");
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza;
    }
    emitirSonido() {
        console.log("El perro ladra");
    }
    correr() {
        console.log(`${this.nombre} corre alegremente!`);
    }
}

const perro1 = new Perro("Firulais", "Perro", "Labrador");
console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevoMetodo = function () {
    console.log("Este es un metodo.");
}

Perro.prototype.segundoMetodo = function () {
    console.log("Es otro metodo nuevo");
}

//  recorre la cadena de prototipos, mostrando cómo perro1
// está ligado al prototipo de Perro, luego a Animal y finalmente a Object.

let prototipoActual = Object.getPrototypeOf(perro1);
while (prototipoActual) {
    console.log(prototipoActual);
    prototipoActual = Object.getPrototypeOf(prototipoActual);
}