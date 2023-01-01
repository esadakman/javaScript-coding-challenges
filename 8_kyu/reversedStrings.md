## [Reversed Strings](https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript)

- Complete the solution so that it reverses the string passed into it.

#### Examples:

```js
'world'  =>  'dlrow'
'word'   =>  'drow'
```


#### Solution:

```js
function solution(str){
  return str.split("").reverse().join("")
}

console.log(solution("world")); // "dlrow"
console.log(solution("hello")); // "olleh" 
```
