## [Decipher this!](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)

#### Task

- You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

- the second and the last letter is switched (e.g. Hello becomes Holle)
- the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces

#### Example

```js
decipherThis("72olle 103doo 100ya"); // 'Hello good day'
decipherThis("82yade 115te 103o"); // 'Ready set go'
```

#### Solution:

```js
function decipherThis(str) {
  return str.split(' ').map(word => {
    let char = String.fromCharCode(parseInt(word)), r = word.slice(String(char.charCodeAt()).length);
    return char + (r.length > 1 ? r.slice(-1) + r.slice(1, -1) + r[0] : r);
  }).join(' ');
}

console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
); // 'Have a go at this and see how you do'
```
