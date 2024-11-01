(() => {
  let productPrice = 100

  productPrice = 120

  console.log("productPrice", productPrice);

  let customerAge: number = 25

  customerAge = customerAge + 1

  let productsInStock: number

  productsInStock = 1000
  console.log("products in stock",productsInStock);

  if(productsInStock > 10) {
    console.log("Is greater");
  }

  let discount = parseInt("1232")
  if(discount <= 200) {
    console.log("apply");
  } else {
    console.log("Not Apply");
  }
  console.log("Discount",discount);


  let hex = 0xfff
  console.log("hex", hex);
  let bin = 0b101011
  console.log("bin", bin);
})()
