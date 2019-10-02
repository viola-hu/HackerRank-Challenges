console.log('main18 loaded! Merge Sort');

// Merge Sort - is a Devide and Conquer algorithm.
// It devides input array in two halves,
// calls itself for the two halves and then merges the two sorted halves.
// Two functions are involved in this algorithm
// The merge() function is used for merging two halves.
// The Mergesort() function recursively calls itself to devide the array till size becomes one.

function mergeSort(arr) {
  // recursion base, when to stop
  if(arr.length = 1){
    return;
  }

  // function body, what to do
  const midIndex = Math.floor(arr.length / 2);

  const arrLeft = arr.slice(0, midIndex);
  const arrRight = arr.slice(midIndex);

  if(arrLeft.length > 1 || arrRight.length > 1){
    // if either of the new arrays is longer than one item, continue dividing it until including only single item
    mergeSort(arrLeft);
    mergeSort(arrRight);
  } else {
    // if the two new arrays both include one single item, then merging starts
    merge(arrLeft, arrRight);
  }
}; // mergeSort()

let sortedArr = [];

function merge(arrLeft, arrRight){
  let i = 0;
  let j = 0;

  while(i < arrLeft.length && j < arrRight.lenght) {
    if(arrLeft[i] <= arrRight[j]) {
      sortedArr.push(arrLeft[i]);
      i++;
    } else {
      sortedArr.push(arrRight[j]);
      j++;
    }
  }
}; //merge()
