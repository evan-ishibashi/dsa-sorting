/** Given an array, mutates array and returns pivot index where values less than
 * pivot appear before pivot index and values greater than pivot appear after
 * pivot index.
 */
function pivot (arr) {
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      let [swap] = arr.splice(i, 1);
      arr.splice(0, 0, swap);
    }
  }

  return arr.indexOf(pivot)
}

function quickSort() {

}

module.exports = {pivot, quickSort}