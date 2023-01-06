let friendsAge = [20, 19, 22, 21, 23];
let sum = 0;
for (let i = 0; i < friendsAge.length; i++) {
  sum += parseInt(friendsAge[i]);
}
// console.log(sum);
// const sum =
//   friendsAge[0] + friendsAge[1] + friendsAge[2] + friendsAge[3] + friendsAge[4];
let totalFriends = 5;
let averageAge = sum / totalFriends;

console.log(`The Average age is ${averageAge}`);
// console.log(`The total age is ${sum}`);

// const average = sum / totalFriends
// console. log('Average friend age",
// average)
