//creating strings
let singleQuotes = "Helloworld";
let doubleQuotes = "Sequence of chars.";
let templateLiteral = `Helloworld`;

//String Length
let msg = "Write and run your JavaScript code";
console.log("msg.length=", msg.length);

//concat
let fname = "john";
let lname = "Deo";
let fullname = fname + "" + lname;
console.log("fullname=", fullname);

let fullname2 = `${fname} ${lname}`;
console.log("fullname2=", fullname);

//accessing character.
let str2 = "Securities and Exchange Board of India (SEBI)";
console.log("toUpperCase:", str2.toUpperCase());
console.log("toLowerCase:", str2.toLowerCase());
console.log("indexOf:", str2.indexOf("Exchange"));
console.log("slice:", str2.slice(0, 4));
console.log("replace:", str2.replace("and", "&&"));
