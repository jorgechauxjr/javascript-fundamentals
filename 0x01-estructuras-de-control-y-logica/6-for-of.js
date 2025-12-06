/*
For... of es mas sencillo o otra forma de hacer esto
for (let i = 0; i < canasta.length; i++) {
    console.log(canasta[i]);
}
*/

let canasta = ["manzana", "pera", "naranja", "uva"];

for(fruta of canasta) {
    console.log(fruta);
}

let sl = "Hola";

for(i of sl) {
    console.log(i);
}