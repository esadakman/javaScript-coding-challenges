## [Array Helpers](https://www.codewars.com/kata/525d50d2037b7acd6e000534)

- This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

#### Explanation:

- `square()` must return a copy of the array, containing all values squared
- `cube()` must return a copy of the array, containing all values cubed
- `average()` must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
- `sum()` must return the sum of all array values
- `even()` must return an array of all even numbers
- `odd()` must return an array of all odd numbers 2 _ 2 _ 1

Note: the original array must not be changed in any case!

#### Examples:

```js
var numbers = [1, 2, 3, 4, 5];

numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]
```

#### Solution:

```js
// Square every number in the array
Array.prototype.square = function () {
  return this.map((num) => num * num);
};

// Cube every number in the array
Array.prototype.cube = function () {
  return this.map((num) => Math.pow(num, 3));
};

// Calculate the average of the numbers in the array
Array.prototype.average = function () {
  if (this.length === 0) return NaN;
  return this.sum() / this.length;
};

// Sum up all numbers in the array
Array.prototype.sum = function () {
  return this.reduce((acc, num) => acc + num, 0);
};

// Get all even numbers from the array
Array.prototype.even = function () {
  return this.filter((num) => num % 2 === 0);
};

// Get all odd numbers from the array
Array.prototype.odd = function () {
  return this.filter((num) => num % 2 !== 0);
};

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.square()); // [1, 4, 9, 16, 25]
console.log(numbers.cube()); // [1, 8, 27, 64, 125]
console.log(numbers.average()); // 3
console.log(numbers.sum()); // 15
console.log(numbers.even()); // [2, 4]
console.log(numbers.odd()); // [1, 3, 5]
```
