//Q:17. Write a program which tells the number of days in a month

function getDays(year, month) {
  const days = new Date(year, month, 0).getDate();
  return days;
}

console.log(getDays(2016, 2));
