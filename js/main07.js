console.log('main07 loaded!');
//
// Karl has an array of integers. He wants to reduce the array until all remaining elements are equal. Determine the minimum number of elements to delete to reach his goal.
//
// For example, if his array is , we see that he can delete the  elements  and  leaving . He could also delete both twos and either the  or the , but that would take  deletions. The minimum number of deletions is .
//
// Function Description
//
// Complete the equalizeArray function in the editor below. It must return an integer that denotes the minimum number of deletions required.
//
// equalizeArray has the following parameter(s):
//
// arr: an array of integers
// Input Format
//
// The first line contains an integer , the number of elements in .
// The next line contains  space-separated integers .
//
// Constraints
//
// Output Format
//
// Print a single integer that denotes the minimum number of elements Karl must delete for all elements in the array to be equal.
//
// Sample Input
//
// 5
// 3 3 2 1 3
// Sample Output
//
// 2
// Explanation
//
// Array . If we delete  and , all of the elements in the resulting array, , will be equal. Deleting these  elements is minimal. Our only other options would be to delete  elements to get an array of either  or .


// // version 1, FAIL
// function equalizeArray(arr) {
//     let duplicatesArray = arr.sort().join('').match(/(\d\d?\d?)\1+/g);
//     console.log('duplicatesArray:', duplicatesArray);
//
//     if (duplicatesArray){
//       let countDuplicates = 0;
//       duplicatesArray.forEach(item => {
//         if (item.length > countDuplicates) {
//           countDuplicates = item.length;
//           console.log('countDuplicates:', countDuplicates);
//         }
//       });
//
//       return arr.length - countDuplicates;
//
//     } else {
//       return arr.length - 1;
//     }
//
// }
//



// version 2, SUCCESS!
function equalizeArray(arr){
  let sortedArray = arr.sort();
  // console.log('sortedArray', sortedArray);
  let tempArray = [];
  let countDuplicates = 0;

  sortedArray.forEach(num => {
    if(tempArray.includes(num)){
      tempArray.push(num);
      // console.log('tempArray', tempArray);
      tempArray.length > countDuplicates ?
      countDuplicates = tempArray.length
      :
      countDuplicates;
      // console.log('countDuplicates', countDuplicates);
    } else {
      tempArray = [num];
      // console.log('tempArray', tempArray);
    }
  })

  return countDuplicates? arr.length - countDuplicates : arr.length - 1;
}



// version 3, try obj
// Complete the equalizeArray function below.
function equalizeArray(arr) {
    // version 5
    // try use object!
    let obj = {};
    for (let i = 0; i < arr.length; i++){
        // if arr[i] is not an existing key in the obj
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
        // if arr[i] is an already existing key in the obj
        // then it has duplicates, add counts
            obj[arr[i]]++;
        }
    }

    // get an array of all values of obj, which are counts of each num in original arr
    // if there's no duplicates, then the first item of the array is 1
    let countDuplicates = Object.values(obj).sort((a, b) => b - a);

    // the first item of the array is the biggest duplicate counts
    // totally number - biggest duplicate counts = minimal deleted numbers
    return arr.length - countDuplicates[0];
}

let testArr02 = ('56 70 70 56 56 56 56 70 56 56 70 70 70 70 70 70 70 56 56 70 70 56 56 56 70 70 56 70 70 70 56 56 70 56').split(' ');
console.log(equalizeArray(testArr02)); // 16

let testArr = ('37 32 97 35 76 62').split(' ');
console.log(equalizeArray(testArr)); // 5

let testArr03 = ('32 32 37 72 72 96 12 32 67 37 57 18 57 78 29 34 67 16 34 78 72 33 96 16 37 32 87 43 29 16 48 49 29 37 32').split(' ');
console.log(equalizeArray(testArr03)); // 30
