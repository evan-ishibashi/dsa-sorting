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
      arr2pointer++;
    }
  }
  if (arr1pointer === arr1.length) {
    for (let i = arr2pointer; i < arr2.length; i++) {
      output.push(arr2[i]);
    }
  } else {
    for (let i = arr1pointer; i < arr1.length; i++) {
      output.push(arr1[i]);
    }
  }
  return output;
}

function mergeSort(arr) {

  if (arr.length <= 1) return arr;

  return merge(mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
    mergeSort(arr.slice(Math.floor(arr.length / 2)))
  );


}

module.exports = { merge, mergeSort };