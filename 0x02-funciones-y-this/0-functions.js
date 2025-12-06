/*
function suma (a, b) {
    return a + b;
}

const resultado = suma(3, 5);
console.log(resultado);
*/

function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log(`Precio original: $${originalPrice}`)
console.log(`Descuento del ${discountPercentage}%`);
console.log(`Precio menos el descuento: $${finalPrice}`);