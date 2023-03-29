## [Remove the parentheses](https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8)

- In this kata you are given a string for example:

```js
"example(unwanted thing)example"
```

- Your task is to remove everything inside the parentheses as well as the parentheses themselves.

- The example above would return:

```js
"exampleexample"
```

#### Notes
- Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like `"[]"` and `"{}"` as these will never appear.
- There can be multiple parentheses.`
- The parentheses can be nested.

#### Solution:
```js
function removeParentheses(s) {
  const res = s.replace(/\([^()]+\)/g, '');
  return /\(|\)/g.test(res) ? removeParentheses(res) : res;
}

console.log(removeParentheses("example (unwanted thing) example")); // "example  example"
console.log(removeParentheses("a (bc d)e")); // "a e"
console.log(removeParentheses("ello example (words(more words) here) something")); // "hello example  something"
```