## [Next Prime](https://www.codewars.com/kata/58e230e5e24dde0996000070)

- Get the next prime number!
- You will get a number n (>= 0) and your task is to find the next prime number.
- Make sure to optimize your code: there will numbers tested up to about 10^12.

#### Examples:
```js
5   =>  7
12  =>  13
```  
#### Solution: 
````js
function nextPrime(n) {
  let isPrime = (num) => {
    for (var i = 2; i < Math.sqrt(num) + 1; ++i) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  };
  if (n <= 1) return 2;
  let next = 0;
  let i = n + 1; 
  while (next == 0) {
    if (isPrime(i)) {
      next = i;
    } else {
      i++;
    }
  }
  return next; 
}


console.log(nextPrime(0)); // 2
console.log(nextPrime(11)); // 13
console.log(nextPrime(17)); // 19
console.log(nextPrime(2971)); // 2999
````
 