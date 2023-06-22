## [Tolkien's Book Cart](https://www.codewars.com/kata/59a2666349ae65ea69000051)

- Tolkein's publisher wishes to implement an online store for the "Lord of the Rings" and "The Hobbit" books. Each book costs $10. However, if 2 titles are purchased, a 5% discount will be received, i.e. purchasing "Fellowship of the Ring" and "Two Towers" will cost $19. If 3 different titles are purchased, a 10% discount will be received. The purchase of all 4 different titles will receive a 20% discount. An additional single title will be full-price.

- The encoding of an order will be in the form of strings in an array. For example: `[“F”, “T”, “R”, “H”, “H”]` is the encoding of 2 copies of "The Hobbit" and a single copy of each of the titles in the "Lord of the Rings" trilogy.

- The expected output is a number. E.g. 42 is the expected output for the example above. The output should be the cheapest total cost. For example - if the book order is `["F", "T", "H", "F", "T", "R"]`, valid total costs include `(3*10 discounted by 10%)` + `(3*10 discounted by 10%)` and `(4*10 discounted by 20%)` + `(2*10 discounted by 5%)`. The cheapest total cost is 51.

#### Solution:

```js
function calculateCartTotal(cartContents) {
  const bookCount = Object.values(cartContents.reduce((acc, val) => ({ ...acc, [val]: (acc[val] || 0) + 1 }), {}));
  const discounts = [[4, 0.2], [3, 0.1], [2, 0.05], [1, 0]];
  let ans = 0;

  for (const [x, disc] of discounts) {
    while (bookCount.filter(count => count).length === x) {
      bookCount.forEach((count, index, arr) => {
        arr[index] = Math.max(count - 1, 0);
      });
      ans += x * 10 * (1 - disc);
    }
  }

  return ans;
}

console.log(calculateCartTotal(['book1', 'book2', 'book2', 'book3', 'book3', 'book3', 'book4', 'book4', 'book4', 'book4'])); // Output: 66 (20% discount on 4 books, 10% discount on 3 books)
console.log(calculateCartTotal( ['book1', 'book1', 'book1', 'book2', 'book3'])); // Output: 33 (10% discount on 3 books)
```
