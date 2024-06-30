## [Email Address Obfuscator](https://www.codewars.com/kata/562d8d4c434582007300004e/javascript)

- Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is by substituting the `@` and `.` characters for their literal equivalents in brackets.

##### Example 1:

```js
user_name@example.com
=> user_name [at] example [dot] com
```
##### Example 2:

```js
af5134@borchmore.edu
=> af5134 [at] borchmore [dot] edu
```
##### Example 3:

```js
jim.kuback@ennerman-hatano.com
=> jim [dot] kuback [at] ennerman-hatano [dot] com
```

- Using the examples above as a guide, write a function that takes an email address string and returns the obfuscated version as a string that replaces the characters `@` and `.` with `[at]` and `[dot]`, respectively.

### Notes

- Input `(email)` will always be a string object. Your function should return a string.
- Change only the `@` and `.` characters.
- Email addresses may contain more than one `.` character.
- Note the additional whitespace around the bracketed literals in the examples!

#### Solution:

```js
obfuscate = function (email) {
  return email.replace(/@/g, " [at] ").replace(/\./g, " [dot] ");
};

console.log(obfuscate("test@123.com")); // 'test [at] 123 [dot] com'
console.log(obfuscate("Code_warrior@foo.ac.uk")); // 'Code_warrior [at] foo [dot] ac [dot] uk'
```
