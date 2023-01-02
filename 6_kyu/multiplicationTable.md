## [Multiplication table](https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/javascript)

- Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

```js
1 2 3
2 4 6
3 6 9
```

For the given example, the return value should be:

```js
[
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
];
```

#### Solution :

```js
multiplicationTable = function (size) {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    temp = [];
    for (let j = 1; j <= size; j++) {
      temp.push(j * i);
    }
    arr.push(temp);
  }
  return arr;
};

console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]
```
