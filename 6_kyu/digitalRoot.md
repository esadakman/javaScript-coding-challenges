## [Sum of Digits / Digital Root ](https://www.codewars.com/kata/541c8630095125aba6000c00)

- Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

#### Examples: 

```js
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```
#### Solution 1:
```js
const digitalRoot = (nums) => {
  let arr = Array.from(String(nums), Number);
  let sum = arr.reduce((x, y) => {
    return x + y;
  });
  if (sum.toString().length != 1) {
    digitalRoot(sum);
    return;
  }
  console.log(sum);
};

digitalRoot(16); // 7
digitalRoot(942); // 6 
```
#### Solution 2:
```js
function digitalRoot(n) {
  return (n - 1) % 9 + 1;
}
```