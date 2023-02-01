## [Exes and Ohs](https://www.codewars.com/kata/55908aad6620c066bc00002a)

- Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

#### Examples input/output:

```js
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

#### Solution 1:

```js
function XO(str) {
  let counterX = str.match(/x/gi);
  let counterO = str.match(/o/gi);
  return (counterX && counterX.length) === (counterO && counterO.length);
}

console.log(XO("xo")); // true
console.log(XO("xxOo")); // true
```

#### Solution 2:

```js
function XO(str) {
  str = str.toLowerCase();
  counterX = 0;
  counterO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      counterX++;
    } else if (str[i] == "o") {
      counterO++;
    }
  }
  return counterO === counterX;
}

console.log(XO("xxxm")); // false
```
