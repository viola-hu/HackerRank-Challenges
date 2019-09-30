console.log('main03 loaded! Intercom Code Test!!!');

// Code test #1:
// Anagram or not: write a function that takes in two parameters, and return true/false;

// ################# FAIL ##################
// // version 1, during test, 5min
// function checkIfAnagram(wordA , wordB){
//
//   if(wordA.length !== wordB.length){
//     return false;
//   }
//
//   wordAArray = wordA.split('');
//   wordBArray = wordB.split('');
//
//   for (let i = 0; i < wordAArray.length; i++) {
//     if (!(wordBArray.includes(wordAArray[i]))) {
//       return false;
//     }
//   }
//
//   return true;
// };
//
// console.log(checkIfAnagram('apple', 'apple')); // true
// console.log(checkIfAnagram('abple', 'apple')); // false
// console.log(checkIfAnagram('ap','apple')); // false
// console.log(checkIfAnagram('triangle','integral')); // true


// ################# FAIL ##################
// // version 2, refactor
// // just string will do the job, no need to convert it to array!
// function checkIfAnagram(wordA, wordB){
//   if(wordA.length !== wordB.length){
//     return false;
//   }
//
//   for(let i = 0; i < wordA.length; i++){
//     if(!(wordB.includes(wordA[i]))) {
//       return false;
//     }
//   }
//
//   return true;
// };
//
// console.log(checkIfAnagram('apple', 'apple')); // true
// console.log(checkIfAnagram('abple', 'apple')); // false
// console.log(checkIfAnagram('alple', 'apple')); // false
// console.log(checkIfAnagram('ap','apple')); // false
// console.log(checkIfAnagram('triangle','integral')); // true
//
// // *************FOUND BUG*******************
// console.log(checkIfAnagram('alple', 'apple')); // false
// // should return false, but the above code returns true!!!


// ################# SUCCESS ##################
// version 3, debug!
// need to be more accurate!

function checkIfAnagram(wordA, wordB){
  // if the length of two words are not the same, false!
  if(wordA.length !== wordB.length){
    return false;
  }

  // convert string to array, accurate compare!
  let wordAArray = wordA.split('');
  let wordBArray = wordB.split('');

  // sort each array, and then compare each item at the same index
  // if anagram, each item at the same index of the two arrays should be the same!
  wordAArray = wordAArray.sort();
  // console.log('wordAArray', wordAArray);
  wordBArray = wordBArray.sort();
  // console.log('wordBArray', wordBArray);

  // use loop to check
  for(let i = 0; i < wordAArray.length; i++){
    if(wordAArray[i] !== wordBArray[i]){
      return false;
    }
  }

  return true;
}

console.log(checkIfAnagram('apple', 'apple')); // true
console.log(checkIfAnagram('triangle','integral')); // true
console.log(checkIfAnagram('alple', 'aplle')); // true
console.log(checkIfAnagram('alple', 'apple')); // false
console.log(checkIfAnagram('abple', 'apple')); // false
console.log(checkIfAnagram('ap','apple')); // false










// Code test #2 : correct below Ruby code!

// ###
// Problem Definition: This Ruby method should ensure that the word "Twitter" is spelt correctly.
// ###
//
// def fix_spelling(name)
//   if name = "twittr"
//     name = "twitter"
//   else
//     fix_spelling(name)
//   end
//   return "name"
// end
