## [The latest clock](https://www.codewars.com/kata/58925dcb71f43f30cd00005f)

#### DESCRIPTION:

- Write a function which receives 4 digits and returns the latest time of day that can be built with
  digits.

- The time should be in HH:MM format.

#### Examples:

```js
digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59" ("19:25" is also a valid time, but 21:59 is later)
```

#### Notes

- Result should be a valid 24-hour time, between 00:00 and 23:59.
- Only inputs which have valid answers are tested.

#### Solution:

```js
function latestClock(a, b, c, d) {
  const digits = [a, b, c, d];
  let maxHour = -1,
    maxMinute = -1;

  // Generate all possible permutations of the digits
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) continue;
      for (let k = 0; k < 4; k++) {
        if (i === k || j === k) continue;
        for (let l = 0; l < 4; l++) {
          if (i === l || j === l || k === l) continue;

          const hour = parseInt(`${digits[i]}${digits[j]}`);
          const minute = parseInt(`${digits[k]}${digits[l]}`);

          // Check if the time is valid
          if (hour < 24 && minute < 60) {
            if (hour > maxHour || (hour === maxHour && minute > maxMinute)) {
              maxHour = hour;
              maxMinute = minute;
            }
          }
        }
      }
    }
  }

  const formattedHour = String(maxHour).padStart(2, "0");
  const formattedMinute = String(maxMinute).padStart(2, "0");
  return `${formattedHour}:${formattedMinute}`;
}

console.log(latestClock(1, 9, 8, 3)); // "19:38"
console.log(latestClock(9, 1, 2, 5)); // "21:59"
console.log(latestClock(0, 0, 0, 0)); // "00:00"
```
