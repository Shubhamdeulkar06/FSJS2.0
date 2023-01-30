/* Q:20. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'*/

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// 1) add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// 2) add Sugar at the end of your shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);

// 3) remove 'Honey'
const honey = shoppingCart.indexOf("Honey");
shoppingCart.splice(4, 1);
console.log(shoppingCart);

// 4) modify Tea to 'Green Tea
const tea = shoppingCart.indexOf("Tea");
shoppingCart.splice(tea, 1, "Green Tea");
console.log(shoppingCart);
