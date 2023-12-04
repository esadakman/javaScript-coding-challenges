## [What century is it?](https://www.codewars.com/kata/52fb87703c1351ebd200081f)

- Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

```js
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
```

#### Solution:

```js
function whatCentury(year) {
  const n = Math.ceil((parseInt(year, 10) - 1) / 100);
  const suffix = n < 20 ? "th" : { 1: "st", 2: "nd", 3: "rd" }[n % 10] || "th";
  return `${n}${suffix}`;
}

console.log(whatCentury("2154")); // "22nd"
console.log(whatCentury("2259")); // "23rd"
console.log(whatCentury("1124")); // "12th"
console.log(whatCentury("2000")); // "20th"
```
