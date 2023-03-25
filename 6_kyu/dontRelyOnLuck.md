## [Don't rely on luck.](https://www.codewars.com/kata/5268af3872b786f006000228)

- The test fixture I use for this kata is pre-populated.

- It will compare your guess to a random number generated using:

##### Example

```js
Math.floor(Math.random() * 100 + 1);
```

- You can pass by relying on luck or skill but try not to rely on luck.

- "The power to define the situation is the ultimate power." - Jerry Rubin

#### Solution:

```js
var guess = 10;

// "Math.floor" is a built-in function in JavaScript that rounds a number down to the nearest integer. However, in this code, it has been redefined to always return the value of "guess", regardless of the input number.

Math.floor = function (number) {
  return guess;
};
```
