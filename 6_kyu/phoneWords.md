## [Phone Words](https://www.codewars.com/kata/635b8fa500fba2bef9189473)

- Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:

<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/1024px-Telephone-keypad2.svg.png' />

- For example if you get `"22"` return `"b"`, if you get `"222"` you will return `"c"`. If you get `"2222"` return `"ca"`.

- Further details: 
    - 0 is a space in the string.
    - 1 is used to separate letters with the same number.
    - always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs". 
    - you cannot return digits.
    - Given a empty string, return empty string.
    - Return a lowercase string.

#### Examples: 
```js
"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "
```
#### Solution:
```js 
function phoneWords(stringOfNums) {
  let counter = 0,
   newString = "";
 const letterList = {
   0: [" "],
   1: [""],
   2: ["a", "b", "c"],
   3: ["d", "e", "f"],
   4: ["g", "h", "i"],
   5: ["j", "k", "l"],
   6: ["m", "n", "o"],
   7: ["p", "q", "r", "s"],
   8: ["t", "u", "v"],
   9: ["w", "x", "y", "z"],
 };
 for (let i = 0; i < stringOfNums.length; i++) {
   let active = parseInt(stringOfNums[i]);
   let next = parseInt(stringOfNums[i + 1]);
   if (next === 1) {
     newString += letterList[active][counter];
     i++;
     counter = 0;
     continue;
   } else if (counter + 1 === letterList[active].length) {
     newString += letterList[active][counter];
     counter = 0;
     continue;
   } else if (next !== active) {
     newString += letterList[active][counter];
     counter = 0;
     continue;
   }
   counter++;
 }
 return newString;
}

console.log(phoneWords("7999844666166")); // "python"
console.log(phoneWords("55886444833")); // "kumite"
console.log(phoneWords("271755533")); // "apple"
console.log(phoneWords("111")); // ""
console.log(phoneWords("000")); // "   "
```