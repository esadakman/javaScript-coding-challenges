## [Find Cracker.](https://www.codewars.com/kata/59f70440bee845599c000085)

- Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score.

##### Example:

```js
var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 140, ["B", "A", "A", "A"]],
  ["name3", 200, ["B", "A", "A", "C"]],
];
```

- The scores for each grade is:

  - A: 30 points
  - B: 20 points
  - C: 10 points
  - D: 5 points
  - Everything else: 0 points

- If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

- Returns the name of the hacked name as an array when scoring with this rule.

```js
var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
  ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
];

return ["name1", "name3"];
```

#### Solution:

```js
function findHack(arr) {
  const dict = { A: 30, B: 20, C: 10, D: 5 };
  return arr.filter(([_, sum, values]) => {
    const total = values.reduce((acc, curr) => acc + (dict[curr] || 0), 0) + (values.length >= 5 && values.every(v => v === "A" || v === "B") ? 20 : 0);
    return total !== sum;
  }).map(([id, _, __]) => id);
}
```
