## [Calculate number of inversions in array](https://www.codewars.com/kata/537529f42993de0e0b00181f)

- Array inversion indicates how far the array is from being sorted.

- Inversions are pairs of elements in array that are out of order.

#### Examples :

```js
[1, 2, 3, 4]  =>  0 inversions
[1, 3, 2, 4]  =>  1 inversion: 2 and 3
[4, 1, 2, 3]  =>  3 inversions: 4 and 1, 4 and 2, 4 and 3
[4, 3, 2, 1]  =>  6 inversions: 4 and 3, 4 and 2, 4 and 1, 3 and 2, 3 and 1, 2 and 1
```

#### Goal:

- The goal is to come up with a function that can calculate inversions for any arbitrary array

#### Solution :

```js
function countInversions(array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0 + i; j < array.length; j++) {
      res += array[i] > array[j] ? 1 : 0;
    }
  }
  return res;
}

console.log(countInversions([])); // 0
console.log(countInversions([2, 1, 3])); // 1
console.log(countInversions([6, 5, 4, 3, 2, 1])); // 15
```
