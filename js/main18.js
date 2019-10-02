console.log('main18 loaded! Merge Sort');

// Merge Sort - is a Devide and Conquer algorithm.
// It devides input array in two halves,
// calls itself for the two halves and then merges the two sorted halves.
// Two functions are involved in this algorithm
// The merge() function is used for merging two halves.
// The Mergesort() function recursively calls itself to devide the array till size becomes one.


function mergeSort(arr) {
  let sortedArr = [];

  // recursion base, when to stop
  if(arr.length === 1){
    return arr;
  }

  // function body, what to do
  const midIndex = Math.floor(arr.length / 2);

  const arrLeft = arr.slice(0, midIndex);
  const arrRight = arr.slice(midIndex);

  // DEBUG:
  // if either of the new arrays is longer than one item,
  // continue dividing it until including only single item
  if(arrLeft.length > 1 || arrRight.length > 1) {
    mergeSort(arrLeft);
    mergeSort(arrRight);
  } else {
    // After dividing the array into smallest units, merging starts
    // based on comparision of elements
    merge(arrLeft, arrRight);
  }
}; // mergeSort()


function merge(arrLeft, arrRight){
  console.log('sortedArr 01', sortedArr);
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
  console.log('sortedArr 02',sortedArr);
}; //merge()

mergeSort([4,2,3,1]);
console.log('sortedArr 03', sortedArr);
