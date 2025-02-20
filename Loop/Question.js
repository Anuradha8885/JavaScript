//Questions:
/*
Problem:
You are given a scenario where there are 100 doors, all initially closed, and a monkey with the number N. 
The monkey walks through the doors and toggles the state (open/close) 
based on whether the door number is divisible by the monkey's number (N in this case). 
Write a program that counts how many doors are open and how many are closed 
after the monkey has walked through all the doors.
*/

const { parse } = require("path");

// let monkey = 6;
// let doors = 1;
// let opendoor = 0;
// let closedoor = 0;
// while (doors <= 100) {
//   if (doors % monkey == 0) {
//     opendoor++;
//   } else {
//     closedoor++;
//   }
//   doors++;
// }
// console.log("opendoors=", opendoor);
// console.log("closedoors=", closedoor);

let monkey = 26;
let closedoor = 100;
let opendoor = 0;
for (let d = 1; d <= 100; d++) {
  if (d % monkey == 0) {
    opendoor++;
    console.log("opened=", d);
    closedoor--;
  }
}
console.log("opendoors=", opendoor);
console.log("closedoors=", closedoor);

//do-while loop

//Question :
/*
Scenario:
Imagine you are managing a charity event, and you need to distribute gift bags to participants. 
Initially, you have a starting number of gift bags (num). 
After each round of distribution, you remove a certain number of bags, defined by a variable n, 
and hand them out to the participants. 
You will continue this process until there are fewer than n bags remaining.

Your task is to create a program that helps you track and print the number of gift bags 
you have left after each round of distribution, stopping when there are fewer than n bags remaining.
*/

let num = 45;
do {
  console.log(num);
  num -= 9;
} while (num >= 9);
let giftbags = 100;
let dist = 7;

do {
  console.log("after round remaining gift bags:", giftbags);
  giftbags -= dist;
} while (giftbags >= dist);

//Question:
/*
Scenario: Dynamic Budget Allocation for Multiple Departments
You are managing a large project with n departments. The total budget for the project is fixed, and you need to allocate a certain percentage of the total budget to each department based on their needs. The percentages for each department are provided as an array.

Problem:
Write a program that:

Takes the total budget and an array of percentages.
Allocates the budget to each department based on the provided percentages.
Prints out the department number, its corresponding percentage, and the budget allocated to it.
*/

let tot_budget = 1000;
let dept = 5;
let percentage = [4, 7, 15, 71, 3];
percentage.sort();
percentage.reverse();
console.log(percentage);
total = 0;
percentage.forEach((p) => {
  total += parseFloat(percentage);
});
console.log("total parcentage=", total);

for (let i = 0; i < dept; i++) {
  let budget = tot_budget * (percentage[i] / 100);
  console.log(
    "dept=",
    i + 1,
    "percentage=",
    percentage[i],
    "budget",
    budget.toFixed(2)
  );
  if (tot_budget >= budget) {
    tot_budget -= budget;
    console.log("remaining budget:", tot_budget.toFixed(2));
  } else {
    console.log("remaining budget is less:", tot_budget.toFixed(2));
    break;
  }
}
