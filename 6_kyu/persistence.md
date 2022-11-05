## Persistent Bugger 

- Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

Examples: 
```js
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
```
Solution:
```js

function persistence(num) {
  num = num.toString();
  let res = 1;
  let counter = 0;
  while (num.length > 1) {
    counter += 1;
    for (let i = 0; i < num.length; i += 1) {
      res *= num[i];
    }
    num = res.toString(); 
    res = 1;
  }
  return counter;
}

console.log(persistence(39)); // 3  
console.log(persistence(4)); // 0
console.log(persistence(999)); // 4
console.log(persistence(25)); // 2 
```