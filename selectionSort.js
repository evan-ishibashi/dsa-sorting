/* Sorts array of items using selection sort algo */
function selectionSort(arr) {
  let sorted = arr.slice(0);

  for(let i = 0; i < arr.length; i++) {
    let min = sorted[i];
    let minIdx = i;
    for(let j = i+1; j < arr.length; j++) {
      if (sorted[j] < min){
        min = sorted[j]
        minIdx = j;
      }
    }
    if (minIdx !== i){
      [sorted[i],sorted[minIdx]]=[sorted[minIdx],sorted[i]];
    }
  }
  return sorted;
}

module.exports = selectionSort;