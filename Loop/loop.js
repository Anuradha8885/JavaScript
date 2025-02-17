//readline input
// const readline = require("readline");
// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r1.question("Enter val a&b", (a) => {
//   r1.question("enter val for b", (b) => {
//     console.log("sum=", parseFloat(a) + parseFloat(b));
//     r1.close();
//   });
// });

//const{console}=require("inspector");
const { log } = require("console");
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("enter val of a:", (a) => {
//   rl.question("enter val of b:", (b) => {
//     console.log("sum=", parseFloat(a) + parseFloat(b));
//   });
// });

//While Loop:
let str = "cherry";
let i = 0;
while (i < str.length) {
  console.log(str[i]);
  i++;
}

let str1 = "cherry";
let emptystr1 = "";
let j = 0;
while (j < 6) {
  emptystr1 += str1[j] + "🍒";
  j++;
}
console.log("emptystr1=", emptystr1);

//for of loop
let fruits = ["apple", "cherry", "papaya"];
for (f of fruits) {
  console.log(f);
}

//for in loop
let student = { name: "abc", age: 25 };
for (key in student) {
  console.log("key:", key, student[key]);
}

//forEach loop
let str2 = "pineapple";
str2.split("").forEach((c) => {
  console.log(c, "=>", "from pineapple");
});

let fruits1 = ["apple", "cherry", "papaya"];
fruits1.forEach((f) => {
  console.log(f, ":is a fruit");
});
