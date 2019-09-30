console.log('loaded');

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Example:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// version 1, 21 Aug 2019, Time: 874ms
function order(words){
  // ...
  if (words.length === 0){
    return words;;
  }

  let wordsArray = words.split(' '); // an array of split words by space

  let sortedArray = [];

  for (let i = 1; i <= wordsArray.length; i++) {
    wordsArray.forEach(word => {
      if(word.includes(i)){
        sortedArray.push(word)
      }
    });
  }

  return sortedArray.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));


// version 2, 22 Aug 2019
// try with Regex!
function order(words){

  // 1, split string to array of words
  const wordsArray = words.split(' ');

  // 2, sort array item using compare function
  // array.sort is destructive method, changing the original array!

  wordsArray.sort((a, b) => {
    // // ********* Learning *********
    // // 1) a , b are current word string and the next word string in the array
    // // 2) a - b, ascending order; b - a, descending order, according to array.sort()
    // // 3) string.match(regex) returns an array！as could be multiple matches
    // // e.g.
    // // 'abd12'.match(/\d/g)
    // // (2) ["1", "2"]
    // // but in this case, number can only be from 1 to 9, and only be one number in a word string
    // return parseInt(a.match(/\d/)[0]) - parseInt(b.match(/\d/)[0]);

    // ********* Learning *********
    // However, see below:
    // '1' - '2'
    // -1
    // ['1'] - ['2']
    // -1
    // no need to use do 'arr[0]' and 'parseInt'!
    return a.match(/\d/) - b.match(/\d/);
  });

  return wordsArray.join(' ');

}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));


// Online Solution 01
function order(words){

  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));


// Online Solution 02
function order(words){
  return words && words.split(' ')
    .map(word => word.match(/\d/) + word)
    // TEST:
    // ['1']+'apple'
    // "1apple"
    .sort()
    .map(word => word.slice(1))
    // TEST:
    // 'abcd'.slice(1)
    // "bcd"
    .join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
