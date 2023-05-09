## [Likes Vs Dislikes](https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript)

##### Story

- YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round

##### Task

- Create a function that takes in a list of button inputs and returns the final state.

#### Examples:

```js
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
```

##### Notes

- If no button is currently active, return Nothing.
- If the list is empty, return Nothing.

#### Solution:

```js
function likeOrDislike(buttons) {
  let currentState = "Nothing";

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === currentState) {
      currentState = "Nothing";
    } else {
      currentState = buttons[i];
    }
  }

  return currentState;
}

console.log(likeOrDislike(["Dislike"])); // => Dislike
console.log(likeOrDislike(["Like", "Like"])); // => Nothing
console.log(likeOrDislike(["Dislike", "Like"])); // => Like
console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // => Nothing
```
