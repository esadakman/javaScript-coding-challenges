## Bumps in the Road

- Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
- Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("\_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

Samples:
```js
bump("\_nnnnnnn_n**n\_\_\_\_**nn**nn_nnn") => "Car Dead"\
bump("\_\_\_\_**n*\_\_n*") => "Woohoo!"
```
Solution:
```js
const bump = (str) => {
  let bumpy = str.split("n").length - 1;
  return bumpy > 15 ? "Car Dead" : "Woohoo!";
};

console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); // Car Dead
console.log(bump("______n___n_")); // Woohoo!
```