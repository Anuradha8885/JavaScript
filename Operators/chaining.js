// Chaining Operator (?.)
console.log("Chaining Operators.");
let product1 = {
  product_category: "Biscuits",
  product_name: "Good Day",
  product_id: 101,
  product_weight: "600gms",
  product_price: { original_price: 150.0, discounted_price: 98.0 },
};

let product2 = {
  product_category: "Biscuits",
  product_name: "Parle",
  product_id: 102,
  product_weight: "350gms",
  product_price: { original_price: 150.0 },
};

console.log("?.", product1?.product_price?.original_price);
console.log("?.", product2?.product_price?.discounted_price);
