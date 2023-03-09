## [A Before M](https://www.codewars.com/kata/5745e96b0f43d3ad18000e8d)

- Write a function that accepts an array of randomized letters "a" to "z" and returns true if the letter "a" is before the letter "m" in the array, and returns false if the letter "m" is before the letter "a".

- Letters in the provided array will only be downcase and there will only be one instance of a letter in the array, resulting in an array that is 26 elements long.

#### Example:

```js
randoArray = "q a z w s x e d c r f v t g b y h n u j m i k o l p".split(' ')
aBeforeM(randoArray) // => true
randoArray2 = "p o l i k u j m y h n t g b r f v e d c w s x q a z".split(' ')
aBeforeM(randoArray2) // => false
```


#### Solution:

```js
function isABeforeM(arr){
  return arr.findIndex(i => i === "a") < arr.findIndex(i => i === "m");
}

console.log(isABeforeM(["t","g","b","v","f","r","y","h","n","c","d","e","u","j","m","x","s","w","i","k","z","a","q","o","l","p"])); false 

```
