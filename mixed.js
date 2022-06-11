// ! Quetion 1____________________________________________
// You have a two-dimensional list in the following format:

// data = [[2, 5], [3, 4], [8, 7]]
// Each sub-list contains two items, and each item in the sub-lists is an integer.

// Write a function process_data()/processData() that processes each sub-list like so:

// [2, 5] --> 2 - 5 --> -3
// [3, 4] --> 3 - 4 --> -1
// [8, 7] --> 8 - 7 --> 1
// and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

data = [[2, 5], [3, 4], [8, 7]]

let multi = 1;
let empty_list = []

for (var x of data){
    // ! multi *= x[0]-x[1];
    let fat = x[0] - x[1];
    empty_list.push(fat)

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

// ! Quetion 5____________________________________________
// ? // TASK:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters
// is an isogram. Assume the empty string is an isogram. Ignore letter case.

const isogram = (str) => {
    let strArr = str.toLowerCase();
    strArr = strArr.split("");
    let unique = strArr.filter((x, y, z) => z.indexOf(x) === y);
    return str.length != unique.length ? false : true;
  };

  a = "Dermatoglyphics";

  console.log(isogram("DermatoglyphicsSq"));

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

// console.log(reversedFive("asdasddz asd a"));

// This problem was asked by Microsoft.

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

return bumpy >= 15 ? "Car Dead" : "Woohoo!";

console.log(findUniq([1, 1, 2, 1, 1, 1]));
console.log(findUniq([1, 3, 3, 3, 3, 3]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

// ! Quetion 9____________________________________________
// ? Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

// Do this in linear time and in-place.

// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].



// console.log(rgb(["G", "B", "R", "R", "B", "R", "G"]));

// ! Quetion 10____________________________________________
// ? Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Samples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

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

// ! Quetion 11____________________________________________
// ? You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// samples:
// isValidWalk(['n','s','n','s','n','s','n','s','n','s']) => true
// isValidWalk(['w']) => false
// isValidWalk(['n','n','n','s','n','s','n','s','n','s']) => false
// isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) => false

// const isValidWalk = (arr) => {
//   var result = arr.reduce(function (x, y) {
//     return (x[y] = (x[y] || 0) + 1), x;
//   }, []);
//   return result;
// return (result.n == 5 && result.s == 5) || (result.w == 5 && result.e == 5)
//   ? true
//   : false;
// };

const isValidWalk = (arr) => {
  var result = arr.reduce((x, y) => {
    if (y in x) {
      x[y]++;
    } else {
      x[y] = 1;
    }
    return x;
  }, []);
  return (result.n == 5 && result.s == 5) || (result.w == 5 && result.e == 5)
    ? true
    : false;
};

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]));


