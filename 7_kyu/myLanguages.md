## My Language Skills

- You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Samples:

```js
{"Java": 10, "Ruby": 80, "Python": 65} --> ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71} --> ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20} --> []
```
Solution:
```js
function myLanguages(results) {
  return Object.keys(results)
    .sort((a, b) => results[b] - results[a])
    .filter((x) => results[x] >= 60);
}

console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 })); // ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); // ["Ruby", "Python"]
console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 })); // []
```