## [Anagram Detection](https://www.codewars.com/kata/529eef7a9194e0cbc1000255)

- An anagram is the result of rearranging the letters of a word to produce a new word.

<b>Note</b>: anagrams are case insensitive

- Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Samples:
- `"foefet"` is an anagram of `"toffee"`

- `"Buckethead"` is an anagram of `"DeathCubeK"`
 
 
#### Solution: 
```js
var isAnagram = function (test, original) {
  return test.toLowerCase().split("").sort().join("") ==
    original.toLowerCase().split("").sort().join("")
    ? true
    : false;
};

console.log(isAnagram("foefet", "toffee")); // true
```