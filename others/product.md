## Product of Array

- This is an interview question asked by Uber.
- Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
- For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

#### Solution
```js
const product = (arr) => {
  let newArr = [];
  let multi = arr.reduce((x, y) => x * y);
  for (i = 0; i < arr.length; i++) {
    newArr.push(multi / arr[i]);
  }
  return newArr;
};

console.log(product([10, 5, 9])); // [45, 90, 50]
```