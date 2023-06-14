## [Prime Factors](https://www.codewars.com/kata/542f3d5fd002f86efc00081a)

#### Prime Factors

- Inspired by one of Uncle Bob's TDD Kata

- Write a function that generates factors for a given number.

- The function takes an integer as parameter and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

#### Examples:

```js
1  ==>  []
3  ==>  [3]
8  ==>  [2, 2, 2]
9  ==>  [3, 3]
12 ==>  [2, 2, 3]
```

#### Solution:

```js
function primeFactors(n) {
  var factors = [];
  var divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

console.log(primeFactors(1)); // Output: []
console.log(primeFactors(3)); // Output: [3]
console.log(primeFactors(8)); // Output: [2, 2, 2]
console.log(primeFactors(9)); // Output: [3, 3]
console.log(primeFactors(12)); // Output: [2, 2, 3]
```
