## [Difference of 2](https://www.codewars.com/kata/5340298112fa30e786000688)

- The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

- The result array should be sorted in ascending order of values.

- Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

#### Samples:

```js
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
```

#### Solution:

```js
function twosDifference(input) {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    if (input.indexOf(input[i] + 2) != -1) {
      res.push([input[i], input[i] + 2]);
    }
  }
  return res;
}

console.log(twosDifference([1, 2, 3, 4])); // [[1,3],[2,4]]
console.log(twosDifference([1, 3, 4, 6])); // [[1,3],[4,6]]
```
