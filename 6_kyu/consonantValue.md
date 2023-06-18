## [Consonant value](https://www.codewars.com/kata/59c633e7dcc4053512000073/javascript)

- Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

- We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

- For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

#### Examples:

```js
-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
```

#### Solution:

```js
function consonantValue(str) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let maxValue = 0;
  let currentSum = 0;

  for (let i = 0; i < str.length; i++) {
    if (consonants.includes(str[i])) {
      currentSum += str.charCodeAt(i) - 96; // Subtracting ASCII value of 'a' (97) to get the value of the consonant
    } else {
      maxValue = Math.max(maxValue, currentSum);
      currentSum = 0;
    }
  }

  return Math.max(maxValue, currentSum);
}

console.log(consonantValue("zodiacs")); // Output: 26
console.log(consonantValue("strength")); // Output: 57
```
