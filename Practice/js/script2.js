function sum(val1, val2) {
  let result = val1 + val2;
  return result;
}

console.log(sum(5, 6));

// example with array
// const fruits = ["Apple", "Banana", "Chiku", "Dragon Fruit"];
// console.log(fruits);
// // ***************************
// // Output

// const company = ["LearnCodeOnline", "iNeuron.ai", "Learnyst", "Google"];
// let companyStr = company.join(" & ");
// console.log(companyStr);

// let fruits = ["Apple", "Banana", "Chiku", "DragonFruit"];
// let berries = ["Strawberry", "Blueberry", "Raspberry", "Blackberry"];
// let moreFruits = fruits.concat(berries);
// console.log(moreFruits);

// let berries = ["Strawberry", "Blueberry", "Raspberry", "Blackberry"];
// let newBerries = berries.slice(1, 3);
// console.log(newBerries);

// let berries = ["Strawberry", "Blueberry", "Raspberry"];
// berries.splice(1, 0, "Blackberry");
// console.log(berries);

// toString
// let berries = ["Strawberry", "Blueberry", "Raspberry"];
// // berries.toString();
// console.log(berries.toString());

// reverse
// let berries = ["Strawberry", "Blueberry", "Raspberry"];
// console.log(berries.reverse());

// sort
// let berries = ["Strawberry", "Blueberry", "Raspberry"];
// console.log(berries.sort());

//fill
// let array1 = [1, 2, 3, 4, 5];
// console.log(array1.fill(0, 2, 5));

// let array1 = [1, 2, 3, 4, 5];
// console.log(array1.fill(5, 1));

// let array1 = [1, 2, 3, 4, 5];
// console.log(array1.fill(6));

// const array1 = ["a", "b", "c", "d"];
// const keys = array1.keys();

// for (const key of keys) {
//   console.log(key);
// }

// include()
const array1 = [1, 2, 3];

console.log(array1.includes(2, 2));
// expected output: true

// let berries = ["Strawberry", "Blueberry", "Raspberry"];
// console.log(berries.indexOf("Raspberry"));

// let berries = ["Strawberry", "Blueberry", "Raspberry"];
// console.log(berries.indexOf("Blackberry"));

//

// map()
let maths = [1, 4, 9, 16, 25];
console.log(maths.map(Math.sqrt));
