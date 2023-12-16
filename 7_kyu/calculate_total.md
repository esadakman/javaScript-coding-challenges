## [Calculate Meal Total](https://www.codewars.com/kata/58545549b45c01ccab00058c)

- Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

- You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.

#### Solution:

```js
function calculate_total(subtotal, tax, tip) {
  const total = (subtotal + subtotal * tax / 100 + subtotal * tip / 100).toFixed(2);
  return +total; 
}

console.log(calculate_total(5, 5, 10)); // 5.75
console.log(calculate_total(36.97, 7, 15)); // 45.10
console.log(calculate_total(0.00, 6, 18)); // 0
```
