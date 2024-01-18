## [Sum of Cubes](https://www.codewars.com/kata/59a8570b570190d313000037)

#### DESCRIPTION:

- Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

- Assume that the input n will always be a positive integer.

##### Examples: (Input --> output)

```js
2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

```

#### Solution:

```js
function sumCubes(n) {
  return Array.from({ length: n }, (_, i) => Math.pow(i + 1, 3)).reduce(
    (acc, curr) => acc + curr,
    0
  );
}

console.log(sumCubes(2)); // 9
console.log(sumCubes(3)); // 36
```
