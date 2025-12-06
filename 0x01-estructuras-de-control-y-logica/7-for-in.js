const persona = {
    Nombre: "Juan",
    Apellido: "Perez",
    Edad: 38,
}
console.log("=== Información de la persona ===")
for (const info in persona) {
    console.log(`${info}: ${persona[info]}`);    
}
console.log("========");

