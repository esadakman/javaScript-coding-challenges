## Find First Missing Positive Integer In O(n) Complexity

- Given an array of integers, find the first missing positive integer in linear time and constant space.
- In other words, find the lowest positive integer that does not exist in the array.
- The array can contain duplicates and negative numbers as well.

Samples:
```js
[3, 4, -1, 1] -> 2 
[1, 2, 0] -> 3
```
Solution:
```js
function minPlus(arr) {
  // let positives = [...new Set(arr.filter((x) => x > 0).sort((a, b) => a - b))];
  let positives = arr.filter((x) => x > 0).sort((a, b) => a - b);
  positives = [...new Set(positives)];
  for (let i = 0; i <= positives.length; i++) {
    if (positives[i] + 1 != positives[i + 1]) {
      return positives[i] + 1;
    }
  }
}

console.log(minPlus([3, 4, -1, 1])); // 2
console.log(minPlus([3, 3, 4, -1, 1, 2])); // 5
console.log(minPlus([1, 2, 0])); // 3
```