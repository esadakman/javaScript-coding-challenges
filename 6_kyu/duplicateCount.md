## [Counting Duplicates](https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript)

### Count the number of Duplicates

- Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.`

- Your task is to process a string with `"#"` symbols.

#### Examples:

"abcde" -> `0 # no characters repeats more than once`
"aabbcde" -> `2 # 'a' and 'b'`
"aabBcde" -> `2 # 'a' occurs twice and 'b' twice (`b`and`B`)`
"indivisibility" -> `1 # 'i' occurs six times`
"Indivisibilities" -> `2 # 'i' occurs seven times and 's' occurs twice`
"aA11" -> `2 # 'a' and '1'`
"ABBA" -> `2 # 'A' and 'B' each occur twice`

#### Solution:

```js
function duplicateCount(text) {
  let res = 0
  let obj = Array.from(text.toLowerCase()).reduce(
    (count, item) => ((count[item] = count[item] + 1 || 1), count),
    {}
  );
  for (key in obj) {
    if (obj.hasOwnProperty(key)) { 
      if (obj[key] > 1) res++ 
    } 
  }
  return res 
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2
```
