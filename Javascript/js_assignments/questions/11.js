//Q:11 Use the Date object to do the following activities

const currentDate = new Date();
console.log("The current date with time is ", currentDate);

// - What is the year today?
const year = currentDate.getFullYear();
console.log("The current Year is ", year);

// - What is the month today as a number?
const month = currentDate.getMonth();
console.log("The month today as a number is", month);

// - What is the date today?
const dateToday = currentDate.getDate();
console.log("Current date is ", dateToday);

// - What is the day today as a number?
const day = currentDate.getDay();
console.log("Current Day is ", day);

// - What is the hours now?
const hrs = currentDate.getHours();
console.log("Current Hour is ", hrs);

// - What is the minutes now?
const mins = currentDate.getMinutes();
console.log("Current minutes are ", mins);

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const oldDate = new Date("1970-01-01");
const timeElapsed = currentDate - oldDate;

console.log(
  "Time that elapsed from 1st January 1970 in seconds is ",
  timeElapsed / 1000
);
