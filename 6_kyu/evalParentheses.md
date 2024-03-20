## [Evaluate the Group of Parentheses](https://www.codewars.com/kata/64b6722493f1050058dc3f98/javascript)

- The function is given a non-empty balanced parentheses string. Each opening '(' has a corresponding closing ')'.
- Compute the total score based on the following rules:
  - Substring s == () has score 1, so "()" should return 1
  - Substring s1s2 has total score as score of s1 plus score of s2, so "()()" should return 1 + 1 = 2
  - Substring (s) has total score as two times score of s, so "(())" should return 2 \* 1 = 2
- Return the total score as an integer.

#### Examples:

```js
eval_parentheses("()") ➞ 1
# 1

eval_parentheses("(())") ➞ 2
# 2 * 1

eval_parentheses("()()") ➞ 2
# 1 + 1

eval_parentheses("((())())") ➞ 6
# 2 * (2 * 1 + 1)

eval_parentheses("(()(()))") ➞ 6
# 2 * (1 + 2 * 1)

eval_parentheses("()(())") ➞ 3
# 1 + 2 * 1

eval_parentheses("()((()))") ➞ 5
# 1 + 2 * 2 * 1
```

#### Solution:

```js
function evalParentheses(parens) {
  let stack = [0];

  for (let char of parens) {
    if (char === "(") {
      stack.push(0);
    } else {
      let last = stack.pop();
      let score = Math.max(2 * last, 1);
      stack[stack.length - 1] += score;
    }
  }

  return stack.pop();
}

// Test cases
console.log(evalParentheses("((()))")); // 4
console.log(evalParentheses("()")); // 1
console.log(evalParentheses("((())())")); // 6
```
