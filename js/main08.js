console.log('main08 loaded!');


/*
Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)

(Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)

Since the answer may be large, return the answer modulo 10^9 + 7.



Example 1:

Input: n = 5
Output: 12
Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.
Example 2:

Input: n = 100
Output: 682289015


Constraints:

1 <= n <= 100
*/


// ########### Version 1 ###########

var numPrimeArrangements = function(n) {
  //      within 100, 25 Prime numbers
  //      let primeArray = [2，3，5，7，11，13，17，19，23，29，31，37，41，43，47，53，59，61，67，71，73，79，83，89，97];
    function isPrimeNumber(num){
        for(let i = 2; i < num/2+1; i++){
            if(num%i === 0){
                return false;
            }
        }
        return true;
    }


    function factorial(num){
        if(num - 1 <= 0){
            return 1;
        }
        return num * factorial(num - 1);
    }


    let primeArray = [];
    for(let j = 2; j <= n; j++){
        if(isPrimeNumber(j)){
            primeArray.push(j);
        }
    }
    console.log('primeArray', primeArray);

    // let primeArrayArrangements = 1;
    // for(let k = 2; k <= primeArray.length; k++){
    //   console.log('k', k);
    //   primeArrayArrangements = primeArrayArrangements * k;
    //   console.log('primeArrayArrangements', primeArrayArrangements);
    // }
    // console.log('total primeArrayArrangements', primeArrayArrangements);
    //
    // let nonPrimeArrayArrangements = 1;
    // for(let l = 2; l <= n - primeArray.length; l++){
    //   nonPrimeArrayArrangements = nonPrimeArrayArrangements * l;
    // }
    // console.log('nonPrimeArrayArrangements', nonPrimeArrayArrangements);
    //
    // return primeArrayArrangements * nonPrimeArrayArrangements;


    return factorial(primeArray.length) * factorial(n - primeArray.length) % (10**9 + 7);
};

// console.log(numPrimeArrangements(3)); // 2
// console.log(numPrimeArrangements(5)); // 12
console.log(numPrimeArrangements(100)); // 682289015
