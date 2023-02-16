## [Largest Elements](https://www.codewars.com/kata/53d32bea2f2a21f666000256)

- Write a program that outputs the top `n` elements from a list.

```js
largest(2, [7, 6, 5, 4, 3, 2, 1]);
// => [6,7]
```

#### Solution:

```js
function largest(n, array) {
  // Find the n highest elements in a list
  return array
    .sort((a, b) => b - a)
    .slice(0, n)
    .reverse();
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [9, 10]
console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5])); // [-1, 0]
console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5])); // [3, 5, 9, 13, 22, 50, 63]
console.log(largest(0, [1, 2, 3, 4, 8, 7, 6, 5])); // []
```
