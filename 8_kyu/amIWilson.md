## [Wilson primes](https://www.codewars.com/kata/55dc4520094bbaf50e0000cb)


- [Wilson primes](https://en.wikipedia.org/wiki/Wilson_prime) satisfy the following condition. Let P represent a prime number.

- Then,

```js
((P-1)! + 1) / (P * P)
```
should give a whole number.

- Your task is to create a function that returns true if the given number is a Wilson prime.

#### Solution:

```js
function amIWilson(p) {
  const n = BigInt(p);

  const factorial = (n) => (n <= 1n ? 1n : n * factorial(n - 1n));

  return (factorial(n - 1n) + 1n) % (n * n) === 0n;
}


console.log(noonerize(5)); // true
console.log(noonerize(9)); // false
console.log(noonerize(6)); // false
```
