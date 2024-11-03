(() => {
  type Sizes = "S" | "M" | "L" | "XL"

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson("Producto 2", new Date(), 14)
  console.log("Producto 1", producto1);

})()
