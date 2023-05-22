## [Alphabet symmetry](https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0)

#### Task

- Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

- Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

```js
solve(["abode","ABc","xyzD"]) = [4, 3, 1]
```

- See test cases for more examples.

- Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

- Good luck!

#### Solution:

```js
function solve(arr) {
  const refer = "abcdefghijklmnopqrstuvwxyz";
  const res = [];

  for (const key in arr) {
    let counter = 0;
    for (let i = 0; i < arr[key].length; i++) {
      if (arr[key][i].toLowerCase() === refer[i]) counter++;
    }
    res.push(counter);
  }

  return res;
}

console.log(solve(["abode", "ABc", "xyzD"])); // [4,3,1]
console.log(solve(["abide", "ABc", "xyz"])); // [4,3,0]
console.log(solve(["encode", "abc", "xyzD", "ABmD"])); // [1, 3, 1, 3]
```
