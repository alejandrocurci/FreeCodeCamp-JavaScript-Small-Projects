const convertToRoman = (num) => {
  let roman = "";

  // get the thousands
  let quotient = Math.floor(num / 1000);
  let remainder = num % 1000;
  for (let i = 0; i < quotient; i++) {
    roman += "M";
  }

  // get the hundreds
  quotient = Math.floor(remainder / 100);
  remainder = remainder % 100;
  switch (quotient) {
    case 9:
      roman += "CM";
      break;
    case 8:
    case 7:
    case 6:
    case 5:
      roman += "D";
      for (let i = 5; i < quotient; i++) {
        roman += "C";
      }
      break;
    case 4:
      roman += "CD";
      break;
    case 3:
    case 2:
    case 1:
      for (let i = 0; i < quotient; i++) {
        roman += "C";
      }
      break;
    default:
      break;
  }

  //get the tens
  quotient = Math.floor(remainder / 10);
  remainder = remainder % 10;
  switch (quotient) {
    case 9:
      roman += "XC";
      break;
    case 8:
    case 7:
    case 6:
    case 5:
      roman += "L";
      for (let i = 5; i < quotient; i++) {
        roman += "X";
      }
      break;
    case 4:
      roman += "XL";
      break;
    case 3:
    case 2:
    case 1:
      for (let i = 0; i < quotient; i++) {
        roman += "X";
      }
      break;
    default:
      break;
  }

  //get the units
  switch (remainder) {
    case 9:
      roman += "IX";
      break;
    case 8:
    case 7:
    case 6:
    case 5:
      roman += "V";
      for (let i = 5; i < remainder; i++) {
        roman += "I";
      }
      break;
    case 4:
      roman += "IV";
      break;
    case 3:
    case 2:
    case 1:
      for (let i = 0; i < remainder; i++) {
        roman += "I";
      }
      break;
    default:
      break;
  }
  return roman;
};

console.log(convertToRoman(9)); // should return IX
console.log(convertToRoman(44)); // should return XLIV
console.log(convertToRoman(798)); // should return DCCXCVIII
console.log(convertToRoman(1023)); // should return MXXIII
console.log(convertToRoman(3999)); // should return MMMCMXCIX
