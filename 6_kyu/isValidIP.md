## [IP Validation](https://www.codewars.com/kata/515decfd9dcfc23bb6000006)

- Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between `0` and `255`, inclusive.

Valid inputs examples:

```js
1.2.3.4
123.45.67.89
```

Invalid input examples:

```js
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
```

Notes:
- Leading zeros (e.g. `01.02.03.04`) are considered invalid
- Inputs are guaranteed to be a single string

#### Solution:

```js
function isValidIP(str) {
  const arr = str.split(".").filter((el) => {
    return !/^0.|\D/g.test(el);
  });

  return arr.filter((i) => i.length && i >= 0 && i <= 255).length === 4;
};

console.log(isValidIP("0.0.0.0")); // true
console.log(isValidIP("137.255.156.100")); // true
console.log(isValidIP('abc.def.ghi.jkl')); // false
console.log(isValidIP('01.02.03.04')); // false
console.log(isValidIP('12.34.56')); // false

```
