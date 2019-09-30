console.log('loaded, main04!');
//
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// Version 1, 25 Aug 2019
console.log('########### Version 1 ###########');

function countDuplicates (input) {

  let inputArr = input.toLowerCase().split('').sort();
  // console.log('inputArr:', inputArr);

  let duplicates = 0;

  for(let i = 0; i < inputArr.length-1; i++){
    if((inputArr[i] === inputArr[i+1]) && (inputArr[i+1] !== inputArr[i+2])) {
      duplicates++;
      // console.log('duplicates:', duplicates);
      i++;
      // console.log('i:', i);
    }
  }

  return duplicates;
};

console.log(countDuplicates("abcde")); // 0 # no characters repeats more than once
console.log(countDuplicates("aabbcde")); // 2 # 'a' and 'b'
console.log(countDuplicates("aabBcde")); // 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
console.log(countDuplicates("indivisibility")); // 1 # 'i' occurs six times
console.log(countDuplicates("Indivisibilities")); // 2 # 'i' occurs seven times and 's' occurs twice
console.log(countDuplicates("aA11")); // 2 # 'a' and '1'
console.log(countDuplicates("ABBA")); // 2 # 'A' and 'B' each occur twice
console.log(countDuplicates("ABBADe123cdE34444a")); // 6 # a,b,d,e,3,4





// Version 2, 26 Aug 2019,
// Online solution: try Regex
console.log('########### Version 2 ###########');
function countDuplicates(text){
  return (text.toLowerCase().split('').sort().join('').match(/([a-z0-9])\1+/g) || []).length;
}

console.log(countDuplicates("abcde")); // 0 # no characters repeats more than once
console.log(countDuplicates("aabbcde")); // 2 # 'a' and 'b'
console.log(countDuplicates("aabBcde")); // 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
console.log(countDuplicates("indivisibility")); // 1 # 'i' occurs six times
console.log(countDuplicates("Indivisibilities")); // 2 # 'i' occurs seven times and 's' occurs twice
console.log(countDuplicates("aA11")); // 2 # 'a' and '1'
console.log(countDuplicates("ABBA")); // 2 # 'A' and 'B' each occur twice
console.log(countDuplicates("ABBADe123cdE34444a")); // 6 # a,b,d,e,3,4


// ************** LEARNING ****************
// 1) turn string to array, sort, then turn it back to string
"ABBADe123cdE34444a".toLowerCase().split('').sort().join('')
"12334444aaabbcddee"

// 2) using \1 it matches the same text that was matched by the first capturing group
// we can also use \2 (\3, \4, etc.) to identify the same text that was matched by the second (third, fourth, etc.) capturing group
// e.g.
// ([abc])([de])\2\1
// adda, ceec

'aaabbcde'.match(/([a-z0-9])\1+/g)
(2) ["aaa", "bb"]

// 3)
'abcde'.match(/([a-z0-9])\1+/g)
null
// as there's no duplicate, no same text that's matched by the first capturing group
// it returns 'null'
// thus, we need '|| []' to avoid null.length, which will cause error
// ***************************************


// Version 3,
// Online solution: try array.filter();
// as long as the current value has more than 1 index,
// also make sure you've come to the last instance of the duplicate value
console.log('########### Version 3 ###########');

function countDuplicates(input){
  // turn string to array
  let inputArr = input.toLowerCase().split('') // .sort(); // no need to sort

  let filteredArr = inputArr.filter((val, i, arr) => {
    // since indexOf() always return the first index of the matching value
    // 1) make sure the value has more than 1 index &&
    // 2) the current value is the last matching value of the array
    // when both 1) & 2) are true, put the current val into the filter return array!
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  });
  // console.log(filteredArr);

  return filteredArr.length;
};

console.log(countDuplicates("abcde")); // 0 # no characters repeats more than once
console.log(countDuplicates("aabbcde")); // 2 # 'a' and 'b'
console.log(countDuplicates("aabBcde")); // 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
console.log(countDuplicates("indivisibility")); // 1 # 'i' occurs six times
console.log(countDuplicates("Indivisibilities")); // 2 # 'i' occurs seven times and 's' occurs twice
console.log(countDuplicates("aA11")); // 2 # 'a' and '1'
console.log(countDuplicates("ABBA")); // 2 # 'A' and 'B' each occur twice
console.log(countDuplicates("ABBADe123cdE34444a")); // 6 # a,b,d,e,3,4




// ************** LEARNING ****************
['a', 'b', 'b', 'a'].indexOf('b')
1 // always return the first index of the value
['a', 'b', 'b', 'a'].indexOf('a')
0 // as above

['a', 'b', 'b', 'a'].lastIndexOf('b')
2 // return the last index of value in the array
['a', 'b', 'b', 'a'].lastIndexOf('a')
3 // as above
// ***************************************
