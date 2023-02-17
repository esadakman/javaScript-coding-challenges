## [Make the Deadfish Swim](https://www.codewars.com/kata/51e0007c1f9378fa810002a9)

- Write a simple parser that will parse and run Deadfish.

- Deadfish has 4 commands, each 1 character long:
  - `i` increments the value (initially 0)
  - `d` decrements the value
  - `s` squares the value
  - `o` outputs the value into the return array
- Invalid characters should be ignored.

##### Example

```js
parse("iiisdoso")  ==>  [8, 64]
```

Solution:

```js
function parse(data) {
  let res = [];
  let current = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "i") {
      current++;
    } else if (data[i] == "d") {
      current--;
    } else if (data[i] == "s") {
      current *= current;
    } else if (data[i] == "o") {
      res.push(current);
    } else {
      continue;
    }
  }
  return res;
}

console.log(parse("ooo")); // [0, 0, 0]
console.log(parse("iiisdoso")); // [ 8, 64 ]
```

Solution 2:

```js
function parse(data) {
  var current = 0,
    res = [];
  for (var c of data) {
    switch (c) {
      case "i":
        current++;
        break;
      case "d":
        current--;
        break;
      case "s":
        current *= current;
        break;
      case "o":
        res.push(current);
        break;
    }
  }
  return res;
}

console.log(parse("iiisxxxdoso")); // [ 8, 64 ]
```
