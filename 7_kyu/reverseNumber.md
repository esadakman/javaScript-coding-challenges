## [Reverse a Number](https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5) 

- Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

- Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.`

- Your task is to process a string with `"#"` symbols.

#### Examples:
```js
 123 ->  321
-456 -> -654
1000 ->    1
```

#### Solution:

```js
function reverseNumber(x) {
 x = x + "";
  x = x.split("").reverse().join("");
  if (x.startsWith(0) && x.length > 1) {
    x = x.slice(1);
  }
  if (x.endsWith("-")) {
    x = "-" + x.slice(0, -1);
  }
  return parseInt(x);
}

console.log(reverseNumber(123)); // 321
console.log(reverseNumber(1000)); // 1
console.log(reverseNumber(4321234)); // 4321234
console.log(reverseNumber(98989898)); // 89898989
```
