## [Binary Addition](https://www.codewars.com/kata/551f37452ff852b7bd000139)

- Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

- The binary number returned should be a string.
#### Examples:
```js
1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) 
```
#### Solution:
```js
function addBinary(a,b) {
  return (a+b).toString(2);
}

console.log(addBinary(1,2)); // "11"
```
