## [Find Position in Sequence](https://www.codewars.com/kata/660323a44fe3e41cff41e4e9)

- Given an increasing sequence where each element is an integer composed of digits from a given set `t`.

- For example, if `t = { 1, 5 }`, the sequence would be: `1, 5, 11, 15, 51, 55, 111, 115, ...` 

- Another example, `if t = { 4, 0, 2 }`, the sequence would be: `0, 2, 4, 20, 22, 24, 40, 42, ...`


#### Task
In this kata, you need to implement a function `findpos(n, t)` that receives a integer `n` and a table/set `t` representing the set of digits, and returns the position of `n` in the sequence.

```js
findpos(11, { 1 }) --> 2
findpos(55, { 1, 5 }) --> 6
findpos(42, { 4, 0, 2 }) --> 8
findpos(1337, { 1, 3, 7 }) --> 54
findpos(123456789, { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }) --> 123456790
```
#### Note
- The integer `n` will always be in the sequence.
#### Solution:

```javascript
function findpos(n, t) {
    // Determine the modifier based on whether 0 is in the set
    const modifier = t.has(0) ? 1 : 0;

    // Create a map to store the order of each digit in the set
    const orderMap = new Map([...t].sort((a, b) => a - b).map((number, index) => [number.toString(), index + 1 - modifier]));

    // Calculate the position of n in the sequence
    return n.toString()
        .split("")
        .reduceRight((acc, number, place, { length }) => {
            return acc + orderMap.get(number) * t.size ** (length - place - 1);
        }, 0 + modifier);
}


// Examples
console.log(findpos(11, new Set([1]))); // Output: 2
console.log(findpos(55, new Set([1, 5]))); // Output: 6

```
