## [Keypad horror](https://www.codewars.com/kata/5572392fee5b0180480001ae)

- Having two standards for a keypad layout is inconvenient!
- Computer keypad's layout:

<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Numpad.svg" width="40%" alt="numpad"/>

- Cell phone keypad's layout:
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Mobile_phone_keyboard.svg" width="30%" alt="phone"/>

- Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

##### Example:

"789" -> "123"

##### Notes:

You get a string with numbers only

#### Solution:

```js
function computerToPhone(numbers) {
  return numbers.split('').map(digit => ({0:'0', 1:'7', 2:'8', 3:'9', 4:'4', 5:'5', 6:'6', 7:'1', 8:'2', 9:'3'})[digit] || '').join('');
}


console.log(computerToPhone("0789456123")); // "0123456789"
console.log(computerToPhone("000")); // "000"
console.log(computerToPhone("94561")); // "34567"
console.log(computerToPhone("")); // ""
```
