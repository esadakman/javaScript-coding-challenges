## [Character with longest consecutive repetition](https://www.codewars.com/kata/586d6cefbcc21eed7a001155)

- For a given string `s` find the character `c` (or `C`) with longest consecutive repetition and return:

```js
[c, l];
```

- where `l` (or `L`) is the length of the repetition. If there are two or more characters with the same `l` return the first in order of appearance.

- For empty string return:

```js
["", 0];
```

In <b>JavaScript:</b> If you use `Array.sort` in your solution, you might experience issues with the random tests as `Array.sort` is not stable in the Node.js version used by CodeWars. This is not a kata issue.

##### Task

- In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

#### Solution :

```js
function longestRepetition(s) {
  let res = "";
  let counter = 1;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      counter++;
    } else {
      if (arr.every((v) => v < counter)) {
        res = s[i] + counter;
      }
      arr.push(counter);
      counter = 1;
    }
  }
  return !res ? ["", 0] : [res[0], Number(res.slice(1))];
}

console.log(longestRepetition("aaaabb")); // ["a",4]
console.log(longestRepetition("bbbaaabaaaa")); // ["a",4]
console.log(longestRepetition("cbdeuuu900")); // ["u",3]
console.log(longestRepetition("")); // ["",0]
```
