## [Triangular Treasure](https://www.codewars.com/kata/525e5a1cb735154b320002c8/javascript)

- Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

#### Examples:

```js
1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
```

- You need to return the nth triangular number. You should return 0 for out of range values:

#### For example: (Input --> Output)

```js
0 --> 0
2 --> 3
3 --> 6
-10 --> 0
```

#### Solution:

```js
function triangular(n) {
  return n < 1 ? 0 : (n * (n + 1)) / 2;
}

console.log(triangular(0)); // Output: 0
console.log(triangular(2)); // Output: 3
console.log(triangular(3)); // Output: 6
console.log(triangular(-10)); // Output: 0
```
