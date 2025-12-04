let fruta = "Papaya";

switch (fruta) { // evalua similar a === tipo y valor

    case "Naranja":
        console.log("La naranja cuesta $2.000 la libra")
        break;
    case "Manzana":
        console.log("La manzana cuesta $3.000 la libra")
        break;
    //caso compartido, dos productos con el mismo precio
    case "Mango":
    case "Papaya":
        console.log("El mango y la papaya cuesta $5.000 la libra")
        break;
    default:
        console.log(`Lo siento, no tenemos ${fruta}`);
}
