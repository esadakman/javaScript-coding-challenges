// ! Quetion 1____________________________________________
// You have a two-dimensional list in the following format:
// Each sub-list contains two items, and each item in the sub-lists is an integer.

// Write a function process_data()/processData() that processes each sub-list like so:

data = [
  [2, 5],
  [3, 4],
  [8, 7],
];

// [2, 5] --> 2 - 5 --> -3
// [3, 4] --> 3 - 4 --> -1
// [8, 7] --> 8 - 7 --> 1
// and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

let multi = 1;
let empty_list = [];

for (var x of data) {
  // ! multi *= x[0]-x[1];
  let fat = x[0] - x[1];
  empty_list.push(fat);
}
for (let y of empty_list) {
  multi *= y;
}
console.log(multi);

// ! Quetion 2____________________________________________

// Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

// Recall that the median of an even-numbered list is the average of the two middle numbers.

// For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out: 2, 1.5, 2, 3.5, 2, 2, 2

let median = (arr) => {
  newArr = [];
  newArr2 = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr = newArr.sort((a, b) => (a > b ? 1 : -1));
    let middle = Math.floor(newArr.length / 2);
    if (newArr.length % 2 == 0) {
      newArr2.push((newArr[middle - 1] + newArr[middle]) / 2);
    } else {
      newArr2.push(newArr[middle]);
    }
  }
  return newArr2;
};

console.log(median([2, 1, 5, 7, 2, 0, 5])); // [ 2,1.5,2,3.5,2,2,2]

// ! Quetion 3____________________________________________
// ? This is an interview question asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

const uber = (arr) => {
  let newArr = [];
  let multi = arr.reduce((x, y) => x * y);
  for (i = 0; i < arr.length; i++) {
    newArr.push(multi / arr[i]);
  }
  return newArr;
};

console.log(uber([10, 5, 9])); // [45, 90, 50]

// ! Quetion 4____________________________________________
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters
// is an isogram. Assume the empty string is an isogram. Ignore letter case.

const isogram = (str) => {
  let strArr = str.toLowerCase();
  strArr = strArr.split("");
  let unique = strArr.filter((x, y, z) => z.indexOf(x) === y);
  return str.length != unique.length ? false : true;
};

console.log(isogram("DermatoglyphicsSq")); // false
