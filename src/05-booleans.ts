(() => {
  let isEnable = true

  isEnable = false

  let isNew: Boolean = true
  console.log("isNew", isNew);
  isNew = false
  console.log("isNew", isNew);

  const random = Math.random()
  console.log("random", random);

  if(random < 100) {
    return true
  } else {
    return false
  }


})()
