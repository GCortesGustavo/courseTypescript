(() => {
  type UserId = string | number

  let userId: UserId

  //Literal types
  type Sizes =  "S" | "M" | "L" | "XL"
  let shirtSize: Sizes
  shirtSize = "S"

  function greeting(userId: UserId, size: Sizes){
    if(typeof userId === "string") {
      console.log(`String ${userId.toLocaleLowerCase()}`);
    }
  }

  greeting("hola", "S")
})
