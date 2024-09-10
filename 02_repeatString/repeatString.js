const number = Math.floor(Math.random() * 1000);
const repeatString = function (string, num) {
  let result = [];
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      result = result + string;
    }
    return result;
  } else if (num === 0) {
    return "";
  } else if (num === number) {
    for (let i = 0; i < num; i++) {
      result = result + string;
    }
  } else {
    return "ERROR";
  }
};
repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("odin", number);
repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
