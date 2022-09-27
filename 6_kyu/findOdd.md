## Find the odd int 

- Given an array of integers, find the one that appears an odd number of times.
- There will always be only one integer that appears an odd number of times.

Examples:

```js
- [7] should return 7, because it occurs 1 time (which is odd).
- [0] should return 0, because it occurs 1 time (which is odd).
- [1,1,2] should return 2, because it occurs 1 time (which is odd).
- [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
- [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
```

Solution:

```js
function findOdd(arr) {
  const count = {};
  for (const element of arr) {
    count[element] ? (count[element] += 1) : (count[element] = 1);
  }
  const odd = Object.keys(count).filter((x) => count[x] % 2);
  return parseInt(odd);
}

console.log(findOdd([0])); // 0
console.log(findOdd([1, 1, 2])); // 2
console.log(findOdd([0, 1, 0, 1, 0])); // 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
```