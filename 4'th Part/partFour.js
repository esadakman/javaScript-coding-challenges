// ! Quetion 16____________________________________________
// ? Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
// longest(a, b) -> "abcdefklmopqwxy"

c = "abcdefghijklmnopqrstuvwxyz";
// longest(c, c) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let x = s1.concat(s2);
  let y = x.split("").sort();

  let z = new Set(y);
  return Array.from(z).join("");
}

console.log(longest(a, b));
console.log(longest(c, c));

// ! Quetion 17____________________________________________
//  write a function inverse_slice() that takes three arguments: a list items, an integer a and an integer b. The function should return a new list with the slice specified by items[a:b] excluded. For example:

/* >>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
[12, 14, 55, 24]
The input will always be a valid list, a and b will always be different integers equal to or greater than zero, but they may be zero or be larger than the length of the list. */

function inverseSlice(items, a, b) {
  items.splice(a, b - a);
  return items;
}
let ages = [12, 14, 63, 72, 55, 24];

let x = 2;
let y = 4;
console.log(inverseSlice(ages, x, y)); // [12, 14, 55, 24]

// ! Quetion 18____________________________________________

// ? Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// positives = positives.sort((a, b) => a - b);
// return positives;

function minPlus(arr) {
  // let positives = [...new Set(arr.filter((x) => x > 0).sort((a, b) => a - b))];
  let positives = arr.filter((x) => x > 0).sort((a, b) => a - b);
  positives = [...new Set(positives)];
  for (let i = 0; i <= positives.length; i++) {
    if (positives[i] + 1 != positives[i + 1]) {
      return positives[i] + 1;
    }
  }
}

console.log(minPlus([3, 4, -1, 1]));
console.log(minPlus([3, 3, 4, -1, 1, 2]));
console.log(minPlus([1, 2, 0]));
