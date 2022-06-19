// ! Quetion 6____________________________________________
// ? Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

const reversedFive = (str) => {
  let words = str.split(" ");
  let filtered = words
    .map((i) => {
      return i.length > 5 ? i.split("").reverse().join("") : i;
    })
    .join(" ");
  return filtered;
};

console.log(reversedFive("asdasddz asd a"));

// * This problem was asked by Microsoft.
// ! Quetion 7____________________________________________
// ? Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

// Samples:
// bump("_nnnnnnn_n__n______nn__nn_nnn") => "Car Dead"
// bump("______n___n_") => "Woohoo!"

const carCond = (str) => {
  let bumpy = str.split("n").length - 1;
  return bumpy >= 15 ? "Car Dead" : "Woohoo!";
};

console.log(carCond("_nnnnnnn_n__n______nn__nn_nnn"));
console.log(carCond("______n___n_"));

// ! Quetion 8____________________________________________
// ? There is an array with some numbers. All numbers are equal except for one. Try to find it!

const findUniq = (arr) => {
  arr = arr.sort((x, y) => x - y);
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
};

console.log(findUniq([1, 1, 2, 1, 1, 1]));
console.log(findUniq([1, 3, 3, 3, 3, 3]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

// ! Quetion 9____________________________________________
// ? Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

// Do this in linear time and in-place.

// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

// const rgb = (arr) => {
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] = "R") {

//   }

// }
// arr.unshift(1);
// for (i = 0; i < arr.length; i++) {
// if (arr[arr.length - 1 == 1]) {
// return arr;
// } else {
// if ((arr[i] = "R")) {
// arr.slice(arr[i]);
// arr.push(arr[i]);
// }
// }
// arr.reduce((x,y,z) => )
// }
// };

// console.log(rgb(["G", "B", "R", "R", "B", "R", "G"]));

// ! Quetion 10____________________________________________
// ? Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Samples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

const digits = (nums) => {
  let arr = Array.from(String(nums), Number);
  let sum = arr.reduce((x, y) => {
    return x + y;
  });
  if (sum.toString().length != 1) {
    digits(sum);
    return;
  }
  console.log(sum);
};

digits(16); // 7
digits(942); // 6
digits(132189); // 6
digits(493193); // 2
