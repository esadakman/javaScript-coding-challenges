## [Sorted? yes? no? how?](https://www.codewars.com/kata/580a4734d6df748060000045)

- Complete the method which accepts an array of integers, and returns one of the following:

#### Examples:
```js
=> "yes, ascending" - if the numbers in the array are sorted in an ascending order\
=> "yes, descending" - if the numbers in the array are sorted in a descending order\
=> "no" - otherwise

```
You can assume the array will always be valid, and there will always be one correct answer.

#### Solution:

```js
function (array) {
  let arr = JSON.stringify(array);
  array.sort(function (a, b) {
    return a - b;
  });
  if (arr == JSON.stringify(array)) {
    return "yes, ascending";
  } else if (arr == JSON.stringify(array.reverse())) {
    return "yes, descending";
  } else {
    return "no";
  }
}

console.log(isSortedAndHow([1, 2])); // yes, ascending
console.log(isSortedAndHow([15, 7, 3, -8])); // yes, descending
console.log(isSortedAndHow([4, 2, 30])); // no
```