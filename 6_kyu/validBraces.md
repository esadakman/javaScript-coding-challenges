## [Valid Braces](https://www.codewars.com/kata/5277c8a221e209d3f6000b56)

- Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

- This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

- All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

#### What is considered Valid?
- A string of braces is considered valid if all braces are matched with the correct brace.

#### Examples: 
```js
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
```
#### Solution:
```js
function validBraces(braces){
  const first = ['(', '[', '{']; 
  let res = [];
  for (i in braces) {
    if (first.includes(braces[i])){  
      res.push(braces[i]);
    } else {
      if (res.length === 0) return false;
      let lastItem  = res[res.length - 1];
      if (
        (braces[i] === "]" && lastItem  === "[") ||
        (braces[i] === "}" && lastItem  === "{") ||
        (braces[i] === ")" && lastItem  === "(")
      ) {
        res.pop();
      } else {
        break;
      }
    }
  }
  return res.length === 0;
}

console.log(validBraces("({})[({})]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("())({}}{()][][")); // false
console.log(validBraces("}}]]))}])")); // false
```