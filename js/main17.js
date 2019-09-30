console.log('main17 loaded!');

// Longest Subarray having sum of elements atmost ‘k’
// Given an array of integers, our goal is to find the length of largest subarray having sum of its elements atmost ‘k’ where k>0.
//
// Examples:
//
// Input : arr[] = {1, 2, 1, 0, 1, 1, 0},
//            k = 4
// Output : 5
// Explanation:
//  {1, 2, 1} => sum = 4, length = 3
//  {1, 2, 1, 0}, {2, 1, 0, 1} => sum = 4, length = 4
//  {1, 0, 1, 1, 0} =>5 sum = 3, length = 5

function maxLength(a, k) {
    // Write your code here
    let sum = 0;
    let count = 0;
    let maxCount = 0;

    for(let i = 0; i < a.length; i++){
      sum += a[i];
      if(sum <= k){
        count++;
      } else {
        sum = sum - a[i - count];
      }
      maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}

const testCase = [61,74,659,931,273,545,879,924,710,441,166,493,43,988,504,328,730,841,613,304,170,710,158,561,934,100,279,817,336,98,827,513,268,811,634,980,150,580,822,9,68,673,394,337,486,746,229,92,195,358,2,154,709,945,669,491,125,197,531,904,723,667,550]

console.log(maxLength([1, 2, 1, 0, 1, 1, 0], 4)); // 5

console.log(maxLength(testCase, 22337)); // 49
