## [Clocky Mc Clock-Face](https://www.codewars.com/kata/515f51d438015969f7000013)

- Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

- And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

- Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

- What a bunch of cheapskates!

- Can you do it?

#### Kata
- Given the `angle` (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.

#### Examples
- `12:00` = 0 degrees

- `03:00` = 90 degrees

- `06:00` = 180 degrees

- `09:00`= 270 degrees

- `12:00`= 360 degrees

#### Notes
- 0 <= `angle` <= 360

- Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.

    - 3 o'clock is `03:00`, not `15:00`
    - 7 minutes past midnight is `12:07`
    - 7 minutes past noon is also `12:07`


#### Solution:
```js
var whatTimeIsIt = function (angle) {
  const hour = (Math.floor(angle / 30) || 12).toString().padStart(2, "0");
  const min = Math.floor((angle % 30) * 2)
    .toString()
    .padStart(2, "0");
  return `${hour}:${min}`;
};

console.log(whatTimeIsIt(180)); // "06:00"
console.log(whatTimeIsIt(360)); // "12:00"
```