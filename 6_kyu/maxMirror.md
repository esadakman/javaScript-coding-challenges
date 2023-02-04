## [The largest "mirror"](https://www.codewars.com/kata/5a3f61bab6cfd7acbc000001)

- We'll think that a "mirror" section in an array is a group of contiguous elements ( > 1) such that somewhere in the array, the same group appears in reverse order. For example, the largest mirror section in [1, 2, 3, 8, 9, 3, 2, 1] is length 3 (the ...`1, 2, 3`... part). Return the length of the largest mirror section in the given array.

- If the mirror doesn't exist or array is empty, return 0.

#### Examples:

```js
maxMirror([1, 2, 3, 8, 9, 3, 2, 1, 9, 8]) → 3
maxMirror([1, 2, 2, 1]) → 4 // palindrome
maxMirror([1, 2, 1, 4]) → 3 // palindrome part (1, 2, 1)
maxMirror([7, 1, 2, 9, 7, 2, 1]) → 2
maxMirror([1, 2, 3, 6, 7, 3, 2, 1, 5]) → 3
maxMirror([1, 2, 2]) → 2 // palindrome part (2, 2)
maxMirror([1, 2, 3]) → 0
maxMirror([1, 5]) → 0
maxMirror([1]) → 0
```

#### Solution:

```js
const maxMirror = (arr) => {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let count = 0;
      for (; i + count < arr.length && j - count >= 0; count++) {
        if (arr[i + count] !== arr[j - count]) {
          break;
        }
      }
      if (count > 1) {
        max = Math.max(max, count);
      }
    }
  }

  return max;
};

console.log(maxMirror([1, 2, 3, 8, 9, 3, 2, 1, 9, 8])); // 3
console.log(maxMirror([1, 1, 2])); // 2
console.log(maxMirror([1, 2, 3])); // 0
console.log(maxMirror([2, 3, 9, 3, 2, 2, 5, 5])); // 5
console.log(maxMirror([1, 2, 3, 6, 7, 3, 2, 1, 5])); // 3
```
