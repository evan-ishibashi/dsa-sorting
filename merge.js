/** Given two sorted arrays, return an array containing the values of both
   inputs in sorted order */
function merge(arr1, arr2) {
  let output = [];
  let arr1pointer = 0;
  let arr2pointer = 0;

  while (arr1pointer < arr1.length && arr2pointer < arr2.length) {
    if (arr1[arr1pointer] <= arr2[arr2pointer]) {
      output.push(arr1[arr1pointer]);
      arr1pointer++;
    } else {
      output.push(arr2[arr2pointer]);
      arr2pointer;
    }
  }
}

function mergeSort() {}

module.exports = { merge, mergeSort};