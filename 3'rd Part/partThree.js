// ! Quetion 11____________________________________________
// ? You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// samples:
// isValidWalk(['n','s','n','s','n','s','n','s','n','s']) => true
// isValidWalk(['w']) => false
// isValidWalk(['n','n','n','s','n','s','n','s','n','s']) => false
// isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) => false

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

// ! Quetion 12____________________________________________
// ? Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// ? You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// ? The array will always contain letters in only one case.

// * Samples:
// * ['a','b','c','d','f'] -> 'e'
// * ['O','Q','R','S'] -> 'P'

// const missingLetter = (arr) => {
//   let str = arr.join("").toString();
//   for (i = 0; i < str.length; i++) {
//     let first = str.charCodeAt(i);
//     let second = str.charCodeAt(i + 1);
//     if (second - first != 1) {
//       return String.fromCharCode(first + 1);
//     }
//   }
// };

function missingLetter(arr) {
  let str = arr.join("").toString();
  for (i = 0; i < str.length; i++) {
    let first = str.charCodeAt(i);
    let second = str.charCodeAt(i + 1);
    if (second - first != 1) {
      return String.fromCharCode(first + 1);
    }
  }
}

console.log(missingLetter(["a", "b", "c", "d", "f"]));
console.log(missingLetter(["O", "Q", "R", "S"]));

// ! Quetion 13____________________________________________
// ? Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'

// Examples:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(num) {
  arr = [];
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr.length != 0 ? arr : `${num} is prime`;
}
console.log(divisors(12)); // [2,3,4,6]
console.log(divisors(25)); // [5]
console.log(divisors(13)); // "13 is prime"

// ! Quetion 14____________________________________________
// ? Determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
// ? Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2     because (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3     because (3 red pairs)

const numOfPairs = (arr) => {
  var gloves = arr.reduce(function (x, y) {
    return (x[y] = (x[y] || 0) + 1), x;
  }, []);
  let count = 0;
  for (pair in gloves) {
    count += Math.floor(gloves[pair] / 2);
  }

  return count;
};

console.log(numOfPairs(["red", "green", "red", "blue", "blue"]));
console.log(numOfPairs(["red", "red", "red", "red", "red", "red"]));

// ! Quetion 15____________________________________________
// ? Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// ? Return any array that satisfies this condition.

// ? Input: nums = [3,1,2,4]  // * Output: [2,4,3,1]

function evenSort(arr) {
  return [...arr.filter((x) => x % 2 == 0), ...arr.filter((x) => x % 2 == 1)];
}

console.log(evenSort([3, 1, 2, 4]));
