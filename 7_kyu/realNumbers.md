## [Mysterious Singularity Numbers](https://www.codewars.com/kata/6409aa6df4a0b773ce29cc3d/javascript)

#### Task

- The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

#### Example

- Let's take the number 5 as an example:
  - 1 - doesn't divide integer by 2, 3, and 5
  - 2 - divides integer by 2
  - 3 - divides integer by 3
  - 4 - divides integer by 2
  - 5 - divides integer by 5 

#### Answer

- Answer: 1
- because only one number doesn't divide integer by any of 2, 3, 5

#### Solution:

```js
function realNumbers(n) {
  return (
    n -
    Math.floor(n / 2) -
    Math.floor(n / 3) -
    Math.floor(n / 5) +
    Math.floor(n / 6) +
    Math.floor(n / 10) +
    Math.floor(n / 15) -
    Math.floor(n / 30)
  );
}

console.log(realNumbers(75)); // 20
```
