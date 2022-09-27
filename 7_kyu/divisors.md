## Find the divisors!

- Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'

Examples:
```js
  divisors(12); // should return [2,3,4,6] 
  divisors(25); // should return [5] 
  divisors(13); // should return "13 is prime"
```
Solution:
```js
function divisors(num) {
  arr = [];
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr.length != 0 ? arr : `${num} is prime`;
}
console.log(divisors(12)); // [2,3,4,6]
console.log(divisors(25)); // [5]
console.log(divisors(13)); // "13 is prime"
```