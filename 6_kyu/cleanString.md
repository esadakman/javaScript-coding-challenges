## [Backspaces in string](https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript)
- Assume `"#"` is like a backspace in string. This means that string `"a#bc#d"` actually is `"bd"`

- Your task is to process a string with `"#"` symbols.

#### Examples:

```js
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
```
 

#### Solution:

```js
function cleanString(s) { 
  s = s.split(""); 
  for (let i = 0; i < s.length; i++) { 
    if (s[i] === "#") { 
      s[i] = ""; 
      s[i - 1] = "";
      s = s.filter((j) => j !== ""); 
      i -= 2;
    }
  }
  return s.join("");
}

console.log(cleanString('abc#d##c')); // 'ac'
console.log(cleanString('abc####d##c#')); // '' 
```
