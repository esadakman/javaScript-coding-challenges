## Convert string to camel case

- Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 

Examples: 
```js
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
```
Solution:
```js
function toCamelCase(str) {
  if (str[0] == str[0].toLowerCase()) {
    str = str.split("-").join(" ");
    arr = str
      .split(" ")
      .map((first) => first.charAt(0).toUpperCase() + first.substring(1));
    let newStr = arr.join("");
    return newStr[0].toLowerCase() + newStr.substring(1);
  } else {
    return (str = str.replaceAll("_", ""));
  }
}

console.log(toCamelCase("the-stealth-warrior")); // theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior
```