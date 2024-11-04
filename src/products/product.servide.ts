import { Product } from "./product.model"

export const products:Product[] = []

export const addProducts = (data: Product) => {
  products.push(data)
}

export const calculateStock = ():number => {
  let totalStock = 0
  products.forEach((item) => {
    totalStock += item.stock
  })
  return totalStock
}
