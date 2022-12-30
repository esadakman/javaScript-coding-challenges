## [Pair of gloves](https://www.codewars.com/kata/58235a167a8cb37e1a0000db)

- Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
- Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Samples:
```js
input = ["red", "green", "red", "blue", "blue"] 
result = 2 because (1 red pair + 1 blue pair) 
input = ["red", "red", "red", "red", "red", "red"] 
result = 3 because (3 red pairs)
```
#### Solution:
```js
const numberOfPairs = (arr) => {
  var gloves = arr.reduce(function (x, y) {
    return (x[y] = (x[y] || 0) + 1), x;
  }, []);
  let count = 0;
  for (pair in gloves) {
    count += Math.floor(gloves[pair] / 2);
  }

  return count;
};

console.log(numOfPairs(["red", "green", "red", "blue", "blue"])); // 2
console.log(numOfPairs(["red", "red", "red", "red", "red", "red"])); // 3
```