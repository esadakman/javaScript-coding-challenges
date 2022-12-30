## [Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4) 

- Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Samples:

- The binary representation of 1234 is 10011010010, so the function should return 5 in this case

Solution:

```js
var countBits = function (n) {
  let binary = Array.from(n.toString(2));
  return binary.map(Number).reduce((a, b) => a + b);
};

console.log(countBits(1234)); // 5
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
```