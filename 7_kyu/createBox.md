## [The 'spiraling' box](https://www.codewars.com/kata/63b84f54693cb10065687ae5)

#### Task

Given two positive integers m (width) and n (height), fill a two-dimensional list (or array) of size m-by-n in the following way:

- (1) All the elements in the first and last row and column are 1.

- (2) All the elements in the second and second-last row and column are 2, excluding the elements from step 1.

- (3) All the elements in the third and third-last row and column are 3, excluding the elements from the previous steps.

- And so on ...

#### Examples

Given m = 5, n = 8, your function should return

```js
[
  [1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 2, 2, 1],
  [1, 1, 1, 1, 1],
];
```

- Given m = 10, n = 9, your function should return

```js
[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1],
  [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1],
  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
```

Solution:

```js
function createBox(m, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const row = [];

    for (let j = 0; j < m; j++) {
      // Calculate the minimum distance to the border
      const minDist = Math.min(i, j, n - i - 1, m - j - 1);

      // Calculate the value based on the minimum distance
      const value = minDist + 1;

      // Add the value to the row
      row.push(value);
    }

    // Add the row to the result
    result.push(row);
  }

  return result;
}

console.log(createBox(5, 8)); 
console.log(createBox(10, 9));
```
