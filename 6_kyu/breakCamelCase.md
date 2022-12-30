## [Break camelCase](https://www.codewars.com/kata/5208f99aee097e6552000148/javascript)

- Complete the solution so that the function will break up camel casing, using a space between words.

Examples:
```js
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
``` 

Solution:
```js 
 function solution(string) {
    return(string.replace(/([a-z])([A-Z])/g, '$1 $2')); 
  } 

  console.log(solution('newLastSayNouns')); // 'new Last Say Nouns' 
  console.log(solution('weekOtherPointAsk')); // 'week Other Point Ask' 
```