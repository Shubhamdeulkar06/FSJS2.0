//Q:12. Create a human readable time format using the Date time object
//- YYYY-MM-DD HH:mm
//- DD-MM-YYYY HH:mm
//- DD/MM/YYYY HH:mm

const date = new Date();

function check(value) {
  if (value < 10) {
    value = "0" + value;
    return value;
  }
  return value;
}

const year = date.getFullYear();

let month = date.getMonth() + 1;
month = check(month);

let dateToday = date.getDate();
dateToday = check(dateToday);

let hours = date.getHours();
hours = check(hours);

let mins = date.getMinutes();
mins = check(mins);

//- YYYY-MM-DD HH:mm
const date1 = `${year}-${month}-${dateToday} ${hours}:${mins}`;
//- DD-MM-YYYY HH:mm
const date2 = `${dateToday}-${month}-${year} ${hours}:${mins}`;
//- DD/MM/YYYY HH:mm
const date3 = `${dateToday}/${month}/${year} ${hours}:${mins}`;

//output
console.log(`YYYY-MM-DD HH:mm  ------> ${date1}
DD-MM-YYYY HH:mm  ------> ${date2}
DD/MM/YYYY HH:mm  ------> ${date3}`);
