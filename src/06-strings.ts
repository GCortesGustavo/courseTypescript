(() => {
  let productTitle = "Remera"

  productTitle = "Medias"
  let productDescription: string = "La mejor tela"

  productDescription = "La mejor tela de lana"
  console.log("productDescription", productDescription);

  let productPrice = 8000
  let inStock = true

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    inStock: ${inStock}
  `

  console.log("summary", summary);


})()
