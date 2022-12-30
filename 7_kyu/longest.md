## [Two to One](https://www.codewars.com/kata/5656b6906de340bd1b0000ac)

- Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
- Return any array that satisfies this condition.

#### Samples:
```js
a = "xyaabbbccccdefww" 
b = "xxxxyyyyabklmopq" 
longest(a, b) -> "abcdefklmopqwxy" 
c = "abcdefghijklmnopqrstuvwxyz"; 
longest(c, c) -> "abcdefghijklmnopqrstuvwxyz"
```
#### Solution:
```js
function longest(s1, s2) {
  let x = s1.concat(s2);
  let y = x.split("").sort();

  let z = new Set(y);
  return Array.from(z).join("");
}

console.log(longest(a, b)); // abcdefklmopqwxy
console.log(longest(c, c)); // abcdefghijklmnopqrstuvwxyz
```