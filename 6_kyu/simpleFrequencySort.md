## [Simple frequency sort](https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc)

- In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

#### Examples :

```js
solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
```

- More examples in test cases.

#### Solution :

```js
function solve(arr) {
  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  } 
  return arr.sort((a, b) => counts[b] - counts[a] || a - b);
}

console.log(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1])); //  [1,1,1,0,0,6,6,8,8,2,3,5,9]
console.log(solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4])); //  ,[9,9,9,9,4,4,5,5,6,6]
console.log(solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0])); //  ,[0,0,4,4,9,9,3,5,7,8]
```
