console.log('main02 loaded!');

//
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//
// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
//
// Function Description
//
// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
//
// sockMerchant has the following parameter(s):
//
// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format
//
// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.
//
// Constraints
//
//  where
// Output Format
//
// Return the total number of matching pairs of socks that John can sell.
//
// Sample Input
//
// 9
// 10 20 20 10 10 30 50 10 20
// Sample Output
//
// 3


// **************** LEARNING: Recursion ***********************
// We can break down the process of a recursive function into three steps:
//
// Base case: When the process can stop.
// Action: Put that function to work!
// Recursive case: The function is called again but with the assurance that progress is being made toward the base case.
// Let’s break each part down by looking at our recursive countdown function if we started with 3 as the argument:
//
// function countDown(num){
//   if(num < 0){
//     return;
//   }
//   console.log(num);
//   return countDown(num - 1);
// }
//
// countDown(3);
// **********************************************************


// version 1, 23 Aug 2019
// try recursion

let sockPairs = 0;

function countSockPairs(arr) {
  // console.log('new socksArray to run the new round', arr);
  if(arr.length <= 1){
    return sockPairs;
  }

  let socksArray = arr.sort();
  // console.log('sorted socksArray', socksArray);

  if(socksArray[0] === socksArray[1]){
    sockPairs += 1;
    // console.log('sockPairs after increment', sockPairs);
    socksArray = socksArray.slice(2);
    // console.log('socksArray after slice - even', socksArray);
    return countSockPairs(socksArray);
  } else {
    socksArray = socksArray.slice(1);
    // console.log('socksArray after slice - odd', socksArray);
    return countSockPairs(socksArray);
  }
};

console.log('number of sock pairs', countSockPairs([10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log('number of sock pairs', countSockPairs([1,2,1,2,1,3,2])); // 2
console.log('number of sock pairs', countSockPairs([13,21,19,5,12,9,21])); // 1


// version 2, 23 Aug 2019
// try an easier way!

function countSockPairs(arr){
  let sockPairs = 0;

  let socksArray = arr.sort();

  for(let i = 0; i < socksArray.length; i++){
    // 1) if the current item === the following item, add one pair
    // i incremented by 1, so that in the next round of loop,
    // skip the following item, but start from the next next item
    if(socksArray[i] === socksArray[i+1]){
      sockPairs += 1;
      i++;
    }
    // 2) if the current item !== the following item,
    // do nothing, let loop run the next round, go through same check!
  }

  return sockPairs;
}

console.log('number of sock pairs', countSockPairs([10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log('number of sock pairs', countSockPairs([1,2,1,2,1,3,2])); // 2
console.log('number of sock pairs', countSockPairs([12,21,19,5,12,9,21])); // 2
