## [Thinkful - List and Loop Drills: Lists of lists](https://www.codewars.com/kata/586e1d458cb711f0a800033b)

- You have a two-dimensional list in the following format:
- Each sub-list contains two items, and each item in the sub-lists is an integer.

`data = [[2, 5], [3, 4], [8, 7]]` 

- Write a function process_data()/processData() that processes each sub-list like so: 
  - `[2, 5] --> 2 - 5 --> -3\`
  - `[3, 4] --> 3 - 4 --> -1\`
  - `[8, 7] --> 8 - 7 --> 1\`
 
and then returns the product of all the processed sub-lists: `-3 _ -1 _ 1 --> 3`

For input, you can trust that neither the main list nor the sublists will be empty.
#### Solution:
````js
function processData(data){
let multi = 1;
let empty_list = [] 
for (var x of data){
    // ! multi *= x[0]-x[1];
    let fat = x[0] - x[1];
    empty_list.push(fat)
    
}
for (let y of empty_list) {
  multi *= y;
}
return multi
}
````
 