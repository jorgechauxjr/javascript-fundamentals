const greeting = function (name) {
    return `Hi, ${name}`
}

// Arrow function - explicit return
const greetingHi = (name) => {
    return `Hi, ${name}`
}

// Arrow function - implicit return
// Si tiene un solo parametro no se pone parentesis
const greetingHello = name => `Hi, ${name}`;

//si hay mas de un parametro entonces si se usa parentesis
const greetingTwoParameters = (name, lastName) => `Hi, ${name}`;

// Lexical Binding

const person = {
    name: 'Juan Perez',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

person.messageWithTraditionalFunction('"Good morning."')
person.messageWithArrowFunction('"Hi everyone."')
