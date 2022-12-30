## [Changing letters](https://www.codewars.com/kata/5831c204a31721e2ae000294)

- When provided with a String, capitalize all vowels

#### Samples:

```js
Input: "Hello World!";
Output: "HEllO WOrld!";
```

Note: Y is not a vowel in this kata.

#### Solution:

```js
function swap(string) {
  return string.replace(/[aeiouAEIOU]/g, (cap) => cap.toUpperCase());
}

console.log(swap('"HelloWorld!"')); // HEllOWOrld!
console.log(swap("Codewars")); // COdEwArs
console.log(swap("abracadabra")); // AbrAcAdAbrA
```
