// 1. Copying an Array

const originalArray = [1, 2, 3, 4, 5];
const copyOfAnArray = [...originalArray];

console.log("=== Copia de un Array ===");
console.log("Array original: ", originalArray);
console.log("Copia: ", copyOfAnArray);

// 2. Combining Arrrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combineArray = [...array1, ...array2];
const cb = [array1, array2];

console.log();
console.log("=== Combinando Arrays ===");

console.log("Array1: ", array1);
console.log("Array2: ", array2);
console.log("Combinado: ", combineArray);

// 3. Creating Arrays with Additional Elements

const baseArray = [1, 2, 3];
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

console.log();
console.log("=== Creando Arrays con elementos adicionales ===");
console.log("Array base: ", baseArray)
console.log("Array con elementos adicionales: ", arrayWithAdditionalElements)

// 4. Pass elements to functions

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [5, 2, 3];
const result = sum(...numbers);

console.log();
console.log("=== Pasando elementos a una función ===");
console.log("Array de numeros: ", numbers);
console.log("Suma usando spread operator: ", result);