// simple calculator
// let num1 = prompt("Enter the first number ");
// let num2 = prompt("Enter the second number ");
// let operator = prompt("Enter a operator from + , - , * , / ");

function calculate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  } else {
    result = "Please Enter a proper Operator";
  }
  return result;
}

console.log(calculate(20, 5, "-"));
