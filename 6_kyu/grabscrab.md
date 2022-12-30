## [Arrh, grabscrab!](https://www.codewars.com/kata/52b305bec65ea40fe90007a7)

- Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

- At long last, we need a way to unscramble what these pirates are saying.

- Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

#### Examples:

```js
grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]); // ["sport", "ports"]
```

- Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

#### Solution:

```js
function grabscrab(anagram, dictionary) {
  anagram = anagram.split("").sort().join("");
  const arr = dictionary.map((i) => [i.split("").sort().join(""), i]);
  return arr.filter((j) => j[0] === anagram).map((j) => j[1]);
}

console.log(grabscrab("trisf", ["first"])); // ["first"]
console.log(grabscrab("oob", ["bob", "baobab"])); // []
console.log(grabscrab("ainstuomn", ["mountains", "hills", "mesa"])); // ["mountains"]
```
