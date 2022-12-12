## The Hashtag Generator

- The marketing team is spending way too much time typing in hashtags.
  Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

```python
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
""                                        =>  false
```

Solution:

```javascript
function generateHashtag(str) {
if (str.trim() != "" && str.length <= 140) {
    const stringWithCamelCase = str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

    const stringWithHashtag = `#${stringWithCamelCase.trim()}`;
    return stringWithHashtag;
  } else return false;
}

console.log(generateHashtag("Do We have A Hashtag")); // #DoWeHaveAHashtag
console.log(generateHashtag("CodeWars is nice")); // #CodewarsIsNice
console.log(generateHashtag("")); // false
```
