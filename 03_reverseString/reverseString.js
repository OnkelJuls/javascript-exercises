const reverseString = function (str) {
  string = str.split("");
  string.reverse();
  console.log(string.join(""));
  return string.join("");
};
reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");
// Do not edit below this line
module.exports = reverseString;
