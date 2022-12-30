## [Upstream/Downstream](https://www.codewars.com/kata/58162692c2a518f03a000189)

- Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.
  
Input:
  - You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

Output:
  - The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.
  
#### Solution:
```js
function time(distance, boatSpeed, stream) {
  if (stream.includes("Downstream")) {
    boatSpeed = boatSpeed + parseInt(stream.split(" ")[1]);
  } else {
    boatSpeed = boatSpeed - stream.split(" ")[1];
  }
  return parseFloat((distance / boatSpeed).toFixed(2));
}

console.log(time(24, 10, "Downstream 2")); // 2
console.log(time(24, 14, "Upstream 2")); // 2
console.log(time(105, 23, "Downstream 10")); // 3.18
```