## [Numbers that are a power of their sum of digits](https://www.codewars.com/kata/55f4e56315a375c1ed000159)

- The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details

- `8 + 1 = 9 and 92 = 81`
- `512 = 5 + 1 + 2 = 8 and 83 = 512`

- We need to make a function that receives a number as argument `n` and returns the` n-th term` of this sequence of numbers.

- Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

#### Examples:

```js
1 --> 81

2 --> 512
```

#### Solution:

```js
function powerSumDigTerm(n) {
  const res = [];
  for (let i = 2; i <= 100; i++) {
    for (let j = 2; j <= 10; j++) {
      let powers = Math.pow(i, j).toString();  
      let sum = powers
        .toString()
        .split("")
        .reduce((x, y) => +x + +y);
      if (sum == i) {
        res.push(+powers);
      }
    }
  }
  const resSorted = res.sort((a, b) => a - b); 
  return resSorted[n - 1];
}

console.log(powerSumDigTerm(1)); //  81
console.log(powerSumDigTerm(2)); //  512
console.log(powerSumDigTerm(3)); //  2401
```
