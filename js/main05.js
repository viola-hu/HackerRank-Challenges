console.log('main05 loaded!');


// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:
//
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
//
// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.
//
// Function Description
//
// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.
//
// countingValleys has the following parameter(s):
//
// n: the number of steps Gary takes
// s: a string describing his path
// Input Format
//
// The first line contains an integer , the number of steps in Gary's hike.
// The second line contains a single string , of  characters that describe his path.
//
// Constraints
//
// Output Format
//
// Print a single integer that denotes the number of valleys Gary walked through during his hike.
//
// Sample Input
//
// 8
// UDDDUDUU
// Sample Output
//
// 1
// Explanation
//
// If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:
//
// _/\      _
//    \    /
//     \/\/
// He enters and leaves one valley.


// version 1
// Complete the countingValleys function below.
function countingValleys(n, s) {
  let noteArray = s.split('');
  let countU = 0;
  let countD = 0;
  let valleyOrMount = [];
  let countValley = 0;
  for (let i = 0; i < n; i++){
    // count how many Us and Ds
    if (noteArray[i] === 'U') {
      countU++;
    } else {
      countD++;
    }
    // meanwhile, add to a new array to judge
    // whether it's a mountain or valley by the first index step!
    valleyOrMount.push(noteArray[i]);

    // when count Us and Ds are the same, back to sea level
    // also if the valleyOrMount array starts from 'D'
    // that's a valley
    // otherwise, it's a mountain
    if (countU === countD) {
      if (valleyOrMount[0] === 'D') {
        countValley++;
      }
      // no matter if it's a valley or mountain,
      // once gets back to sea level, reset valleyOrMount array
      valleyOrMount = [];
    }
  }

  return countValley;
}

console.log('############ version 1 ###########');
console.log(countingValleys(8, 'UDDDUDUU')); // 1
console.log(countingValleys(10, 'UDUUUDUDDD')); // 0
console.log(countingValleys(100,'UDUDDUUUDUDUDUUDUUDDDDDUDUDDDDUUDDUDDUUUUDUUDUDDDDUDUDUUUDDDUUUDUDDUUDDDUUDDUDDDUDUUDUUDUUDUDDDUUUUU')); // 6



// version 2, refactor v1
function countingValleys(n, s) {
  let noteArray = s.split('');
  let countU = 0;
  let countD = 0;
  let countValley = 0;
  for (let i = 0; i < n; i++){
    // count how many Us and Ds
    if (noteArray[i] === 'U') {
      countU++;
    } else {
      countD++;
    }

    // when 1) count Us and Ds are the same, back to sea level
    // also 2) if it is UP as the last step to sea level
    // that's a valley; otherwise, it's a mountain
    if (countU === countD) {
      if (noteArray[i] === 'U') {
        countValley++;
      }
    }
  }

  return countValley;
}

console.log('############ version 2, refactor v1 ###########');
console.log(countingValleys(8, 'UDDDUDUU')); // 1
console.log(countingValleys(10, 'UDUUUDUDDD')); // 0
console.log(countingValleys(100,'UDUDDUUUDUDUDUUDUUDDDDDUDUDDDDUUDDUDDUUUUDUUDUDDDDUDUDUUUDDDUUUDUDDUUDDDUUDDUDDDUDUUDUUDUUDUDDDUUUUU')); // 6





// version 3
// Complete the countingValleys function below.
function countingValleys(n, s) {
  const hickNote = s.split('');
  let seaLv = 0;
  let countValley = 0;
  for (let i = 0; i < n; i++){
    if (hickNote[i] === 'U') {
      seaLv++;
    } else {
      seaLv--;
      // the smallest step of a valley is (seaLv === -1) && it's a down - "D"
      // at this timing, count one valley! PERFECT! ignore other steps!
      // if it's an up - "U" && seaLv === -1,
      // then already inside the valley going towards sea level
      // Also, at the end, Gary will go up to sealevel anyway,
      // thus, no need to quite worry about the later steps / if 'D's === 'U's
      if (seaLv === -1) {
        countValley++;
      }
    }
  }
  return countValley;
}

console.log('############ version 3 ###########');
console.log(countingValleys(8, 'UDDDUDUU')); // 1
console.log(countingValleys(10, 'UDUUUDUDDD')); // 0
console.log(countingValleys(100,'UDUDDUUUDUDUDUUDUUDDDDDUDUDDDDUUDDUDDUUUUDUUDUDDDDUDUDUUUDDDUUUDUDDUUDDDUUDDUDDDUDUUDUUDUUDUDDDUUUUU')); // 6
