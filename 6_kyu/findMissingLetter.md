## Find the missing letter

- Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
- You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
- The array will always contain letters in only one case.

Example:
```js
  ['a','b','c','d','f'] -> 'e' 
  ['O','Q','R','S'] -> 'P' 
```
Solution:

```js
function findMissingLetter(arr) {
  let str = arr.join("").toString();
  for (i = 0; i < str.length; i++) {
    let first = str.charCodeAt(i);
    let second = str.charCodeAt(i + 1);
    if (second - first != 1) {
      return String.fromCharCode(first + 1);
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // e
console.log(findMissingLetter(["O", "Q", "R", "S"])); // p
```