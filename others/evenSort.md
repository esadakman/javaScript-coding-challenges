## Even Sort

- Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
- Return any array that satisfies this condition.

Samples:
```js
Input: nums = [3,1,2,4] 
Output: [2,4,3,1]
```
Examples:
```js
function evenSort(arr) {
  return [...arr.filter((x) => x % 2 == 0), ...arr.filter((x) => x % 2 == 1)];
}

console.log(evenSort([3, 1, 2, 4])); // [2, 4, 3, 1]
```