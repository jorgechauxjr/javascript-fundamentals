/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contrasena
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    },
];

const usersTimeline = [
    {
        username: "Estefany",
        timeline: "Me gusta Javascript!",
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor!",
    },
    {
        username: "Mariana",
        timeline: "Me gusta Vuejs",
    },
    {
        username: "Andres",
        timeline: "Me gusta Reactjs",
    },
];

class Persona {
    constructor(nombre, psw) {
        this.nombre = nombre;
        this.psw = psw;
    }
    existeUsuario(nombre) {
        for (let i = 0; i < usersDatabase.length; i++) {
            if (usersDatabase[i].username === nombre) {
                return true;
            }
        }
        return false;
    }
    pswCorrecta(psw) {
        for (let i = 0; i < usersDatabase.length; i++) {
            if (usersDatabase[i].password === psw) {
                return true;
            }
        }
        return false;
    }
    showTimeline() {
        for (let i = 0; i < usersTimeline.length; i++) {
            console.log(`${usersTimeline[i].username} comentó: ${usersTimeline[i].timeline}`);
        }
    }
}

const nombre = prompt("Digita tu nombre");
const psw = prompt("Digita tu contraseña:");

// const nombre = "andres";
// const psw = "123";

const persona1 = new Persona(nombre, psw);

if (persona1.existeUsuario(nombre) && persona1.pswCorrecta(psw)) {
    console.log(`=== BIENVENIDO(A) ${persona1.nombre.toUpperCase()} ===`);
    alert(`=== BIENVENIDO(A) ${persona1.nombre.toUpperCase()} ===`);
    console.log("<<< Time Line >>>");
    persona1.showTimeline();
} else {
    console.log("Usuario o contraseña incorrectos");
}
console.log("Fin del programa")