/** Sort an array with insertion sort */
function insertionSort(arr) {
  let sorted = arr.slice(0);
  let currentIdx = 1;

  while (currentIdx < arr.length) {
    for (let i = 0; i < currentIdx; i++) {
      if (sorted[currentIdx] < sorted[i]) {
        // insert
        let [swap] = sorted.splice(currentIdx, 1);
        sorted.splice(i, 0, swap);
      }
    }

    currentIdx++;
  }

  return sorted;
}

module.exports = insertionSort;