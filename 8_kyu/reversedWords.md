## [Reversed Words](https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript)

- Complete the solution so that it reverses all of the words within the string passed in.

#### Examples:

```js
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
```


#### Solution:

```js
function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}

console.log(reverseWords("hello world!")); // "world! hello"
console.log(reverseWords("yoda doesn't speak like this")); // "this like speak doesn't yoda" 
```
