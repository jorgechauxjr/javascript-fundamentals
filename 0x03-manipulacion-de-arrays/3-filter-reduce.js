// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// filter()

const numbers = [1, 2, 3,  4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(numbers);
console.log(evenNumbers);

// reduce()  Case 1
// Para sumar los elementos del Array

console.log("================ REDUCE ==================");
const numersReduce = [1, 2, 3, 4, 5];
const sum = numersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Array: ", numersReduce);
console.log("Reducido la suma de los numeros es: ", sum);


// reduce()  Case 2
// Que tanto se repite una palabra en un Array


const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];

const wordFrequency = words.reduce((accumulator, currentValue) => {
    if (accumulator [currentValue]) {
        accumulator [currentValue]++;
    } else {
        accumulator [currentValue] = 1;
    };
    return accumulator;
} , {});

console.log();
console.log("======= Reduce case 2 ======");
console.log("Words: ", words);
console.log(wordFrequency);

// Exercise: Passing Grade Average

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94];

const passingGrades = grades.filter(grade => grade >= 70);

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length;

console.log();
console.log("======= Exercise: Passing Grade Average ======");
console.log('Original Grades: ', grades);
console.log('Passing Grades: ', passingGrades);
console.log('Average Passing Grade: ', averagePassingGrade);