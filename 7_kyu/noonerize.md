## [Noonerize Me](https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd)


- Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

- You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:

```js
[123, 456] = 423 - 156 = 267
```
- Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. The provided array will always contain 2 elements.

- When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account that the numbers will be of varying magnitude, between and within test cases.

#### Solution:

```js
function noonerize(numbers) {
  if (typeof numbers[0] !== 'number' || typeof numbers[1] !== 'number') return "invalid array";

  const [num1, num2] = numbers.map(String);
  return Math.abs(parseInt(num2[0] + num1.slice(1)) - parseInt(num1[0] + num2.slice(1)));
}

console.log(noonerize([12, 34])); // 18
console.log(noonerize([357, 579])); // 12
console.log(noonerize([1000000, 9999999])); // 7000001
```
