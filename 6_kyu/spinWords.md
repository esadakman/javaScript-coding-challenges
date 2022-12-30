## [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)

- Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. 
- Strings passed in will consist of only letters and spaces. 
- Spaces will be included only when more than one word is present.

#### Examples:

```js
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
```
#### Solution:

```js
const spinWords = (str) => {
  let words = str.split(" ");
  let filtered = words
    .map((i) => {
      return i.length >= 5 ? i.split("").reverse().join("") : i;
    })
    .join(" ");
  return filtered;
};

console.log(spinWords("Hey fellow warriors)) // "Hey wollef sroirraw"
```