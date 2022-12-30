## [Movie Showtimes](https://www.codewars.com/kata/6376bbc66f2ae900343b7010)

- You just started working at a local cinema, and your first task is to write a function that returns the showtimes of a specific movie, given its length. In order to make your job easier, you will work with 24-hour format throughout this kata.

- Your function receives three parameters, all of them being integers:
    - `open` - Hour at which the cinema opens.
    - `close` - Hour at which the cinema closes.
    - `length` - Length of the movie, in minutes.

- It must return an array of times, with each time being in the format `(hour, minute)`. For example, `(19, 30)` means `19:30`, and `(2, 0)` means 02:00. The last session in the array cannot end after the cinema closes. Also, the times in the array must be sorted from earliest to latest.

- There's also a 15-minute window between a session's end and the beginning of the following one, in order to give enough time for users to take a seat.

- For example, for a cinema opening at 13:00 and closing at 23:00 showing a 60-minute movie, your function must return the following array:

#### Samples:

```js
>>> movie_times(13, 23, 60)
[(13, 0), (14, 15), (15, 30), (16, 45), (18, 0), (19, 15), (20, 30), (21, 45)]
```
Note that the cinema might close at times such as 02:00 or 03:00, meaning examples like this must also work:
```js
>>> movie_times(16, 3, 75)
[(16, 0), (17, 30), (19, 0), (20, 30), (22, 0), (23, 30), (1, 0)]
```
<b>IMPORTANT:</b>
 For languages other than Python, just return an array of arrays. See sample test cases for more info on how to return the list of times.
<b>NOTE:</b> This kata isn't meant to be too challenging, so opening times for all tests will be 12:00 or later, and closing times will always be 6:00 or earlier.
<b>NOTE 2:</b> Midnight will be represented as (0, 0) or 0:00 in this kata, instead of 24:00.

#### Solution:

```js
function movie_times(open, close, length) {
  let res = [] 
  open > close ? close += 24 : null 
  for (let i = open * 60; i + length <= close * 60; i += (length + 15)) { 
    res.push([Math.floor(i / 60) % 24, i % 60 ])
  }
  return res
}

console.log(movie_times(13, 23, 60)); 
// [[13, 0], [14, 15], [15, 30], [16, 45], [18, 0], [19, 15], [20, 30], [21, 45]]
console.log(movie_times(16, 3, 75)); 
// [[16, 0], [17, 30], [19, 0], [20, 30], [22, 0], [23, 30], [1, 0]]
console.log(movie_times(16, 21, 90)); 
// [[16, 0], [17, 45], [19, 30]]
```
