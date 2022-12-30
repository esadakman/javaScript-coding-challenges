## [Regex Password Validation](https://www.codewars.com/kata/52e1476c8147a7547a000811)

- You need to write regex that will validate a password to make sure it meets the following criteria:
  - At least six characters long
  - contains a lowercase letter
  - contains an uppercase letter
  - contains a digit
  - only contains alphanumeric characters (note that '_' is not alphanumeric) 
 
#### Solution:
```js
const REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;
```

```md
^               # start of input 
(?=.*?[A-Z])    # For at least one upper case letter
(?=.*?[a-z])    # For at least one lower case letter
(?=.*?[0-9])    # For at least one number
[A-Za-z0-9]{6,} # For at least 6 characters of [A-Za-z0-9]
$               # end of input  
```