## SevenAte9 

- Write a function that removes every lone 9 that is inbetween 7s.

Examples:
```js
"79712312" --> "7712312"
"79797" --> "777"
```
Solution:
```js
function sevenAte9(str) {
  arr = str.split("");
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] == "7" && arr[i] == "9" && arr[i + 1] == "7") {
      arr.splice(i, 1);
    }
  }

  return arr.join("");
}

console.log(sevenAte9("79712312")); // 7712312
console.log(sevenAte9("79797")); // 777
console.log(sevenAte9("165561786121789797")); // 16556178612178977
```