## Convert number to reversed array of digits

- Convert number to reversed array of digits
- Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

```js
function digitize(n) {
  return String(n).split("").reverse().map(Number);
}

console.log(digitize(348597)); // [7, 9, 5, 8, 4, 3]
```