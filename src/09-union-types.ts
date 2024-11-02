(() => {
  let userId: number | string

  userId = 12
  userId = "12"

  function greeting(id: string | number) {
    if (typeof id === "string") {
      console.log(`Hola usuario con el id ${id.toLocaleLowerCase()}`);
    } else{
      console.log(`Hola usuario con el id ${id.toFixed(1)}`);
    }

  }

  greeting("adioss")
})()
