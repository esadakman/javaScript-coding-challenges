## [Alternating between three values](https://www.codewars.com/kata/596776fbb4f24d0d82000141/javascript)

- Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

```js
  f(a) = b
  f(b) = c
  f(c) = a
```

#### Example:

```js
f( 3, { a:3, b:4, c:5 } ) => 4
```

#### Solution:

```js
function f(x, cc) {
  let arr = Object.values(cc);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x && arr[i + 1] === undefined) {
      return arr[0];
    }
    if (arr[i] === x) {
      return arr[i + 1];
    }
  }
}

const cc = { a: 3, b: 4, c: 5 };
console.log(f(3, cc)); // Output: 4
```
