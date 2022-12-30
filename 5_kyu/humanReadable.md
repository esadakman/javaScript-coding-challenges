## [Human Readable Time](https://www.codewars.com/kata/52685f7382004e774f0001f7) 

- Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
    -  HH = hours, padded to 2 digits, range: 00 - 99
    -  MM = minutes, padded to 2 digits, range: 00 - 59
    -  SS = seconds, padded to 2 digits, range: 00 - 59
- The maximum time never exceeds 359999 (99:59:59) 

#### Solution:
```js
function humanReadable(seconds) {
  return [
    ("0" + parseInt(seconds / (60 * 60))).slice(-2),
    ("0" + parseInt(seconds / 60 % 60)).slice(-2),
    ("0" + parseInt(seconds % 60)).slice(-2),
  ].join(":");
}
 
console.log(humanReadable(86399)); // "23:59:59"
console.log(humanReadable(60)); // "00:01:00"
```