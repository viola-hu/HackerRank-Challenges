console.log('main15 loaded!');
//
// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
//
// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?
//
// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.
//
// For example, if  and , we can delete  from string  and  from string  so that both remaining strings are and  which are anagrams.
//
// Function Description
//
// Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.
//
// makeAnagram has the following parameter(s):
//
// a: a string
// b: a string
// Input Format
//
// The first line contains a single string, .
// The second line contains a single string, .
//
// Constraints
//
// The strings  and  consist of lowercase English alphabetic letters ascii[a-z].
// Output Format
//
// Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.
//
// Sample Input
//
// cde
// abc
// Sample Output
//
// 4
// Explanation
//
// We delete the following characters from our two strings to turn them into anagrams of each other:
//
// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// We must delete  characters to make both strings anagrams, so we print  on a new line.

// // version 1, success
// function makeAnagram(a, b) {
//     const arrA = a.split('');
//     const arrB = b.split('');
//     console.log('arrA:', arrA);
//     console.log('arrB:', arrB);
//     // hashmap
//     function arrToObj(array){
//         return array.reduce((acc,cur)=>{
//             if(cur in acc){
//                 acc[cur]++;
//             } else {
//                 acc[cur] = 1;
//             }
//             return acc;
//         },{});
//     }
//
//     const objA = arrToObj(arrA);
//     const objB = arrToObj(arrB);
//     console.log('objA:', objA);
//     console.log('objB:', objB);
//
//     // for in loop
//     let countDelete = 0;
//
//     // loop through objA first
//     for(let key in objA){
//         if (key in objB){
//             countDelete += Math.abs(objA[key] - objB[key]);
//         } else {
//             countDelete += objA[key];
//         }
//     }
//     console.log('countDelete after loop through ojbA:', countDelete);
//
//     // loop through objB then
//     for(let key in objB){
//         if (! (key in objA)){
//             countDelete += objB[key];
//         }
//     }
//
//     return countDelete;
// }


// version 2, success!
function makeAnagram(a, b) {
    // version 2

    function strToArr( str ){
        // create a reference array with 26 items - standing for 26 alphabets
        let arr = new Array(26);
        arr = arr.fill(0);

        // ###### learning ##########
        // 'a'.charCodeAt(0)
        // 97
        // 'ba'.charCodeAt(0)
        // 98
        // 'ba'.charCodeAt(1)
        // 97
        // ##########################

        // loop through the provided string, each alphabet has its index out of 26
        // and the value at that index inside arr stands for the count of that alphabet
        // e.g. inside arr, a's index is 0, and the value at index 0 is the count of a
        for(let i = 0; i < str.length; i++){
            let index = str[i].charCodeAt(0) - 97;
            arr[index]++;
        }

        // return is an array of 26 items, each item stands for the count of one alphabet
        return arr;
    };

    // both arrayA and arrayB are an array of 26 items.
    let arrayA = strToArr(a);
    let arrayB = strToArr(b);
    console.log('arrayA', arrayA);
    console.log('arrayB', arrayB);

    let countDelete = 0;
    for(let j = 0; j < 26; j++){
        countDelete += Math.abs(arrayA[j] - arrayB[j]);
        // console.log('countDelete inside loop is:', countDelete);

    }
    // console.log('countDelete is:', countDelete);

    return countDelete;
}

console.log(makeAnagram('cde','abc')); // 4
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')); // 30
