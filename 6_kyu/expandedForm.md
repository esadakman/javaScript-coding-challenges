## [Write Number in Expanded Form](https://www.codewars.com/kata/5842df8ccbd22792a4000245)

- You will be given a number and you will need to return it as a string in Expanded Form. For example:

#### Examples:
```js
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
```
#### Solution:
```js
function expandedForm(num) {
  return num
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");
}

console.log(expandedForm(12)); //  '10 + 2'
console.log(expandedForm(42)); //  "40 + 2"
console.log(expandedForm(70304)); // '70000 + 300 + 4'
```