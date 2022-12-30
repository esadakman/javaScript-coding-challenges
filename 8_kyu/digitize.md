## Convert number to reversed array of digits 

- Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

#### Example(Input => Output): 
```js
35231 => [1,3,2,5,3]
0 => [0]
```
#### Solution:
```js
function digitize(n) {
  return String(n).split("").reverse().map(Number);
}

console.log(digitize(348597)); // [7, 9, 5, 8, 4, 3]
```