console.log('main19 loaded!');

// Create a list, , of  empty sequences, where each sequence is indexed from  to . The elements within each of the  sequences also use -indexing.
// Create an integer, , and initialize it to .
// The  types of queries that can be performed on your list of sequences () are described below:
// Query: 1 x y
// Find the sequence, , at index  in .
// Append integer  to sequence .
// Query: 2 x y
// Find the sequence, , at index  in .
// Find the value of element  in  (where  is the size of ) and assign it to .
// Print the new value of  on a new line
// Task
// Given , , and  queries, execute each query.
//
// Note:  is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia.
//
// Input Format
//
// The first line contains two space-separated integers,  (the number of sequences) and  (the number of queries), respectively.
// Each of the  subsequent lines contains a query in the format defined above.
//
// Constraints
//
// It is guaranteed that query type  will never query an empty sequence or index.
// Output Format
//
// For each type  query, print the updated value of  on a new line.
//
// Sample Input
//
// 2 5
// 1 0 5
// 1 1 7
// 1 0 3
// 2 1 0
// 2 1 1
// Sample Output
//
// 7
// 3
// Explanation
//
// Initial Values:
//
//
//  = [ ]
//  = [ ]
//
// Query 0: Append  to sequence .
//
//  = [5]
//  = [ ]
//
// Query 1: Append  to sequence .
//  = [5]
//  = [7]
//
// Query 2: Append  to sequence .
//
//  = [5, 3]
//  = [7]
//
// Query 3: Assign the value at index  of sequence  to , print .
//
//  = [5, 3]
//  = [7]
//
// 7
// Query 4: Assign the value at index  of sequence  to , print .
//
//  = [5, 3]
//  = [7]
//
// 3


/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

// // Version 1
// function dynamicArray(n, queries) {
//   // Write your code here
//
//   // define lastAnswer
//   let lastAnswer = 0;
//
//   // create 2D array of seqList with Nx empty arrays
//   let seqList =[];
//   for(let i = 0; i < n; i++){
//     seqList.push([]);
//   }
//
//   // loop through queries 2D array
//   for (let j = 0; j < queries.length; j++){
//     let query = queries[j];
//     if (query[0] === 1){
//       const index = (query[1] ^ lastAnswer) % n;
//       seqList[index].push(query[2]);
//     }
//
//     if (query[0] === 2){
//       const index = (query[1] ^ lastAnswer) % n;
//       const seq = seqList[index];
//       const size = seq.length;
//       const indexInSeq = query[2] % size;
//       lastAnswer = seq[indexInSeq];
//       console.log(lastAnswer);
//     }
//   }
// }

// Version 2
function dynamicArray(n, queries) {
    // Write your code here

    let result = [];

    // define lastAnswer
    let lastAnswer = 0;

    // create 2D array of seqList with Nx empty arrays
    let seqList =[];
    for(let i = 0; i < n; i++){
        seqList.push([]);
    }

    // loop through queries 2D array
    for (let j = 0; j < queries.length; j++){
        let query = queries[j];
        if (query[0] === 1){
            const index = (query[1] ^ lastAnswer) % n;
            seqList[index].push(query[2]);
        }

        if (query[0] === 2){
            const index = (query[1] ^ lastAnswer) % n;
            const seq = seqList[index];
            const size = seq.length;
            const indexInSeq = query[2] % size;
            lastAnswer = seq[indexInSeq];
            result.push(lastAnswer);
        }
    }

    return result; // an array
}


console.log(dynamicArray(2,[[1,0,5], [1,1,7], [1,0,3], [2,1,0],[2,1,1]]).join('\n')); //array.join('\n') -> join each array item with a new line!
