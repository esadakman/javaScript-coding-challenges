## [Handshake Problem](https://www.codewars.com/kata/5574835e3e404a0bed00001b)

- Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

- Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

- However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

- Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

#### Solution:

```js
function getParticipants(h){
  for (var i = 0, counter = 1; i < h; i += counter++);
  return counter > 1 ? counter : 0;
}

console.log(getParticipants(0)); // 0
console.log(getParticipants(1)); // 2
console.log(getParticipants(3)); // 3
console.log(getParticipants(6)); // 4
```