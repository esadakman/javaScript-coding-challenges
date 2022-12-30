## [Isograms](https://www.codewars.com/kata/54ba84be607a92aa900000f1)

- An isogram is a word that has no repeating letters, consecutive or non-consecutive.
- Implement a function that determines whether a string that contains only letters
- is an isogram. Assume the empty string is an isogram. Ignore letter case.
#### Solution:
```js
const isIsogram = (str) => {
  let strArr = str.toLowerCase();
  strArr = strArr.split("");
  let unique = strArr.filter((x, y, z) => z.indexOf(x) === y);
  return str.length != unique.length ? false : true;
};

console.log(isIsogram("DermatoglyphicsSq")); // false
```