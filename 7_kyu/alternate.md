## [Length and two values.](https://www.codewars.com/kata/62a611067274990047f431a8/train/javascript)

##### Story

- Given an integer n and two other values, build an array of size n filled with these two values alternating.

#### Examples (input -> output):

```js
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
```

#### Solution:

```js
function alternate(n, firstValue, secondValue){
  return Array.from({length: n}, (_, i) => i % 2 === 0 ? firstValue : secondValue);
}


console.log(alternate(5, true, false));     // [true, false, true, false, true]
console.log(alternate(10, "blue", "red"));  // ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
console.log(alternate(0, "one", "two"));    // []
```
