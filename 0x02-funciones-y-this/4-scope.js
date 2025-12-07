// ==== EJEMPLO 1 ====

const productName = "Smartphone";
const price = 499;
const brand = "TechCo";

function getProductDetails () {
    const productName = "Laptop";
    const price = 899;

    return `The ${productName} costs $${price} and is from the brand ${brand}.`;
}
console.log("==== EJEMPLO 1 ====");
console.log(getProductDetails());

// The Laptop costs $899 and is from the brand TechCo.

// ==== EJEMPLO 2 ====
// En console log no ejecutamos funcion sino que ponemos cadena de texto

const productName2 = "Smartphone";
const price2 = 499;
const brand2 = "TechCo";

function getProductDetails2 () {
    const productName2 = "Laptop";
    const price2 = 899;

    return `The ${productName2} costs $${price2} and is from the brand ${brand2}.`;
}

console.log("==== EJEMPLO 2 ====");
console.log(`The ${productName2} costs $${price2} and is from the brand ${brand2}.`);

// The Smartphone costs $499 and is from the brand TechCo.

// ==== EJEMPLO 3 ====

const userPoints = 150;

function checkAccess() {
    if (userPoints < 100) {
        const message = "Access denied: Insufficient points!";
        return message;
    } else {
        const message = "Access granted: Enjoy the premium features!";
        return message;
    }
}

console.log("==== EJEMPLO 3 ====");
console.log(checkAccess());

// ==== EJEMPLO 4 ====

const globalVariable = ":)"

function localOne() {
    // const carrot ="LA Z";
    console.log("Global 1: ", globalVariable);
    // console.log("LOCAL 1: ", localVariable);

    function localTwo() {
        const carrot = "Zanahoria";
        console.log("LOCAL 2: ", carrot);
    }

    function localThree() {
        console.log("LOCAL 3: ", carrot);
    }
    localTwo();
    localThree();
}

console.log("==== EJEMPLO 4 ====");
console.log(localOne());