// Q:30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

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

console.log(calculate(20, 5, "/"));
