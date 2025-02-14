/*Question : Scenario: You have a list of people’s ages in an array,
 and you want to create a new array that categorizes each person as either a "minor" or "adult"
based on their age.*/

let ages = [
  33, 28, 9, 46, 29, 20, 52, 47, 87, 25, 23, 74, 43, 93, 53, 95, 73, 7, 11, 45,
  21, 67, 49, 14,
];

let categories = ages.map((age) => {
  if (age >= 21) {
    return "Adult";
  } else {
    return "Minor";
  }
});
console.log("categories=", categories);

//filter() - Creates a new array with all elements that pass a test.
let num = [69, 37, 73, 2, 74];
let arrsmall = num.filter((n) => n <= 50);
console.log("arrsmall", arrsmall);

// Filter Expired Products:
// Scenario: You have a list of products where each product has a name, expirationDate, and isInStock property.
// You need to create a new array containing only the
// products that have expired (i.e., the expirationDate is less than today’s date).

let products = [
  { name: "milk", expireDate: new Date(25, 1, 7), isINStock: true },
  { name: "cheese", expireDate: new Date(25, 2, 7), isINStock: true },
  { name: "yogurt", expireDate: new Date(25, 1, 1), isINStock: true },
];
let today = new Date(25, 2, 7);

let expiredProducts = products.filter((product) => product.expireDate < today);
console.log("expireproducts=", expiredProducts);

//2d Array
let arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("2d arr:", arr2d);
