## [Survive the attack](https://www.codewars.com/kata/634d0f7c562caa0016debac5)

- Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

#### CONDITIONS

- Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.

  - If the value is the same they both perish
  - If one of the values is empty(different array lengths) the non-empty value soldier survives.

- To survive the defending side must have more survivors than the attacking side.
- In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
  - The initial attack power is the sum of all the values in each array.

#### Samples:

```js
attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]
//0 survivors                4 survivors
//return true 

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]
//1 survivors                3 survivors
//return true
```

#### Solution:

```js
function hasSurvived(attackers, defenders) {
  let leng = Math.max(attackers.length, defenders.length);
  let numAttack = (attDmg = numDefenders = defDmg = 0); 
  for (let i = 0; i < leng; i++) {
    let damage = (defenders[i] || 0) - (attackers[i] || 0);
    if (damage < 0) {
      numAttack++;
      attDmg += -damage;
    } else if (damage > 0) {
      numDefenders++;
      defDmg += damage;
    } 
  }
  return numAttack === numDefenders
    ? defDmg == attDmg
      ? true
      : defDmg > attDmg
    : numDefenders > numAttack;
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])); // false
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])); // true
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])); // true
console.log(hasSurvived([], [1, 2, 3])); // true
```
