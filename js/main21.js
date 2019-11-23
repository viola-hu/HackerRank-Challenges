console.log('main21 loaded!');
//
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


// ################# NOTE ####################
// Brute-force solution is not going to work here due to the given time constraint. That is the reason you will get the time out error.
//
// So you need to optimize your code which can be done with the help of prefix sum array.
//
// instead of adding k to all the elements within a range from a to b in an array, accumulate the difference array
//
// Whenever we add anything at any index into an array and apply prefix sum algorithm the same element will be added to every element till the end of the array.
//
// ex- n=5, m=1, a=2 b=5 k=5
//
//     i     0.....1.....2.....3.....4.....5.....6   //take array of size N+2 to avoid index out of bound
//   A[i]    0     0     0     0     0     0     0
// Add k=5 to at a=2
//
// A[a]=A[a]+k // start index from where k element should be added
//
//      i    0.....1.....2.....3.....4.....5.....6
//    A[i]   0     0     5     0     0     0     0
// now apply prefix sum algorithm
//
//      i    0.....1.....2.....3.....4.....5.....6
//   A[i]    0     0     5     5     5     5     5
// so you can see K=5 add to all the element till the end after applying prefix sum but we don't have to add k till the end. so to negate this effect we have to add -K also after b+1 index so that only from [a,b] range only will have K element addition effect.
//
// A[b+1]=A[b]-k // to remove the effect of previously added k element after bth index. that's why adding -k in the initial array along with +k.
//
//     i    0.....1.....2.....3.....4.....5.....6
//   A[i]   0     0     5     0     0     0    -5
// Now apply prefix sum Array
//
//     i    0.....1.....2.....3.....4.....5.....6
//   A[i]   0     0     5     5     5     5     0
// You can see now K=5 got added from a=2 to b=5 which was expected. Here we are only updating two indices for every query so complexity will be O(1).
//
// Now apply the same algorithm in the input
//
//          # 0.....1.....2.....3.....4.....5.....6    //taken array of size N+2 to avoid index out of bound
// 5 3      # 0     0     0     0     0     0     0
// 1 2 100  # 0    100    0   -100    0     0     0
// 2 5 100  # 0    100   100  -100    0     0   -100
// 3 4 100  # 0    100   100    0     0  -100   -100
// To calculate the max prefix sum, accumulate the difference array to 𝑁 while taking the maximum accumulated prefix.
//
// After performing all the operation now apply prefix sum Array
//
//     i      0.....1.....2.....3.....4.....5.....6
//   A[i]     0     100   200  200   200   100    0
// Now you can traverse this array to find max which is 200. traversing the array will take O(N) time and updating the two indices for each query will take O(1)* number of queries(m)
//
// overall complexity=O(N)+O(M) = O(N+M)
//
// it means = (10^7+10^5) which is less than 10^8 (per second)
//
// Note: If searching for video tutorial , you must check it out here for detailed explanation.


// prefix sum version
