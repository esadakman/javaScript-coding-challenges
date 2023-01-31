## [Fizz Buzz](https://www.codewars.com/kata/5300901726d12b80e8000498)

- Return an array containing the numbers from 1 to N, where N is the parametered value.

- Replace certain values however if any of the following conditions are met:

  - If the value is a multiple of 3: use the value "Fizz" instead
  - If the value is a multiple of 5: use the value "Buzz" instead
  - If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

- N will never be less than 1.

#### Examples:

```js
fizzbuzz(3) -->  [1, 2, "Fizz"]
```

#### Solution:

```js
function fizzbuzz(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(i);
    }
  }
  return res;
}
```
