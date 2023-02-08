## [Hamming Distance](https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69)

- The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

#### Samples:

```js
a = "I like turtles"
b = "I like turkeys"
Result: 3

a = "Hello World"
b = "Hello World"
Result: 0

a = "espresso"
b = "Expresso"
Result: 2
``` 

- You can assume that the two input strings are of equal length.

#### Solution:

```js
function hamming(a, b) {
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) counter++;
  }
  return counter;
}

console.log(hamming("a man a plan a canal", "a man a plan sobanal")); // 3
console.log(hamming("Hello World", "Hello World")); // 0
console.log(hamming("old father, old artificer", "of my soul the uncreated ")); // 24
```
