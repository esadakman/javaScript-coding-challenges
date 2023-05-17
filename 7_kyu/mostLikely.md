## [Most Likely](https://www.codewars.com/kata/56644a421b7c94c622000056)

##### Story

- Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

- For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

#### Examples (input -> output):

```js
Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
```

#### Solution:

```js
function mostLikely(prob1, prob2) {
  // Split the probabilities into numerators and denominators
  var prob1Parts = prob1.split(":").map(Number);
  var prob2Parts = prob2.split(":").map(Number);

  // Calculate the fractions
  var prob1Fraction = prob1Parts[0] / prob1Parts[1];
  var prob2Fraction = prob2Parts[0] / prob2Parts[1];

  // Compare the fractions and return the result
  return prob1Fraction > prob2Fraction;
}
```
