// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// map()

console.log("======= MAP ======");

const numbers = [1, 2, 3, 4,5];

const squaredNumbers = numbers.map(x => x * x);

console.log(numbers);
console.log(squaredNumbers);

// forEach()

console.log("======= FOR EACH ======");

const colors = ["Red", "Pink", "Blue"];
const iteratedColors = colors.forEach(element => console.log(element));

console.log(colors);
console.log("------------------------------")
console.log(iteratedColors);

// Exercise: Fahrenheit to Celsius conversion

console.log("======== TEMPERATURES ==============");

const temperaturesFahrenheit = [32, 68, 95, 104, 212];
const temperaturesCelsius = temperaturesFahrenheit.map(temp => (5/9) * (temp - 32));

console.log("Temperatures in F ", temperaturesFahrenheit);
console.log(`Temperatures in F ${temperaturesFahrenheit}`);
console.log(`Temperatures in C ${temperaturesCelsius}`);


// Exercise: Sum of elements in an Array


/*
const numeros = [1, 2, 3, 4, 5];
let suma = 0;
for (i = 0; i < numeros.length; i++) {
    
    suma += numeros[i];
}
*/

const numeros = [1, 2, 3, 4, 5];

let suma = 0;

numeros.forEach(num => {
    suma += num;
});

console.log("Array of numbers: ", numeros);
console.log("Sum of all: ", suma)