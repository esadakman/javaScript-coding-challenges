## [Basket of Fruits](https://www.codewars.com/kata/59eca716da62db9152001bac)

- There are 6 types of fruits in the basket: Apples, Pears, Oranges, Lemons, Bananas and Tomatoes.

Your task: given a total number of fruits as an argument (always positive), return the highest possible number of Bananas, while following ALL the rules below:

- There are 17 more Oranges than Apples.
- There are 40% less Pears than Oranges.
- There are 5/6 more Lemons than Pears.
- There are 3x less Apples than Bananas.
<br>
- There might be some Tomatoes left in the basket after you sort them (we dont want the Tomatoes, people think they are vegetables and it gets confusing).
- If there are not enough total fruits to follow the rules, return "false".
- All fruits must ALWAYS be counted as whole numbers.


#### Solution:

```js
function countBananas(totalFruits) {
  for (let bananas = totalFruits; bananas >= 1; bananas--) {
      const apples = bananas / 3;
      const oranges = apples + 17;
      const pears = 0.6 * oranges;
      const lemons = pears + (5 / 6) * pears;

      const total = bananas + apples + oranges + pears + lemons;

      if (
          Number.isInteger(apples) &&
          Number.isInteger(oranges) &&
          Number.isInteger(pears) &&
          Number.isInteger(lemons) &&
          total <= totalFruits
      ) {
          return bananas;
      }
  }
  return false;
}

console.log(countBananas(81));  // Output: 9
console.log(countBananas(135));  // Output: 39
console.log(countBananas(268));  // Output: 99
```
