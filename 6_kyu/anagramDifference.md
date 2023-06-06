## [Anagram difference](https://www.codewars.com/kata/5b1b27c8f60e99a467000041)

##### Given two words, how many letters do you have to remove from them to make them anagrams?

#### Example

- First word : c od e w ar s (4 letters removed)
- Second word : ha c k er r a nk (6 letters removed)
- Result : <b>10<b>

#### Hints

- A word is an anagram of another word if they have the same letters (usually in a different order).
- Do not worry about case. All inputs will be lowercase.

#### Solution:

```js
function anagramDifference(w1, w2) {
  const count1 = getCount(w1);
  const count2 = getCount(w2);
  let removalCount = 0;

  for (let char in count1) {
    if (count1.hasOwnProperty(char)) {
      const countDiff = Math.abs(count1[char] - (count2[char] || 0));
      removalCount += countDiff;
    }
  }

  for (let char in count2) {
    if (count2.hasOwnProperty(char) && !count1[char]) {
      removalCount += count2[char];
    }
  }

  return removalCount;
}

function getCount(word) {
  const count = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

// Example usage:
const w1 = "code wars";
const w2 = "hacker rank";
const difference = anagramDifference(w1, w2);
console.log(difference); // Output: 10
```
