 
## [Moving Zeros To The End](https://www.codewars.com/kata/52597aa56021e91c93000cb0)
- Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

#### Examples:
```js
moveZeros([false,1,0,1,2,0,1,3,"a"])
returns[false,1,1,2,1,3,"a",0,0]
```
#### Solutions:
```js
function moveZeros(arr) {
  let a = arr.filter((x) => x !== 0);
  let b = arr.filter((x) => x === 0);
  return a.concat(b);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// [false, 1, 1, 2, 1, 3, 'a', 0, 0]
```