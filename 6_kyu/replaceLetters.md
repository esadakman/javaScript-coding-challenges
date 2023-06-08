## [Replace letters](https://www.codewars.com/kata/5a4331b18f27f2b31f000085/javascript)

##### In input string `word` (1 word):

- replace the vowel with the nearest left consonant.
- replace the consonant with the nearest right vowel.

P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

#### For example:
```js
'codewars' => 'enedazuu'
'cat' => 'ezu'
'abcdtuvwxyz' => 'zeeeutaaaaa'
```

##### It is preloaded:
```js
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];
```
##### P.S. You work with lowercase letters only.

#### Solution:

```js
function replaceLetters(word) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  const vowels = ['a','e','i','o','u'];
  let result = '';

  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    let newIndex;

    if (vowels.includes(currentLetter)) {
      newIndex = alphabet.indexOf(currentLetter) - 1;
      while (newIndex >= 0 && vowels.includes(alphabet[newIndex])) {
        newIndex--;
      }
      if (newIndex < 0) {
        newIndex = alphabet.length - 1;
        while (vowels.includes(alphabet[newIndex])) {
          newIndex--;
        }
      }
    } else {
      newIndex = alphabet.indexOf(currentLetter) + 1;
      while (newIndex < alphabet.length && !vowels.includes(alphabet[newIndex])) {
        newIndex++;
      }
      if (newIndex >= alphabet.length) {
        newIndex = 0;
        while (!vowels.includes(alphabet[newIndex])) {
          newIndex++;
        }
      }
    }

    result += alphabet[newIndex];
  }

  return result;
}
console.log(replaceLetters('codewars')); // Output: enedazuu
console.log(replaceLetters('cat')); // Output: ezu
console.log(replaceLetters('abcdtuvwxyz')); // Output: zeeeutaaaaa
```
