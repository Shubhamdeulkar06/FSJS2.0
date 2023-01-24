/*Q:15. Write a program which can give grades to students according to theirs scores:
- 80-100, A
- 70-79, B
- 60-69, C
- 50-59, D
- 0-49, F*/

function checkMarks(marks) {
  if (marks >= 80 && marks <= 100) {
    return `Congrats!🎆🥳 You have obtained A grade `;
  } else if (marks >= 70 && marks <= 79) {
    return `Well Done!👏👏 You have obtained B grade `;
  } else if (marks >= 60 && marks <= 69) {
    return `Hey! You have obtained C grade.Need to work hard more👍 `;
  } else if (marks >= 50 && marks <= 59) {
    return `Poor Performance👎 You have obtained D grade.`;
  } else if (marks >= 0 && marks <= 49) {
    return `Very Bad Performance😠! You have obtained F grade.`;
  } else {
    return `Please Add correct input Ranging from 0-100`;
  }
}
const marksScored = checkMarks(-1);
console.log(marksScored);
