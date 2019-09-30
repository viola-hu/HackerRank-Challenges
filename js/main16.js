console.log('LOADED!');
//
// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array.
//
// For example, the length of your array of zeros . Your list of queries is as follows:
//
//     a b k
//     1 5 3
//     4 8 7
//     6 9 1
// Add the values of  between the indices  and  inclusive:
//
// index->	 1 2 3  4  5 6 7 8 9 10
// 	[0,0,0, 0, 0,0,0,0,0, 0]
// 	[3,3,3, 3, 3,0,0,0,0, 0]
// 	[3,3,3,10,10,7,7,7,0, 0]
// 	[3,3,3,10,10,8,8,8,1, 0]
// The largest value is  after all operations are performed.
//
// Function Description
//
// Complete the function arrayManipulation in the editor below. It must return an integer, the maximum value in the resulting array.
//
// arrayManipulation has the following parameters:
//
// n - the number of elements in your array
// queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.
// Input Format
//
// The first line contains two space-separated integers  and , the size of the array and the number of operations.
// Each of the next  lines contains three space-separated integers ,  and , the left index, right index and summand.
//
// Constraints
//
// Output Format
//
// Return the integer maximum value in the finished array.
//
// Sample Input
//
// 5 3
// 1 2 100
// 2 5 100
// 3 4 100
// Sample Output
//
// 200
// Explanation
//
// After the first update list will be 100 100 0 0 0.
// After the second update list will be 100 200 100 100 100.
// After the third update list will be 100 200 200 200 100.
// The required answer will be .


// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    // version 2, O(m+n); more efficient (m: number of nested arrays)

    // create a new array of zeros, as a,b counts from 1 instead of 0
    // just to keep it simple, make index 0 always === 0, and actual index from 1;
    let arr = new Array(n + 2).fill(0);

    // using for loop through queries, O(m), and for each query,
    // only change the index (a) + k, and index (b + 1) - k, O(1)
    // to keep index (b + 1) not affected by prefix sum algorithm later
    for(let i = 0; i < queries.length; i++){
        const a = queries[i][0];
        const b = queries[i][1];
        const k = queries[i][2];
        arr[a] += k;
        arr[b + 1] -= k;
    }

    console.log('changed arr:', arr);

    let max = 0;
    for(let j = 1; j < arr.length; j++){
      // each item = previous item + current item, it's like sum
      // if each item > max, then replace the max;
      // at the end, return max
      arr[j] = arr[j - 1] + arr[j];
      arr[j] > max ? max = arr[j] : max;
    }

    return max;

}

console.log(arrayManipulation(5, [[1, 2, 100],[2, 5, 100],[3, 4, 100]])); // 200
