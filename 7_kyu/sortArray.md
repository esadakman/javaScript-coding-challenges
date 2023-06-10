## [Sorting Arrays](https://www.codewars.com/kata/57fe864854685b1c420002e0/javascript)

- Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

#### Example 1:

```js
a1 = ["giraffe", "orangutan", "impala", "elephant", "rhino"];
a2 = ["rattlesnake", "eagle", "geko", "iguana", "octopus"];
```

#### Example 2:

```js
a1 = ["jellyfish", "koi", "caribou", "owl", "dolphin"];
a2 = ["ostrich", "jaguar", "deer", "camel", "kangaroo"];

returns[("jaguar", "kangaroo", "camel", "ostrich", "deer")];
```

Each element in the arrays will start with a unique letter so there will only be a single match for each element.

#### Solution:

```js
const sortArray = (a1, a2) => a1.map((v) => a2.find((w) => v[0] === w[0]));

const a1 = ["giraffe", "orangutan", "impala", "elephant", "rhino"];
const a2 = ["rattlesnake", "eagle", "geko", "iguana", "octopus"];
console.log(sortArray(a1, a2)); // ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
```
