// Explicit Type Casting

const string = '42';
console.log(string, " TIPO===" + typeof(string));

const integer = parseInt(string);
console.log("TIPO despues de parse -->" + typeof(integer));

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(stringDecimal, " TIPO===" + typeof(string));
console.log("TIPO despues de parse -->" + typeof(integer));

const binary = '1010';
const decimal = parseInt(binary, 2);
console.log(binary, " TIPO===" + typeof(binary));
console.log("TIPO despues de parse -->" + typeof(decimal));


// Implicit Type Casting

const sum = '5' + 3;
console.log("==========================")
console.log(sum);

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean);

const suWithNumber = 2 + true;
console.log(suWithNumber);

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;

console.log("Str '10' + str '10' = ", stringValue + stringValue); // Concatena
console.log("Str '10' + num 10 = ", stringValue + numberValue);
console.log("Str '10' + bool true = ", stringValue + booleanValue);
console.log();
console.log("num 10 + Str '10' = ", numberValue + stringValue);
console.log("num 10 + num 10 = ", numberValue + numberValue);
console.log("num 10 + bool true = ", numberValue + booleanValue);
console.log();
console.log("bool true + str '10' = ", booleanValue + stringValue);
console.log("bool true + num 10 = ", booleanValue + numberValue);
console.log("bool true + bool true = ", booleanValue + booleanValue);