## [Volume of the Largest Cube that Fits Inside a Given Cylinder](https://www.codewars.com/kata/581e09652228a337c20001ac)

- Find the volume of the largest cube that will fit inside a cylinder of given height h and radius r.

Don't round your result. The result needs to be within 0.01 error margin of the expected result.

HINT: There are two cases to consider. Will it be the cylinder's height or the cylinder's radius that determines the maximum size of your cube? An if/else statement might be useful here.

#### Two Examples:

```js
1. for height  3, radius 7 => should return  27.0
2. for height 11, radius 5 => should return 353.55
```

#### Solution:

```js
function cubeVolume(h, r) {
  const maxSideByDiagonal = (2 * r) / Math.sqrt(2);

  if (h >= maxSideByDiagonal) {
    return Math.pow(maxSideByDiagonal, 3);
  } else {
    return Math.pow(h, 3);
  }
}

console.log(cubeVolume(3, 7)); // 27.0
console.log(cubeVolume(11, 5)); // 353.55
console.log(cubeVolume(6, 4)); // 181.019
```
