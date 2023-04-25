## [Binary to Text (ASCII) Conversion](https://www.codewars.com/kata/5583d268479559400d000064/javascript)

- Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

- Each 8 bits on the binary string represent 1 character on the ASCII table.

- The input string will always be a valid binary string.

- Characters can be in the range from "00000000" to "11111111" (inclusive)

- Note: In the case of an empty binary string your function should return an empty string.

#### Solution:

```js
function binaryToString(binary) {
  if (!binary) {
    return "";
  }
  // Split the binary string into 8-bit chunks
  const chunks = binary.match(/.{1,8}/g);

  // Convert each 8-bit chunk into its ASCII equivalent character
  const chars = chunks.map((chunk) => String.fromCharCode(parseInt(chunk, 2)));

  // Join the characters to form the final string
  return chars.join("");
}

console.log(binaryToString("01100001")); // 'a'
console.log(
  binaryToString("01001011010101000100100001011000010000100101100101000101")
); // 'KTHXBYE'
```
