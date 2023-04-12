## [A String of Sorts](https://www.codewars.com/kata/536c6b8749aa8b3c2600029a)

- Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

```js
sortString("foos", "of")       => "oofs"
sortString("string", "gnirts") => "gnirts"
sortString("banana", "abn")    => "aaabnn"
```

- To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

- Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.

Solution:

```js
function sortString(string, ordering) {
  ordering = ordering.split``;
  const arr1 = string.split``
    .filter((v) => ordering.includes(v))
    .sort((a, b) => ordering.indexOf(a) - ordering.indexOf(b));
  const arr2 = string.split``.filter((v) => !ordering.includes(v));
  return `${arr1.join``}${arr2.join``}`;
}
console.log(sortString("foos", "of")); // "oofs"
console.log(sortString("banana", "abn")); // "aaabnn"
```
