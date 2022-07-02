const thousand = "M";
const fiveHundred = "D";
const hundred = "C";
const fifty = "L";
const ten = "X";
const five = "V";
const one = "I";

const number = prompt("Enter a number");

function romanNumber(number) {
  const digit4 = Math.floor(number / 1000) * 1000;
  const digit3 = Math.floor((number - digit4) / 100) * 100;
  const digit2 = Math.floor((number - digit4 - digit3) / 10) * 10;
  const digit1 = number - digit4 - digit3 - digit2;

  let output = "";

  output = output.concat(thousand.repeat(digit4 / 1000));

  if (digit3 === 900) output += "CM";
  else if (digit3 === 400) output += "CD";
  else if (digit3 > 400) output += "D" + hundred.repeat((digit3 - 500) / 100);
  else output += hundred.repeat(digit3 / 100);

  if (digit2 === 90) output += "XC";
  else if (digit2 === 40) output += "XL";
  else if (digit2 > 40) output += "L" + ten.repeat((digit2 - 50) / 10);
  else output += ten.repeat(digit2 / 10);

  if (digit1 === 9) output += "IX";
  else if (digit1 === 4) output += "IV";
  else if (digit1 > 4) output += "V" + one.repeat((digit1 - 5) / 1);
  else output += one.repeat(digit1 / 1);

  return output;
}

window.alert(romanNumber(number));

// function romanNumber(number) {
//   const digit4 = Math.floor(number / 1000) * 1000;
//   const digit3 = Math.floor((number - digit4) / 100) * 100;
//   const digit2 = Math.floor((number - digit4 - digit3) / 10) * 10;
//   const digit1 = number - digit4 - digit3 - digit2;

//   // console.log(digit4, digit3, digit2, digit1);

//   let output = "";

//   output = output.concat(thousand.repeat(digit4 / 1000));

//   if (digit3 === 900) output = output.concat("CM");
//   else if (digit3 === 400) output = output.concat("CD");
//   else if (digit3 > 400)
//     output = output.concat("D", hundred.repeat((digit3 - 500) / 100));
//   else output = output.concat(hundred.repeat(digit3 / 100));

//   if (digit2 === 90) output = output.concat("XC");
//   else if (digit2 === 40) output = output.concat("XL");
//   else if (digit2 > 40)
//     output = output.concat("L", ten.repeat((digit2 - 50) / 10));
//   else output = output.concat(ten.repeat(digit2 / 10));

//   if (digit1 === 9) output = output.concat("IX");
//   else if (digit1 === 4) output = output.concat("IV");
//   else if (digit1 > 4)
//     output = output.concat("V", one.repeat((digit1 - 5) / 1));
//   else output = output.concat(one.repeat(digit1 / 1));

//   return output;
// }
