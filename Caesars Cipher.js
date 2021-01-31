const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const rot13 = (encodedStr) => {
  let decodedStr = "";
  for (let i = 0; i < encodedStr.length; i++) {
    let character = encodedStr.substring(i, i + 1);
    let index = letters.indexOf(character);
    if (index === -1) {
      decodedStr += character;
    } else if (index < 13) {
      decodedStr += letters[index + 13];
    } else {
      decodedStr += letters[index - 13];
    }
  }
  return decodedStr;
};

console.log(rot13("SERR PBQR PNZC")); // should return FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // should return FREE PIZZA
console.log(rot13("SERR YBIR?")); // should return FREE LOVE
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should return THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
