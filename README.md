## Question 1 
- You have a two-dimensional list in the following format:
- Each sub-list contains two items, and each item in the sub-lists is an integer.
- Write a function process_data()/processData() that processes each sub-list like so:
```js
data = [
  [2, 5],
  [3, 4],
  [8, 7],
];
```
[2, 5] --> 2 - 5 --> -3\
[3, 4] --> 3 - 4 --> -1\
[8, 7] --> 8 - 7 --> 1\
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.
```js
  let multi = 1;
let empty_list = [];
```js
for (var x of data) {
  // ! multi *= x[0]-x[1];
  let fat = x[0] - x[1];
  empty_list.push(fat);
}
for (let y of empty_list) {
  multi *= y;
}
```

## Question 2 
- Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.
- Recall that the median of an even-numbered list is the average of the two middle numbers.
- For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out: 2, 1.5, 2, 3.5, 2, 2, 2

```js
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
```

## Question 3
- This is an interview question asked by Uber.
- Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
- For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

```js
const uber = (arr) => {
  let newArr = [];
  let multi = arr.reduce((x, y) => x * y);
  for (i = 0; i < arr.length; i++) {
    newArr.push(multi / arr[i]);
  }
  return newArr;
};

console.log(uber([10, 5, 9])); // [45, 90, 50]
```

## Question 4
- An isogram is a word that has no repeating letters, consecutive or non-consecutive.
- Implement a function that determines whether a string that contains only letters
- is an isogram. Assume the empty string is an isogram. Ignore letter case.

```js
const isogram = (str) => {
  let strArr = str.toLowerCase();
  strArr = strArr.split("");
  let unique = strArr.filter((x, y, z) => z.indexOf(x) === y);
  return str.length != unique.length ? false : true;
};

console.log(isogram("DermatoglyphicsSq")); // false
```

## Question 5
- Convert number to reversed array of digits
- Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

```js
function digitize(n) {
  return String(n).split("").reverse().map(Number);
}

console.log(digitize(348597)); // [7, 9, 5, 8, 4, 3]
```


## Question 6
- Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

```js
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
```


## Question 7
- Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
- Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

Samples:\
-bump("_nnnnnnn_n__n______nn__nn_nnn") => "Car Dead"\
-bump("______n___n_") => "Woohoo!"

```js
const carCond = (str) => {
  let bumpy = str.split("n").length - 1;
  return bumpy >= 15 ? "Car Dead" : "Woohoo!";
};

console.log(carCond("_nnnnnnn_n__n______nn__nn_nnn"));  // Car Dead
console.log(carCond("______n___n_")); // Woohoo!
```


## Question 8
- There is an array with some numbers. All numbers are equal except for one. Try to find it!

```js
const findUniq = (arr) => {
  arr = arr.sort((x, y) => x - y);
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
};

console.log(findUniq([1, 1, 2, 1, 1, 1])); // 2
console.log(findUniq([1, 3, 3, 3, 3, 3])); // 1
console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55
```


## Question 9
- Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
- Do this in linear time and in-place.
-  For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

```js

console.log(rgb(["G", "B", "R", "R", "B", "R", "G"]));

```

## Question 10
- Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

- Samples:\
16  -->  1 + 6 = 7\
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6\
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

```js

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
```
## Question 11
- You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

- Samples:\
isValidWalk(['n','s','n','s','n','s','n','s','n','s']) => true \
isValidWalk(['w']) => false \
isValidWalk(['n','n','n','s','n','s','n','s','n','s']) => false \
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) => false

```js

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

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(isValidWalk(["w"])); // false
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // false
```


## Question 12
- Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
- You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
- The array will always contain letters in only one case.


- Samples:\
['a','b','c','d','f'] -> 'e' \
['O','Q','R','S'] -> 'P' \ 

```js

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

console.log(missingLetter(["a", "b", "c", "d", "f"])); // e
console.log(missingLetter(["O", "Q", "R", "S"])); // p
```


## Question 13
- Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'


- Samples:\
divisors(12); // should return [2,3,4,6] \
divisors(25); // should return [5] \ 
divisors(13); // should return "13 is prime" 

```js
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
```


## Question 14
- Determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
- Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

- Samples:\
input = ["red", "green", "red", "blue", "blue"] \
result = 2     because (1 red pair + 1 blue pair) \ 
input = ["red", "red", "red", "red", "red", "red"] \
result = 3     because (3 red pairs)

```js
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

console.log(numOfPairs(["red", "green", "red", "blue", "blue"])); // 2
console.log(numOfPairs(["red", "red", "red", "red", "red", "red"])); // 3
```

## Question 15
- Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
- Return any array that satisfies this condition. 

- Samples:\
Input: nums = [3,1,2,4] \
Output: [2,4,3,1]

```js
function evenSort(arr) {
  return [...arr.filter((x) => x % 2 == 0), ...arr.filter((x) => x % 2 == 1)];
}

console.log(evenSort([3, 1, 2, 4])); // [2, 4, 3, 1]
```

## Question 16
- Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
- Return any array that satisfies this condition. 

- Samples:\
a = "xyaabbbccccdefww" \
b = "xxxxyyyyabklmopq" \
longest(a, b) -> "abcdefklmopqwxy" \
c = "abcdefghijklmnopqrstuvwxyz"; \
longest(c, c) -> "abcdefghijklmnopqrstuvwxyz"

```js
function longest(s1, s2) {
  let x = s1.concat(s2);
  let y = x.split("").sort();

  let z = new Set(y);
  return Array.from(z).join("");
}

console.log(longest(a, b)); // abcdefklmopqwxy
console.log(longest(c, c)); // abcdefghijklmnopqrstuvwxyz
```


## Question 17
- Write a function inverse_slice() that takes three arguments: a list items, an integer a and an integer b. The function should return a new list with the slice specified by items[a:b] excluded. 

- Samples:\
inverse_slice([12, 14, 63, 72, 55, 24], 2, 4) \
[12, 14, 55, 24] 
- The input will always be a valid list, a and b will always be different integers equal to or greater than zero, but they may be zero or be larger than the length of the list.

```js
function inverseSlice(items, a, b) {
  items.splice(a, b - a);
  return items;
}
let ages = [12, 14, 63, 72, 55, 24];

let x = 2;
let y = 4;
console.log(inverseSlice(ages, x, y)); // [12, 14, 55, 24]
```


## Question 18
- Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

- Samples:\
[3, 4, -1, 1] -> 2 \
[1, 2, 0] -> 3

```js
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

console.log(minPlus([3, 4, -1, 1])); // 2
console.log(minPlus([3, 3, 4, -1, 1, 2])); // 5
console.log(minPlus([1, 2, 0])); // 3
```


## Question 19
- Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

- Samples:\
"the-stealth-warrior" gets converted to "theStealthWarrior"\
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

```js
function toCamelCase(str) {
  if (str[0] == str[0].toLowerCase()) {
    str = str.split("-").join(" ");
    arr = str
      .split(" ")
      .map((first) => first.charAt(0).toUpperCase() + first.substring(1));
    let newStr = arr.join("");
    return newStr[0].toLowerCase() + newStr.substring(1);
  } else {
    return (str = str.replaceAll("_", ""));
  }
}

console.log(toCamelCase("the-stealth-warrior")); // theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior
```


## Question 20
- Write a function that removes every lone 9 that is inbetween 7s.

- Samples:\
"79712312" --> "7712312"\
"79797"    --> "777"

```js
function sevenAte9(str) {
  arr = str.split("");
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] == "7" && arr[i] == "9" && arr[i + 1] == "7") {
      arr.splice(i, 1);
    }
  }

  return arr.join("");
}

console.log(sevenAte9("79712312")); // 7712312
console.log(sevenAte9("79797")); // 777
console.log(sevenAte9("165561786121789797")); // 16556178612178977
```


## Question 21
- Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

- Samples:\
moveZeros([false,1,0,1,2,0,1,3,"a"])\
returns[false,1,1,2,1,3,"a",0,0]

```js
function moveZeros(arr) {
  let a = arr.filter((x) => x !== 0);
  let b = arr.filter((x) => x === 0);
  return a.concat(b);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); 
// [false, 1, 1, 2, 1, 3, 'a', 0, 0]
``` 


## Question 22
- Complete the method which accepts an array of integers, and returns one of the following:\

 => "yes, ascending" - if the numbers in the array are sorted in an ascending order\
 => "yes, descending" - if the numbers in the array are sorted in a descending order\
 => "no" - otherwise

- Samples:\

```js
function isSortedAndHow(array) {
  let arr = JSON.stringify(array);
  array.sort(function (a, b) {
    return a - b;
  });
  if (arr == JSON.stringify(array)) {
    return "yes, ascending";
  } else if (arr == JSON.stringify(array.reverse())) {
    return "yes, descending";
  } else {
    return "no";
  }
}

console.log(isSortedAndHow([1, 2])); // yes, ascending
console.log(isSortedAndHow([15, 7, 3, -8])); // yes, descending
console.log(isSortedAndHow([4, 2, 30])); // no
``` 

## Question 23
- Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.
Input:
-  You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!
Output:
- The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.
 
```js
function time(distance, boatSpeed, stream) {
  if (stream.includes("Downstream")) {
    boatSpeed = boatSpeed + parseInt(stream.split(" ")[1]);
  } else {
    boatSpeed = boatSpeed - stream.split(" ")[1];
  }
  return parseFloat((distance / boatSpeed).toFixed(2));
}

console.log(time(24, 10, "Downstream 2")); // 2
console.log(time(24, 14, "Upstream 2")); // 2
console.log(time(105, 23, "Downstream 10")); // 3.18
``` 

## Question 24
- Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

- Samples:\
- The binary representation of 1234 is 10011010010, so the function should return 5 in this case
- 
```js
var countBits = function (n) {
  let binary = Array.from(n.toString(2));
  return binary.map(Number).reduce((a, b) => a + b);
};

console.log(countBits(1234)); // 5
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
``` 

