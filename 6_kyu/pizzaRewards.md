## Free pizza

- In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice.

- However, the rewards system may change in the future. Your manager wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.

Customers in the dictionary are represented as:

```js
{ 'customerName' : [list_of_order_values_as_integers] }
```

Solution:

```js
function pizzaRewards(customers, minOrders, minPrice) {
  let res = [];
  for (let i in customers) {
    if (customers[i].filter((j) => j >= minPrice).length >= minOrders)
      res.push(i);
  }
  return res;
}
console.log(
  pizzaRewards(
    {
      "John Doe": [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
      "Jane Doe": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45], // Has six orders above 20$, which means FREE PIZZA!
    },
    5,
    20
  )
); // ['Jane Doe']
console.log(
  pizzaRewards(
    {
      "Joey Bonzo": [22, 67, 53, 29], // Has two orders above 50$, which means FREE PIZZA!
      "Jennifer Bonzo": [51, 19], // Only has one order above 50$, so no pizza
    },
    2,
    50
  )
); // ['Joey Bonzo']
```
