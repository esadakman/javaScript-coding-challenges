## [Average Scores](https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript)
- Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

#### Solution:
```js
function average(scores) {
  return Math.round(
    scores.reduce(function (acc, current) {
      return acc + current;
    }, 0) / scores.length
  );
}

console.log(average([49, 3, 5, 300, 7])); // 73
console.log(average([90, 98, 89, 100, 100, 86, 94])); // 94
```