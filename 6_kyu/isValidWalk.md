## [Take a Ten Minutes Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)

- You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

#### Samples:

```js
  isValidWalk(['n','s','n','s','n','s','n','s','n','s']) => true  
  isValidWalk(['w']) => false 
  isValidWalk(['n','n','n','s','n','s','n','s','n','s']) => false  
  isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) => false 
```
- Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

#### Solution:
```js
const isValidWalk = (arr) => {
  var result = arr.reduce((x, y) => {
    if (y in x) {
      x[y]++;
    } else {
      x[y] = 1;
    }
    return x;
  }, []);
  return (result.n == 5 && result.s == 5) || (result.w == 5 && result.e == 5)
    ? true
    : false;
};

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(isValidWalk(["w"])); // false
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // false
```