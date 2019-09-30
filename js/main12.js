console.log('main12 loaded!');

// ******************* learning *******************
// 1) ... Spread Syntax, not applicable in IE/Edge!
// function myFunction(v, w, x, y, z) {
// 	console.log('v', v);
// 	console.log('w', w);
// 	console.log('x', x);
// 	console.log('y', y);
// 	console.log('z', z);
//  }
// var args = [0, 1];
//
// myFunction(-1, ...args, 2, ...[3]); // ...args is spread syntax; while ...[3] is destructuring/ Rest parameters
// VM12911:2 v -1
// VM12911:3 w 0
// VM12911:4 x 1
// VM12911:5 y 2
// VM12911:6 z 3

// ########### compare with the above!!! ############
// 2) ...Rest parameters
function myFunction(v, w, ...z) {
	console.log('v', v);
	console.log('w', w);
	console.log('z', z);
 }
var args = [0, 1];
undefined
myFunction(-1, ...args, 2, ...[3]);
VM515402:2 v -1
VM515402:3 w 0
VM515402:4 z (3) [1, 2, 3]
// ###########################################

function myFunction(v, w, ...z) { // rest parameters
	console.log('v', v);
	console.log('w', w);
	console.log('z', z);
  z.push(4); // the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
  console.log('new z',z);
 }
var args = [0, 1];

myFunction(-1, ...args, 2, ...[3]); // ...args, spread syntax
VM523893:2 v -1
VM523893:3 w 0
VM523893:4 z (3) [1, 2, 3]
VM523893:6 new z (4) [1, 2, 3, 4]
// ###########################################
// rest parameters
function f(...args) {
  var normalArray = args;
console.log('normalArray', normalArray);
  var first = normalArray.shift(); // OK, gives the first argument , shift() returns the shifted item
console.log('first', first);
};

f(1,2,3);
VM525619:3 normalArray (3) [1, 2, 3]
VM525619:5 first 1

// ###########################################


// destructuring assignments
// [a,b,rest] = [10,20,30,40]
// (4) [10, 20, 30, 40]
// a
// 10
// b
// 20
// rest
// 30
// V.S.
// [a,b,...rest] = [10,20,30,40]
// (4) [10, 20, 30, 40]
// rest
// (2) [30, 40]



// test
// (3) [1970, 0, 1]
// console.log(test)
// VM13645:1 (3) [1970, 0, 1]
// undefined
// console.log(...test) //spread syntax
// VM13670:1 1970 0 1

// a = [1,2,3]
// (3) [1, 2, 3]
// b = [0, ...a, 4]
// (5) [0, 1, 2, 3, 4]

// a = [1,2,3]
// (3) [1, 2, 3]
// c = a.slice();
// (3) [1, 2, 3]
// c = [...a]
// (3) [1, 2, 3]


// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// arr1.concat(arr2)
// (6) [0, 1, 2, 3, 4, 5]
// arr1
// (3) [0, 1, 2]
// arr2
// (3) [3, 4, 5]
// newArr = [...arr1, ...arr2]
// (6) [0, 1, 2, 3, 4, 5]
// V.S.
// if there's no comma , in between ...arr1 and ...arr2
// newArr = [...arr1 ...arr2]
// VM66984:1 Uncaught SyntaxError: Unexpected token ...

// arr1
// (3) [0, 1, 2]
// arr2
// (3) [3, 4, 5]
// arr1=[...arr1, ...arr2]
// (6) [0, 1, 2, 3, 4, 5]
// arr1
// (6) [0, 1, 2, 3, 4, 5]
// arr2
// (3) [3, 4, 5]
