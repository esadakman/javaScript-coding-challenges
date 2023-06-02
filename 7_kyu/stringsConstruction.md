## [Simple Fun #30: Strings Construction](https://www.codewars.com/kata/58870402c81516bbdb000088/solutions/javascript)

- Task
  How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

#### Example

For `A = "abc" and B = "abccba"`, the output should be `2`.

We can construct 2 strings A with letters from `B`.

#### Input/Output

- `[input]` string A

String to construct, A contains only lowercase English letters.

Constraints: `3 ≤ A.length ≤ 9`.

- `[input]` string B

String containing needed letters, B contains only lowercase English letters.

Constraints: `3 ≤ B.length ≤ 50`.

- `[output]` an integer

#### Solution:

```js
function stringsConstruction(A, B) {
  for (let i = 0; ; i++) {
    for (let c of A) {
      if (B.includes(c)) {
        B = B.replace(c, ""); // Remove the character from B
      } else {
        return i; // Character not found, return the current count
      }
    }
  }
}

// Example usage:
const A = "abc";
const B = "abccba";
const result = stringsConstruction(A, B);
console.log(result); // Output: 3
```
