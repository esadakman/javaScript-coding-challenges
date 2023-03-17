## [Array Deep Count](https://www.codewars.com/kata/596f72bbe7cd7296d1000029/javascript)

- You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

##### Example

```js
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
```

Solution:

```js
function deepCount(a) {
  return a.reduce(
    (acc, curr) => (Array.isArray(curr) ? (acc += deepCount(curr)) : acc),
    a.length
  );
}

console.log(deepCount([])); // 0
console.log(deepCount([1, 2, 3])); // 3
console.log(deepCount([[[[[[[[[]]]]]]]]])); // 8
```
