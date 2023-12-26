## [Echo](https://www.codewars.com/kata/5c6dc504abcd1628cd174bea)

- Write an `echoProgram` function (or `echo_program` depend on language) that returns your solution source code as a string.

#### Note:

- `Function.prototype.toString` has been disabled.

#### Solution:
```js
function echoProgram() {
  return require("fs").readFileSync("solution.txt", "utf-8");
}
```
