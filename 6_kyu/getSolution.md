## [Plus - minus - plus - plus - ... - Sum](https://www.codewars.com/kata/5bc463f7797b00b661000118)

#### Description

- Given an array `[x1, x2, ..., xn]` determine whether it is possible to put `+` or `-` between the elements and get an expression equal to sum. Result is boolean

```js
2 <= n <= 22;
0 <= xi <= 20 - 10 <= sum <= 10;
```

#### Example

`arr = [1, 3, 4, 6, 8]`

`sum = -2`

1 + 3 - 4 + 6 - 8 = -2

Result is: `true`

#### Solution:

```js
function getSolution(arr, sum) {
  if (arr.length === 1) {
    return arr[0] === sum;
  }

  return (
    getSolution(arr.slice(1), sum - arr[0]) ||
    getSolution(arr.slice(1), arr[0] - sum)
  );
}

console.log(getSolution([1, 3, 4, 6, 8], -2)); // true
console.log(getSolution([15, 2, 3], 10)); // true
```
