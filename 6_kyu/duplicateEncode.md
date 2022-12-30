## [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c)

- The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Note: If the number is a multiple of both 3 and 5, only count it once.

#### Solution:

```js
function duplicateEncode(word) {
  return word.toLowerCase().split("").map((letter) => {
    if (word.toLowerCase().split("").filter((l) => l === letter).length > 1) {
        return ")";
      }
      return "(";
    })
    .join("");
} 

console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()() 
```