function analyzeArray(arr) {
  const length = arr.length;

  let sum = 0;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < length; i++) {
    sum += arr[i];

    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return {
    average: sum / length,
    min: min,
    max: max,
    length: length,
  };
}

module.exports = analyzeArray;
