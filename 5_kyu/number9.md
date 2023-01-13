 
## [count '9's from 1 to n](https://www.codewars.com/kata/55143152820d22cdf00001bb)

- It's 9 time!

- I want to count from 1 to n. How many times will I use a '9'?

- 9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

<b>NOTE:</b> `n` will always be a positive integer.

#### Examples (input -> output):
```js 
8  -> 0
9  -> 1
10 -> 1
98 -> 18
100 -> 20
```
 
#### Solutions:
```js
function number9(n) {
  let res = 0;
  for (let i = 1; i <= n; i *= 10) {
    let curr = Math.floor(n / i);
    res += Math.floor(curr / 10) * i;
    if (curr % 10 === 9) res += (n % i) + 1;
  }
  return res;
}
console.log(number9(1)); // 0
console.log(number9(9)); // 1
console.log(number9(100)); // 20
```