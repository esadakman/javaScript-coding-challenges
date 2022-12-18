## Break camelCase

- Break camelCase

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