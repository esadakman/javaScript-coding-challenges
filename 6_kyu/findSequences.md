## [Find the integer sequences](https://www.codewars.com/kata/582aad136755daf91a000021/javascript)

```js
For example, n = 15
valid integer sequences:
[1,2,3,4,5]  (1+2+3+4+5==15)
[4,5,6]          (4+5+6==15)
[7,8]              (7+8==15)
```

The result should be an array `[sequence 1,sequence 2...sequence n],` sorted by ascending order of the length of sequences; If no result found, return [].

#### Examples:

```js
findSequences(3) === [[1, 2]];

findSequences(15) ===
  [
    [7, 8],
    [4, 5, 6],
    [1, 2, 3, 4, 5],
  ];

findSequences(20) === [[2, 3, 4, 5, 6]];

findSequences(100) ===
  [
    [18, 19, 20, 21, 22],
    [9, 10, 11, 12, 13, 14, 15, 16],
  ];

findSequences(1) === [];
```

#### Solution:

```js
function findSequences(n) {
  const result = [];

  for (let start = 1; start < n; start++) {
    let sum = start;
    const sequence = [start];

    for (let current = start + 1; sum < n; current++) {
      sequence.push(current);
      sum += current;

      if (sum === n) {
        result.push(sequence.slice()); // Push a copy of the sequence to the result
        break;
      }
    }
  }

  result.sort((a, b) => a.length - b.length);
  return result;
}

console.log(findSequences(3)); //  [[1,2]]

console.log(findSequences(15)); //  [[7,8],[4,5,6],[1,2,3,4,5]]

console.log(findSequences(20)); //  [[2, 3, 4, 5, 6]])

console.log(findSequences(100)); //  [[18, 19, 20, 21, 22], [9, 10, 11, 12, 13, 14, 15, 16]]

console.log(findSequences(1)); //  []
```
