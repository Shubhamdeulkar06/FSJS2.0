// Q:09. Boolean value is either true or false.
// 1- Write three JavaScript statement example which provide truthy value.

const myName = "Shubham";
const game = { pcGame: "Valorant" };
const single = 1;

// statement 1
if (myName) {
  console.log("This block will execute since myName is defined as string");
} else {
  console.log("This block will not be executed ");
}

// statement 2
if (game) {
  console.log("This block will be executed since game is defined as object");
} else {
  console.log("This block will not be executed ");
}

// statement 3
if (single) {
  console.log(
    "This block will be executed since the value of single is defined as 1"
  );
} else {
  console.log("This block will not be executed ");
}

// 2- Write three JavaScript statement example which provide falsy value.

const password = null;
const age = undefined;
const married = 0;

// statement 1
if (password) {
  console.log(
    "This block will not be executed since password is defined as null"
  );
} else {
  console.log("this block will execute");
}

// statement 2
if (age) {
  console.log("This block will not be executed since age is undefined ");
} else {
  console.log("this block will execute");
}

// statement 3
if (married) {
  console.log(
    "This block will not be executed since the value of married is defined as 0"
  );
} else {
  console.log("this block will execute");
}
