## CamelCase Method

- Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

```js
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
```

Solution:

```js
String.prototype.camelCase = function () {
  return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function (i) {
    return i.toUpperCase();
  }).replace(/\s/g, "");
};

console.log("test case".camelCase()); // "TestCase"
console.log("camel case method".camelCase()); // "CamelCaseMethod"
console.log("".camelCase()); // "" 
```