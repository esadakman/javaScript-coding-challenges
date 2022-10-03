 
## Scramblies

- Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered.

Examples:
```js
scramble('rkqodlw', 'world') ==> True 
scramble('katas', 'steak') ==> False
```
Solutions:
```js
function scramble(str1, str2) {
  const map = {};
  for (let i of str1) map[i] ? map[i]++ : (map[i] = 1);
  for (let j of str2) {
    if (!map[j]) return false;
    map[j] -= 1;
  }
  return true;
} 
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true  
scramble('katas', 'steak') // False
```