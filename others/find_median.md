## Find Median 

- Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.
- Recall that the median of an even-numbered list is the average of the two middle numbers.
- For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out: 2, 1.5, 2, 3.5, 2, 2, 2

#### Solution
```js
let median = (arr) => {
  newArr = [];
  newArr2 = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr = newArr.sort((a, b) => (a > b ? 1 : -1));
    let middle = Math.floor(newArr.length / 2);
    if (newArr.length % 2 == 0) {
      newArr2.push((newArr[middle - 1] + newArr[middle]) / 2);
    } else {
      newArr2.push(newArr[middle]);
    }
  }
  return newArr2;
};

console.log(median([2, 1, 5, 7, 2, 0, 5])); // [ 2,1.5,2,3.5,2,2,2]
```
