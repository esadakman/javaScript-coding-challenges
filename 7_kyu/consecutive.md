## [How many consecutive numbers are needed?](https://www.codewars.com/kata/559cc2d2b802a5c94700000c)

- Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

#### For example:
- If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

#### Solution:

```js
function consecutive(arr) {
  return arr
    .sort((a, b) => a - b)
    .reduce(
      (count, num, index, sortedArr) =>
        index === 0 ? count : count + num - sortedArr[index - 1] - 1,
      0
    );
}

console.log(consecutive([1,2,3,4])); // 0
console.log(consecutive([])); // 0
console.log(consecutive([1])); // 0
console.log(consecutive([4,8,6])); // 2

```
