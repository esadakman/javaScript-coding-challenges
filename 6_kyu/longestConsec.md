## [Consecutive strings](https://www.codewars.com/kata/56a5d994ac971f1ac500003e)

- You are given an array(list) `strarr` of strings and an integer `k`. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

#### For instance:

```js
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
```

- n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

#### Note

- consecutive strings : follow one after another without an interruption

#### Solution:

```js
function longestConsec(strarr, k) {
  let longestStr = "";
  if (strarr.length < k || strarr.length < 1 || k < 0) {
    return "";
  } else {
    for (let i = 0; i < strarr.length; i++) {
      let newStr  = strarr.slice(i, i + k).join(""); 
      if (newStr .length > longestStr.length) {
        longestStr = newStr ;
      }
    } 
  }
  return longestStr;
}

console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"],1)); // "oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3)); // ""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); // "ixoyx3452zzzzzzzzzzzz"
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
); // ""
```
