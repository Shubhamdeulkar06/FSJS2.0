// Q:10 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//  4 > 3  --> true
console.log(4 > 3);

//  4 >= 3 -->true
console.log(4 >= 3);

//  4 < 3 --> false
console.log(4 < 3);

//  4 <= 3 --> false
console.log(4 <= 3);

// 4 == 4 --> true
console.log(4 == 4);

//  4 === 4 --> true
console.log(4 === 4);

//  4 != 4 --> false
console.log(4 != 4);

//  4 !== 4 --> false
console.log(4 !== 4);

// 4 != '4' --> false
console.log(4 != "4");

// 4 == '4' --> true
console.log(4 == "4");

//  4 === '4' --> false
console.log(4 === "4");

// Q. Find the length of python and jargon and make a falsy comparison statement
const pyhton = "python";
console.log(pyhton.length);

const jargon = "jargon";
console.log(jargon.length);

if (pyhton.length === "jargon.length") {
  console.log(
    "This wont be executed because the values of diffrent data types"
  );
} else {
  console.log("This will execute");
}
