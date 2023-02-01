// Q:28. Write a program to print the given patterns using the loops-
/*	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
 *
 **
 ***      */

function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

printTriangle(3);

/*b. Print a square pattern, if the input is 3 then the output should be similar to the given output
 ***
 ***
 ***       */
function printSquare(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}
printSquare(3);

/*	c.  Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
 *
 ***
 *****           */

function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

printPyramid(3);
