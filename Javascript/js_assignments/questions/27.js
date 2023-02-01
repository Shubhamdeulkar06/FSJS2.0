// Q:27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

for (let i = 0; i <= 100; i++) {
  let isPrime = true;
  if (i < 2) {
    isPrime = false;
  } else {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
