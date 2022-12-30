## [Pyramid Array](https://www.codewars.com/kata/515f51d438015969f7000013)

- Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

#### Samples:
```js
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
```
Note: the subarrays should be filled with 1s

#### Solution:
```js
function pyramid(n) {
  const res = [];
  for(let i = 0 ; i < n; i++){
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}

console.log(pyramid(0)); // []
console.log(pyramid(2)); // [[1], [1, 1]]
```