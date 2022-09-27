## Comfortable words

- A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).
- That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.
- The word will always be a string consisting of only ascii letters from a to z.

Solution:

```js
const comfortableWord = word => {
  const left = ["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b"];
  const right = ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"];
  let first = right.includes(word[0]) ? "right" : "left";
  
  for (let i = 1; i < word.length; i++) {
    if (first === "left") {
      if (!right.includes(word[i])) return false;
      first = "right";
    } else if (first === "right"){
      if (!left.includes(word[i])) return false;
      first = "left";
    }
  }
  return true;
};

console.log(comfortableWord("yams")); // true
console.log(comfortableWord("test")); // false
```