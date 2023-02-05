## [N-th Fibonacci](https://www.codewars.com/kata/522551eee9abb932420004a0)

- I love Fibonacci numbers in general, but I must admit I love some more than others.

- I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

- If the mirror doesn't exist or array is empty, return 0.

#### Examples:

```js
nthFibo(4) == 2;
```

- Because 2 is the 4th number in the Fibonacci Sequence.

- For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

#### Solution:

```js
function nthFibo(n) {
  let fibos = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    let nextFib = fibos[i] + fibos[i + 1];
    fibos.push(nextFib);
  } 
  return fibos[n - 1];
}

console.log(nthFibo(1)); // 0
console.log(nthFibo(2)); // 1
console.log(nthFibo(3)); // 1
console.log(nthFibo(4)); // 2
```
