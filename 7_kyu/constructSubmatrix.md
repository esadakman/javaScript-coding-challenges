## [Simple Fun #235: Construct Submatrix](https://www.codewars.com/kata/590818ddffa0da26ad00009b)

##### Task

- Given a matrix, find its submatrix obtained by deleting the specified rows and emptying the specified columns.

##### Input/Output

`[input]` 2D integer array matrix

- 2-dimensional array of integers.

- `1 ≤ matrix.length ≤ 10`,

- `1 ≤ matrix[0].length ≤ 10`,

- ` 0`` ≤ matrix[i][j] ≤ 9 `.

- `[input]` integer array `rowsToDelete`

Array of indices (0-based) of rows to be deleted.

- `0 ≤ rowsToDelete.length ≤ 5`,

- `0 ≤ rowsToDelete[i] < matrix.length.`

- `[input]` integer array `columnsToDelete`

Array of indices (0-based) of columns to be deleted.

- `0 ≤ columnsToDelete.length ≤ 5`,

- `0 ≤ columnsToDelete[i] < matrix[0].length.`

- `[output]` 2D integer array

##### Example

```js
matrix = [
  [1, 0, 0, 2],
  [0, 5, 0, 1],
  [0, 0, 3, 5],
];
rowsToDelete = [1];
columnsToDelete = [0, 2];
```

the output should be

```js
[
  [0, 2],
  [0, 5],
];
```

Solution:

```js
function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  for (let i = rowsToDelete.length - 1; i >= 0; i--) {
    matrix.splice(rowsToDelete[i], 1);
  }

  for (let i = columnsToDelete.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j].splice(columnsToDelete[i], 1);
    }
  }

  return matrix;
}

console.log(
  constructSubmatrix(
    [
      [1, 0, 0, 2],
      [0, 5, 0, 1],
      [0, 0, 3, 5],
    ],
    [1],
    [0, 2]
  )
);
// [
//   [0, 2],
//   [0, 5],
// ];
console.log(
  parse(
    [
      [1, 0, 0, 2],
      [0, 5, 0, 1],
      [0, 0, 3, 5],
    ],
    [],
    [0]
  )
);
// [
//   [0, 0, 2],
//   [5, 0, 1],
//   [0, 3, 5],
// ];
```
