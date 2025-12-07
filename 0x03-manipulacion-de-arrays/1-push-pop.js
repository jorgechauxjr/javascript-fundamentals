// Methods that modify the original array (Mutability).

console.log("==== PUSH ===")
const countries = ["USA", "Canada", "UK"];
console.log(countries);


// push() devuelve la longitud del array despues de agregar los valopres nuevos
const newCountries = countries.push("Germany", "Australia");

console.log(countries);
console.log(newCountries);

console.log("==== POP ===")

console.log(countries);
const removeCountries = countries.pop();
console.log(countries);
console.log(removeCountries);


// <<<< Exercise: Managing a Stack >>>>

console.log("===================================================")
let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart() {
    console.log('Current Cart of Books: ', bookCart)
}

function performCartActions(action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            break;
        case REMOVE_FROM_CART_ACTION:
            if (bookCart.length === 0) {
                console.log('Cart is empty. No books to remove.')
            } else {
                const removedBook = bookCart.pop()
                console.log(`Removed book from the cart: ${removedBook}`)
            }
            break;
        case VIEW_CART_ACTION:
            viewCart()
            break;
        default:
            console.log('Invalid action. Please choose a vaid option.')
    }
}

performCartActions(ADD_TO_CART_ACTION, 'Habitos Atomicos')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'El hombre mas rico de Babilonia')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)