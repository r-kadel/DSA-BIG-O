// Determine the Big O for the following algorithm:
//  You are sitting in a room with 15 people. 
//  You want to find a playmate for your dog who is of 
//  the same breed. So you want to know if anyone out of the 15 
//  people have the same breed as your dog. You start with the first 
//  person and ask him if he has a golden retriever. He says no,
//   then you ask the next person, and the next, and the next 
//   until you find someone who has a golden or there is no one 
//   else to ask.

// 1 this is a linear time situation

//2 

// function isEven(value) {
//   if (value % 2 == 0) {
//       return true;
//   }
//   else {
//       return false;
//   }
// }

// this is 0(1) the input is irrelevant to the time

/// 3

// function areYouHere(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//       const el1 = arr1[i];
//       for (let j = 0; j < arr2.length; j++) {
//           const el2 = arr2[j];
//           if (el1 === el2) return true;
//       }
//   }
//   return false;
// }

//1 This is polynomial 0(n^2) because of the nested loop

///4 

// function doubleArrayValues(array) {
//   for (let i = 0; i < array.length; i++) {
//       array[i] *= 2;
//   }
//   return array;
// }

// Linear time - one operation per length of array

///5 

// function naiveSearch(array, item) {
//   for (let i = 0; i < array.length; i++) {
//       if (array[i] === item) {
//           return i;
//       }
//   }
// }

// Linear time 0(n) - length of array determines speed

///6 ////

// function createPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//       for(let j = i + 1; j < arr.length; j++) {
//           console.log(arr[i] + ", " +  arr[j] );
//       }
//   }
// }

/// polynomial time 0(n^2) due to nested loops

///7 ////

// function compute(num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {

//       if (i === 1) {
//           result.push(0);
//       }
//       else if (i == 2) {
//           result.push(1);
//       }
//       else {
//           result.push(result[i - 2] + result[i - 3]);
//       }
//   }
//   return result;
// }

// this function loops through numbers starting at 1 up to input
// it therefor is a linear O nation based on the size of num

///8 ////

// function efficientSearch(array, item) {
//   let minIndex = 0;
//   let maxIndex = array.length - 1;
//   let currentIndex;
//   let currentElement;

//   while (minIndex <= maxIndex) {
//       currentIndex = Math.floor((minIndex + maxIndex) / 2);
//       currentElement = array[currentIndex];

//       if (currentElement < item) {
//           minIndex = currentIndex + 1;
//       }
//       else if (currentElement > item) {
//           maxIndex = currentIndex - 1;
//       }
//       else {
//           return currentIndex;
//       }
//   }
//   return -1;
// }

// this is a logarithmic time complexity as it chops the 
// problem in half with each iteration

/// 9 //// 

// function findRandomElement(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// this is 0(1) because the length of array doesnt matter

/// 10 ///

// function isWhat(n) {
//   if (n < 2 || n % 1 != 0) {
//       return false;
//   }
//   for (let i = 2; i < n; ++i) {
//       if (n % i == 0) return false;
//   }
//   return true;
// }

// this algo makes sure n isnt less than 2 and it is an int
// then it loops from 2 through every int till n
// then it checks if the number is prime it looks like a
// its 0(n) as the time depends on size of n

//// 13 ////
//recursive questions

// all seem to 0(n) except anagram which is polynomial 0(n^2) 
// because the recursive function is called twice per iteration
