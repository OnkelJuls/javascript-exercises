const sumAll = function (min, max) {
  let sum = 0;
  let start = 0;
  let stop = 0;
  if (min < 0 || max < 0) {
    return "ERROR";
  } else if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  } else if (typeof max !== "number" || typeof min !== "number") {
    return "ERROR";
  } else if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  //   console.log(start);
  //   console.log(stop);
  //   console.log(sum);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
