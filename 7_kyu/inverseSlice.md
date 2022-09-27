## Thinkful - List and Loop Drills: Inverse Slicer 

- Write a function inverse_slice() that takes three arguments: a list items, an integer a and an integer b. The function should return a new list with the slice specified by items[a:b] excluded.

Samples:
```js
inverse_slice([12, 14, 63, 72, 55, 24], 2, 4) 
[12, 14, 55, 24]
```

- The input will always be a valid list, a and b will always be different integers equal to or greater than zero, but they may be zero or be larger than the length of the list.

```js
function inverseSlice(items, a, b) {
  items.splice(a, b - a);
  return items;
}
let ages = [12, 14, 63, 72, 55, 24];

let x = 2;
let y = 4;
console.log(inverseSlice(ages, x, y)); // [12, 14, 55, 24]
```