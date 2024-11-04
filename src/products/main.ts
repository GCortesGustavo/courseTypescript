import { addProducts, calculateStock, products } from "./product.servide";

addProducts({
  title: "Bufanda",
  createdAt: new Date(),
  stock: 8,
  size: "S"
})
addProducts({
  title: "Sandalias",
  createdAt: new Date(),
  stock: 3,
  size: "XL"
})
console.log(products);
const total = calculateStock()
console.log(total);
