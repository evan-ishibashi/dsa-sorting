/* Sorts an array */
function bubbleSort(arr) {
  let sorted = arr.slice(0);
  let swapped = false;

  // [3,1,4,5]

  for (let i = arr.length; i > 1; i--) {
    for (let j = 1; j < i; j++) {
      if (sorted[j] < sorted[j-1]) {
        let temp = sorted[j];
        sorted[j] = sorted[j-1];
        sorted[j-1] = temp;
        swapped = true;
      }
    }
    if (!swapped) return sorted;
    swapped = false;
  }

  return sorted;
}

module.exports = bubbleSort;