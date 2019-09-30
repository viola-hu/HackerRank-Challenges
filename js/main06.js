console.log('main06 loaded!');
//
//
//
// Monica wants to buy a keyboard and a USB drive from her favorite electronics store. The store has several models of each. Monica wants to spend as much as possible for the  items, given her budget.
//
// Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the amount of money Monica will spend. If she doesn't have enough money to both a keyboard and a USB drive, print -1 instead. She will buy only the two required items.
//
// For example, suppose she has  to spend. Three types of keyboards cost . Two USB drives cost . She could purchase a , or a . She chooses the latter. She can't buy more than  items so she can't spend exactly .
//
// Function Description
//
// Complete the getMoneySpent function in the editor below. It should return the maximum total price for the two items within Monica's budget, or  if she cannot afford both items.
//
// getMoneySpent has the following parameter(s):
//
// keyboards: an array of integers representing keyboard prices
// drives: an array of integers representing drive prices
// b: the units of currency in Monica's budget
// Input Format
//
// The first line contains three space-separated integers , , and , her budget, the number of keyboard models and the number of USB drive models.
// The second line contains  space-separated integers , the prices of each keyboard model.
// The third line contains  space-separated integers , the prices of the USB drives.
//
// Constraints
//
// The price of each item is in the inclusive range .
// Output Format
//
// Print a single integer denoting the amount of money Monica will spend. If she doesn't have enough money to buy one keyboard and one USB drive, print -1 instead.
//
// Sample Input 0
//
// 10 2 3
// 3 1
// 5 2 8
// Sample Output 0
//
// 9
// Explanation 0
//
// She can buy the  keyboard and the  USB drive for a total cost of .
//
// Sample Input 1
//
// 5 1 1
// 4
// 5
// Sample Output 1
//
// -1
// Explanation 1
//
// There is no way to buy one keyboard and one USB drive because , so we print .

// // version 1 FAIL!!!
// function getMoneySpent(keyboards, drives, b) {
//     /*
//      * Write your code here.
//      */
//
//     keyboards = keyboards.sort((a , b)=> b - a);
//     console.log('keyboards:', keyboards);
//     drives = drives.sort((a , b) => b - a);
//     console.log('drives:', drives);
//     for (let i = 0; i < keyboards.length; i++){
//         for (let j = 0; j < drives.length; j++){
//           console.log('keyboards[i] + drives[j]', keyboards[i] + drives[j]);
//             if (keyboards[i] + drives[j] <= b) {
//                 return keyboards[i] + drives[j];
//             }
//         }
//     }
//     return -1;
// }
//
// console.log(getMoneySpent([3, 1], [5, 2, 8], 10));



// // version 2 FAIL!!!
// function getMoneySpent(keyboards, drives, b) {
//   /*
//    * Write your code here.
//    */
//
//   let concatPrices = keyboards.concat(drives).sort((a , b) => b - a);
//   console.log('concatPrices:', concatPrices);
//
//   for(let i = 0; i < concatPrices.length; i++){
//     if(keyboards.indexOf(concatPrices[i]) !== -1){
//       for(let j = 0; j < drives.length; j++){
//         if (concatPrices[i] + drives[j] <= b){
//           return concatPrices[i] + drives[j];
//         }
//       }
//     } else {
//       for(let j = 0; j < keyboards.length; j++){
//         if (concatPrices[i] + keyboards[j] <= b){
//           return concatPrices[i] + keyboards[j];
//         }
//       }
//     }
//   }
//
//   return -1;
// }
//
// console.log('result:', getMoneySpent([3, 1], [5, 2, 8], 10));


// version 3 SUCCESS!!!
function getMoneySpent(keyboards, drives, b){
  keyboards = keyboards.sort((a,b) => b-a);
  drives = drives.sort((a,b) => b-a);

  let totalPrices = [];

  for(let i = 0; i < keyboards.length; i++){
    for(let j = 0; j < drives.length; j++){
      if(keyboards[i] + drives[j] === b){
        return b;
      } else if(keyboards[i] + drives[j] < b){
        totalPrices.push(keyboards[i] + drives[j])
      }
    }
  }

  if (totalPrices.length){
    return totalPrices.sort((a,b)=> b - a)[0];
  } else {
    return -1;
  }
};

console.log('result:', getMoneySpent([3, 1], [5, 2, 8], 10));




// version 4 refactor!
// use arr.forEach(callback)
// However!!! forEach() here is not efficient as cannot stop the loop halfway!
// ********* Learning: **********
// There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

function getMoneySpent(keyboards, drives, b){

  let totalPrice = 0;

  keyboards.forEach(keyPrice => {
    drives.forEach(drivePrice => {
      // if(keyPrice + drivePrice === b){
      //   totalPrice = b;
      //   // loop won't stop here, it will continue the next loop round!
      // } else if(keyPrice + drivePrice < b && keyPrice + drivePrice > totalPrice){
      //   totalPrice = keyPrice + drivePrice;
      // }
      if(keyPrice + drivePrice <= b && keyPrice + drivePrice > totalPrice){
        totalPrice = keyPrice + drivePrice;
      }
    });
  });

  return totalPrice ? totalPrice : -1 ;
};

console.log('result:', getMoneySpent([5, 1], [5, 2, 8], 10));




// version 5,
// instead of forEach(), use for loop instead
// so can return whole function once totalPrice === budget

function getMoneySpent(keyboards, drives, b){
  let totalPrice = 0;

  for(let i = 0; i < keyboards.length; i++){
    for(let j = 0; j < drives.length; j++){
      if(keyboards[i] + drives[j] === b){
        return b;
      } else if(keyboards[i] + drives[j] < b && keyboards[i] + drives[j] > totalPrice){
        totalPrice = keyboards[i] + drives[j];
      }
    }
  }

  return totalPrice ? totalPrice : -1;
}


console.log('result:', getMoneySpent([5, 1], [5, 2, 8], 10));
console.log('result:', getMoneySpent([7, 11], [5, 6, 8], 10));
