## [The longest bracket substring in the string](https://www.codewars.com/kata/584c3e45710dca21be000088)

- Given a string str consisting of some number of "(" and ")" characters, your task is to find the longest substring in str such that all "(" in the substring are closed by a matching ")". The result is the length of that substring.

#### For example:

```js
"()()(" => 4
Because "()()" is the longest substring, which has a length of 4
```

#### Note:

- All inputs are valid.
- If no such substring found, return 0.
- Please pay attention to the performance of code. ;-)
- In the performance test(100000 brackets str x 100 testcases), the time consuming of each test case should be within 35ms. This means, your code should run as fast as a rocket ;-)

#### Some Examples

```js
findLongest("()()("); // returns 4
findLongest("(()())"); // returns 6
findLongest("())(()))"); // returns 4
findLongest("))(("); // returns 0
```

#### Solution:

```js
function findLongest(str) {
  let stack = []; // Stack to store indices of opening brackets '('
  let lengths = []; // Array to store lengths of valid substrings
  let base = -1; // base index of valid substrings

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else if (str[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
        if (stack.length > 0) {
          lengths.push(i - stack[stack.length - 1]);
        } else {
          lengths.push(i - base);
        }
      } else {
        base = i;
      }
    }
  }

  return Math.max(0, ...lengths);
}

console.log(findLongest("()()(")); // logs 4
console.log(findLongest("(()())")); // logs 6
console.log(findLongest("())(()))")); // logs 4
console.log(findLongest("))((")); // logs 0
```
