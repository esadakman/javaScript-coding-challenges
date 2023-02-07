## [zipWith](https://www.codewars.com/kata/5825792ada030e9601000782)

- `zipWith` ( or `zip_with` ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
- The function value is one new array.
- If the arrays are of unequal length, the output will only be as long as the shorter one.
  (Values of the longer array are simply not used.)
- Inputs should not be modified.

#### Samples:

```js
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
```

##### Input validation:

- Assume all input is valid.

#### Solution:

```js
function zipWith(fn, a0, a1) {
  let res = [];
  const minLen = Math.min(a0.length, a1.length); 
  for (let i = 0; i < minLen; i++) {
    res.push(fn(a0[i], a1[i]));
  }
  return res;
}

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])); // [1,10,100,1000]
console.log(zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )); // [0,2,4,6]
console.log(zipWith( (a,b) => a+b, [0,1,2,3], [0,1,2,3] )); // [0,2,4,6] 
```
