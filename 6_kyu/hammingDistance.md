## [Simple Fun #141: Hamming Distance](https://www.codewars.com/kata/58a6af7e8c08b1e9c40001c1)

#### Task

- The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

#### Example

For `a = 25, b = 87`, the result should be `4`

```js
25: 00011001
87: 01010111
```

The hamming distance between these two would be `4` ( the `2nd, 5th, 6th, 7th` bit ).

#### Input/Output

- `[input]` integer `a`

  - First Number. `1 <= a <= 2^20`

- `[input]` integer b

  - Second Number. `1 <= b <= 2^20`

- `[output]` an integer

#### Solution:

```js
function hammingDistance(a, b) {
  a = a.toString(2).padStart(16, 0);
  b = b.toString(2).padStart(16, 0);
  return [...a].reduce((acc, _, i) => acc + (a[i] != b[i]), 0);
}

console.log(hammingDistance(25, 87)); // 4
console.log(hammingDistance(256, 302)); // 4
console.log(hammingDistance(543, 634)); // 4
console.log(hammingDistance(34013, 702)); // 7
```
