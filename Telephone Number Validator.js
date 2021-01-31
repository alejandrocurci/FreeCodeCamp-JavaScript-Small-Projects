const regex = /[\s-]/;
const noNumbers = /[^0-9]/;
const area = /\(\d\d\d\)/;
const parenthesis = /[\(\)]/;

const telephoneCheck = (phone) => {
  if (
    !parenthesis.test(phone.substring(0, 1)) &&
    noNumbers.test(phone.substring(0, 1))
  ) {
    return false;
  }

  let numberStr = phone
    .split("")
    .filter((character) => !regex.test(character))
    .join("");

  if (parenthesis.test(numberStr)) {
    if (
      numberStr.substring(0, 1) == "1" &&
      numberStr.length == 13 &&
      area.test(numberStr.substring(0, 6))
    ) {
      return true;
    } else if (numberStr.length == 12 && area.test(numberStr.substring(0, 5))) {
      return true;
    } else {
      return false;
    }
  } else {
    if (noNumbers.test(numberStr)) {
      return false;
    } else if (numberStr.length == 10) {
      return true;
    } else if (numberStr.length == 11 && numberStr.substring(0, 1) == "1") {
      return true;
    } else {
      return false;
    }
  }
};

console.log(telephoneCheck("1 555-555-5555")); // should return true
console.log(telephoneCheck("(555)555-5555")); // should return true
console.log(telephoneCheck("555-5555")); // should return false
console.log(telephoneCheck("123**&!!asdf#")); // should return false
console.log(telephoneCheck("(275)76227382")); // should return false
console.log(telephoneCheck("-1 (757) 622-7382")); // should return false
