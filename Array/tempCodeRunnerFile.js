//Array
let nums = [1, 2, 3, 4, 5];
let fruits = ["cherry", "mango", "mulberry"];

//method
let tags = new Array("html", "head", "body", "title");

//access elements
console.log("tags[0]:", tags[0]);
console.log("tags[3]:", tags[3]);

//modify
tags[2] = "style";
console.log("tags=", tags);

//properties

//length
let len_arr = [1, 2, 3, 4, 5];
console.log("len of arr:", len_arr.length);

//indexOf
let fruitbasket = ["apple🍎", "banana🍌", "strawberry🍓", "cherry🍒"];
console.log("indexOf(apple🍎)=", fruitbasket.indexOf("apple🍎"));

//push()
let arr1 = [1, 2, 3];
arr1.push(4);
console.log("push arr1=", arr1);

//pop()
arr1.pop();
console.log("pop arr1=", arr1);

//shift():removes and returns the first element.
let temp = arr1.shift();
console.log("shift arr1=", arr1);
console.log("temp=", temp);

//unshift():adds one or more elements at the start of the list.
arr1.unshift(1);
console.log("unshift arr1=", arr1);
arr1.unshift(6, 5);
console.log("unshift arr1=", arr1);

//forEach():
fruitbasket.forEach(function (fruit) {
  console.log(fruit + "is a fruit.");
});

//map():Creates a new array populated with the results of calling a function on every element in the original array.
let bigfruits = fruitbasket.map((fruit) => fruit.toUpperCase());
console.log("bigfruits=", bigfruits);
console.log("type of bigfruits:", typeof bigfruits);

//Spread Operator - Allows you to copy the elements of an array into a new array.
let fruits2 = [...bigfruits];
console.log("fruits2:", fruits2);
// console.log("f1:", f1);
// console.log("f2:", f2);
