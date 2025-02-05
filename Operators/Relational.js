// Relational Operators
console.log("Relational Operators.");
//object
const emp = {
  eid: 101,
  ename: "Anuu",
  sal: 25000.0,
};
console.log("in:", "sal" in emp);

//class
class fruits {
  fruits(name) {
    this.name = name;
    console.log(this.name);
  }
}
let mango = new fruits("mango"); //object

console.log("instanceof:", mango instanceof fruits);
