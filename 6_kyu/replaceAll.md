## [replaceAll(input, find, replace)](https://www.codewars.com/kata/52aaf51822e82a808100066b/train/javascript)

- Isn't it annoying how `"string".replace("find", "replace");` only replaces the first match of the `find` string? Write a function, `replaceAll(input, find, replace);` that will replace all matches of the given `find` string with the given `replace` string.

- The function will always be called with three strings, so don't worry about validating the arguments.

- As with the original `"string".replace(find, replace)`, if `find` is an empty string, it should match in-between each character, effectively inserting `replace` in-between each character, including the start and end of the string. I've given you some tests for this to make it a little clearer.

#### Solution :

```js
function replaceAll(input, find, replace) {
  if (find == "") {
    return input === ""
      ? replace
      : replace + input.split("").join(replace) + replace;
  }
  return input.split(find).join(replace);
}

console.log(replaceAll("", "", "-")); // "-", "Empty input, empty find"
console.log(replaceAll("1", "", "-")); // "-1-", "Single-character input, empty find"
console.log(replaceAll("123", "", "-")); // "-1-2-3-", "Empty string as find"
```
