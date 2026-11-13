// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFar (cel) {
  return (cel * (9/5) + 32 )
}

function FarToCel (far) {
  return ((far-32)*(5/9))
}

console.log("temperature in fahrenheit - "+celToFar(30)+"°F");

console.log("temperature in celsius - "+FarToCel(86)+"°c");
