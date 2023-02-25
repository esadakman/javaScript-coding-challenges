## [Is my friend cheating?](https://www.codewars.com/kata/5547cc7dcad755e480000004/javascript)

- A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
- Within that sequence, he chooses two numbers, a and b.
- He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
- Given a number n, could you tell me the numbers he excluded from the sequence?

The function takes the parameter: `n` (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

```js
[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
```

- with all (a, b) which are the possible removed numbers in the sequence 1 to n.

`[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...` will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return `nil`).

#### Examples:

```js
removNb(26) should return [(15, 21), (21, 15)]
or
removNb(26) should return { {15, 21}, {21, 15} }
or
removeNb(26) should return [[15, 21], [21, 15]]
or
removNb(26) should return [ {15, 21}, {21, 15} ]
or
removNb(26) should return "15 21, 21 15"
```

or

```cSharp
in C:
removNb(26) should return  {{15, 21}{21, 15}} tested by way of strings.
Function removNb should return a pointer to an allocated array of Pair pointers, each one also allocated.
```

#### Solution:

```js
function removeNb(n) {
  let res = [];
  for (var a = 1; a <= n; a++) {
    let b = ((n * (n + 1)) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) res.push([a, b]);
  }
  return res;
}

console.log(removeNb(26)); // [[15,21], [21,15]]
console.log(removeNb(100)); // []
```
