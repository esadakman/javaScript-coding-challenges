## Sliding Window

- Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

#### Examples:
```js
given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)
```
#### Solution:
```js
function sliding(arr, k) {
  newArr = [];
  for (
    let start = 0, end = k;
    start < arr.length - k, end <= arr.length;
    start++, end++
  ) {
    newArr.push(Math.max(...arr.slice(start, end)));
  }
  return newArr;
}

console.log(slidingWindow([10, 5, 2, 7, 8, 7], 3)); // 10, 7, 8, 9
```