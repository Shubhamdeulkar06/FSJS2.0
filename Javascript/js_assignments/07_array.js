//Q:07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let platform = [
  "pw skills",
  "LCO",
  "Udemy",
  "Corsera",
  "pw skills",
  "pw skills",
];
console.log(platform.lastIndexOf("pw skills", -4));
console.log(platform.lastIndexOf("pw skills", -1));
