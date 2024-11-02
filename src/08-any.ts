//Es un tipo de dato exclusivo de TypeScript. Su traducción sería “cualquiera”, pues literalmente nos permite almacenar cualquier tipo de dato en una variable:
// Es una mala práctica usar este tipo de dato
(() => {
  let myDynamicVar: any
  myDynamicVar = 100
  myDynamicVar = null
  myDynamicVar = {}
  myDynamicVar = ""

  myDynamicVar = "Hola"
  const otherString = (myDynamicVar as string).toLocaleLowerCase()
  console.log(otherString);

  myDynamicVar = 123
  const otherNumber = (<number>myDynamicVar).toFixed()
  console.log(otherNumber);
})()
