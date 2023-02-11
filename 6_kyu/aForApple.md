## [A for Apple](https://www.codewars.com/kata/55de3f83e92c3e521a00002a/javascript)

#### Task

- Input: Integer n
- Output: String

#### Example

- `a(4)` prints as

```js
   A
  A A
 A A A
A     A
```

- `a(8)` prints as

```js
      A
     A A
    A   A
   A     A
  A A A A A
 A         A
A           A
A             A
```

- `a(12)` prints as

```js
           A
          A A
         A   A
        A     A
       A       A
      A         A
     A A A A A A A
    A             A
   A               A
  A                 A
 A                   A
A                     A
```

Note:

- Each line's length is `2n - 1`
- Each line should be concatenate by line break `"\n"`
- If `n` is less than `4`, it should return ""
- If `n` is odd, `a(n) = a(n - 1)`, eg `a(5) == a(4); a(9) == a(8)`

#### Solution:

```js
function a(n) {
  if (n < 4) return "";
  if (n % 2 !== 0) n -= 1;

  let lineLen = 2 * n - 1;
  let middle = Math.floor(lineLen / 2);
  let res = [];

  for (let i = 0; i < n; i++) {
    let newLine = new Array(lineLen).fill(" ");
    newLine[middle - i] = "A";
    newLine[middle + i] = "A";

    if (i === n / 2) {
      for (let k = middle - i; k < middle + i; k += 2) {
        newLine[k] = "A";
      }
    }
    res.push(newLine.join(""));
  }

  return res.join("\n");
}

console.log(a(4)); // "   A   \n  A A  \n A A A \nA     A"
console.log(a(7)); // "     A     \n    A A    \n   A   A   \n  A A A A  \n A       A \nA         A"
console.log(a(0)); //  ""
```
