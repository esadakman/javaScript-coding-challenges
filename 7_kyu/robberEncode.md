## The Robber Language

- The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.
- The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

Samples:

- In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.
`'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)`

Solution:
```js
function robberEncode(sentence) {
  let consonants = "BCDFGHJKLMNPQRSTVWXYZ";
  return sentence
    .split("")
    .map((x) =>
      consonants.includes(x)
        ? `${x}O${x}`
        : consonants.toLowerCase().includes(x)
        ? `${x}o${x}`
        : x
    )
    .join("");
}

console.log(robberEncode("foo bar")); // fofoo bobaror
```