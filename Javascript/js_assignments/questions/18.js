//Q:18. Write a program which tells the number of days in a month, now consider leap year.

function getDays(year, month) {
  const days = new Date(year, month, 0).getDate();
  return days;
}

console.log(getDays(2012, 2));

console.log(getDays(2008, 2));
