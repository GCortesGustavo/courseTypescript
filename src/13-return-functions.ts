(() => {
  const calculateTotal =(prices: number[]): string => {
    let total = 0
    prices.forEach((item) => {
      total += item
    })

    return total.toString()
  }

  const printTotal = (prices: number[]) => {
    const rta = calculateTotal(prices)
    console.log("Total es", rta);
  }

  //Void es cuando la funcion no retorna nada
  printTotal([12,51,12,20])

  })()
