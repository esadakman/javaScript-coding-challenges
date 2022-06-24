# javaScript-coding-challenges
### Question 1 
- You have a two-dimensional list in the following format:
- Each sub-list contains two items, and each item in the sub-lists is an integer.
- Write a function process_data()/processData() that processes each sub-list like so:
```js
data = [
  [2, 5],
  [3, 4],
  [8, 7],
];
```
[2, 5] --> 2 - 5 --> -3\
[3, 4] --> 3 - 4 --> -1\
[8, 7] --> 8 - 7 --> 1\
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.
```js
  let multi = 1;
let empty_list = [];
```js
for (var x of data) {
  // ! multi *= x[0]-x[1];
  let fat = x[0] - x[1];
  empty_list.push(fat);
}
for (let y of empty_list) {
  multi *= y;
}
```
