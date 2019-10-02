console.log('main18 loaded! Merge Sort');

// Merge Sort - is a Devide and Conquer algorithm.
// It devides input array in two halves,
// calls itself for the two halves and then merges the two sorted halves.
// Two functions are involved in this algorithm
// The merge() function is used for merging two halves.
// The Mergesort() function recursively calls itself to devide the array till size becomes one.


// ############## version 1, failed ##############
let sortedArr = [];

function mergeSort(arr) {

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

// mergeSort([4,2,3,1]);
// console.log('sortedArr 03', sortedArr);

// ##########################################





// ############## version 2 ##############

// Merge Sort Implementation (Recursion)

function mergeSort02 (unsortedArray) {
  // recursion base, when to stop
  // No need to sort the array if the array only has one element or empty
  if(unsortedArray.length <= 1){
    return unsortedArray;
  }

  // if the array.length > 1, find the midIndex to split the array into left and right two parts
  const midIndex = Math.floor(unsortedArray.length / 2);

  // split the array to left and right
  const arrLeft = unsortedArray.slice(0, midIndex);
  const arrRight = unsortedArray.slice(midIndex);


  // make sure arrLeft and arrRight are both split down to include only one item, and then do a merge()
  // if not, then continue to use mergeSort02 to split the arrLeft and arrRight respectively until each including only one single unit item
   // at the end, every split step will need to be merged by calling merge() later, bubble up!
  return merge( mergeSort02(arrLeft), mergeSort02(arrRight) );
}; // mergeSort02()


// once all the arrays have been split down to only-one-item arrays, the merge begins
function merge( arrLeft, arrRight) {
  let sortedArr = [];

  // using while loop, so need to define index from 0 outside the while loop
  let leftIndex = 0, rightIndex = 0;

  // concatenate values into the sortedArr in ascending/descending order
  // this merge could happen when the arrLeft and arrRight have already gone through one round of merge(),
  // thus, the already sorted arrLeft and arrRight could include more than 1 items
  while(leftIndex < arrLeft.length && rightIndex < arrRight.length) {
    if(arrLeft[leftIndex] <= arrRight[rightIndex]) {
      sortedArr.push(arrLeft[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(arrRight[rightIndex]);
      rightIndex++;
    }
  }

  // at the end, there will always be at least one last item/biggest item left, not yet pushed into the sortedArr,
  // sometimes, e.g. when arrLeft = [1,2], while arrRight = [3,4], then leftIndex should be increased to 2, while rightIndex is still 0!!!
  // thus, need to concat the remaining part of either the arrLeft or the arrRight to the already pushed sortedArr!
  // we use slice and then concat, if it's an empty array [], concat will still be fine!
  return sortedArr
        .concat(arrLeft.slice(leftIndex))
        .concat(arrRight.slice(rightIndex));
}; // merge()

console.log(mergeSort02([10, -1, 2, 5, 0, 6, 4, -5]));
console.log(mergeSort02([2,4,5,1,3]));
