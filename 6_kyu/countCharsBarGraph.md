## [Character Counter and Bars Graph](https://www.codewars.com/kata/5826773bfad36332bf0002f9)

#### Description

1. Given some text, count each alphabetic character's occurrence in it, regardless of the case.

2. Let's suppose you have to use an old terminal window to represent the occurrencies of each character in a text-based horizontal bar graph. The terminal has a maximum width, provided as parameter (max_units_on_screen), and you have to abide by it.

For example, if the maximum width is 80, your longest bar in the graph will be scaled to this size and all the others have to be represented and scaled proportionally to this size. Every unit of the bar will be represented by the character #. See examples below for typical output format.

3. The bars of the graph have to be sorted by number of occurrencies (from biggest to lowest, before getting scaled), then by alphabetic order of the letter (from a to z). Approximation of decimal numbers will happen on the lowest integer (for example: 57.1, 57.2, 57.68, 57.999 will all get reduced to 57 )

#### Example 1:

Input:

```js
count_and_print_graph("just a short text", 4);
```

Output

```js
t:####
s:##
a:#
e:#
h:#
j:#
o:#
r:#
u:#
x:#
```

#### Example 2:

Input:

```js
count_and_print_graph("just a short text", 23);
```

Output

```js
t:#######################
s:###########
a:#####
e:#####
h:#####
j:#####
o:#####
r:#####
u:#####
x:#####
```

#### Solution:

```js
function countCharsBarGraph(text, maxw) {
  const charCount = {};

  // Count occurrences of each character in the text
  for (let char of text) {
    char = char.toLowerCase();
    if (/^[a-z]$/.test(char)) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  // Sort characters by frequency and then alphabetically
  const sortedChars = Object.keys(charCount).sort((a, b) => {
    if (charCount[b] !== charCount[a]) {
      return charCount[b] - charCount[a];
    } else {
      return a.localeCompare(b);
    }
  });

  // Calculate the scaling factor for the bars
  const maxCount = charCount[sortedChars[0]];
  const scale = maxw / maxCount;

  // Generate the bar graph
  const result = sortedChars.map((char) => {
    const scaledCount = Math.floor(charCount[char] * scale);
    const bar = "#".repeat(scaledCount);
    return `${char}:${bar}`;
  });

  return result.join("\n");
}

console.log(countCharsBarGraph("aaazzzzRRrTTTtrr", 5)); // "r:#####\nt:####\nz:####\na:###"
console.log(countCharsBarGraph("aaazzzzRRrTTTtrr", 10)); // "r:##########\nt:########\nz:########\na:######"
```
