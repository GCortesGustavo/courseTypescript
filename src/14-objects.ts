(() => {
  type Sizes = "S" | "M" | "L" | "XL"
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);

  }

  login({
    email: "gusti@gmail.com",
    password: "1234"
  })


  const products:any[] = []

  const addProducts = (data: Product) => {
    products.push(data)
  }

  addProducts({
    title: "Pantalon",
    createdAt: new Date(),
    stock: 5,
    size: "XL"
  })
  addProducts({
    title: "Bufanda",
    createdAt: new Date(),
    stock: 8,
    size: "S"
  })

  console.log(products);

})()
