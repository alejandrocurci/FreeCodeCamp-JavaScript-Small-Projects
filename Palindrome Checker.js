// regular expression for all non-alphanumeric characters
const regex = /[\W_]/g;

const palindrome = (word) => {
    let word1 = word.replace(regex, "").toLowerCase();
    let word2 = word1.split("").reverse().join("");
    return word1===word2;
}

console.log(palindrome("eye"));  // should return true
console.log(palindrome("_eye"));  // should return true
console.log(palindrome("race car"));  // should return true
console.log(palindrome("not a palindrome"));  // should return false
console.log(palindrome("never odd or even"));  // should return true
console.log(palindrome("almostomla"));  // should return false
console.log(palindrome("A man, a plan, a canal. Panama"));  // should return true
console.log(palindrome("My age is 0, 0 si ega ym."));  // should return true
console.log(palindrome("0_0 (: /-\ :) 0-0"));  // should return true

