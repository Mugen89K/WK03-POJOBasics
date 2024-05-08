/*
Define a function called variableAsKey that accepts an object parameter and a
string parameter and returns the value from the object at the key of the string
passed in.
*/

const variableAsKey = (obj, key) => {
  return obj[key]
}

// Example:
// const obj = {
//   first: "1",
//   second: 2,
//   third: "three"
// }
// const str = "first";
// console.log(variableAsKey(obj, str)); //=> "1"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = variableAsKey;
} catch {}
