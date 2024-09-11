const sumAll = function (min, max) {
  let sum = 0;
  let start = 0;
  let stop = 0;
  if (min < 0) {
    return "ERROR";
  } else if (max < 0) {
    return "ERROR";
  } else if (typeof min === "number" && !Number.isInteger(min)) {
    return "ERROR";
  } else if (typeof max === "number" && !Number.isInteger(max)) {
    return "ERROR";
  } else if (typeof max !== "number") {
    return "ERROR";
  } else if (typeof min !== "number") {
    return "ERROR";
  } else if (min > max) {
    start = max;
    stop = min;
  } else {
    start = min;
    stop = max;
  }
  for (let i = start; i <= stop; i++) {
    sum += i;
  }
  //   console.log(start);
  //   console.log(stop);
  //   console.log(sum);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
