function convertIntoNumber(str) {
  let intialValue = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i] * 10 + str[i]);
  }
  return intialValue;
}

console.log(convertIntoNumber("123"));
// let a = "123";
// let b = convertIntoNumber(a);
// console.log(b);
