## [Killer Garage Door](https://www.codewars.com/kata/58b1ae711fcffa34090000ea/train/javascript)

#### Situation

- You have been hired by a company making electric garage doors. Accidents with the present product line have resulted in numerous damaged cars, broken limbs and several killed pets. Your mission is to write a safer version of their controller software.

#### Specification

- We always start with a closed door. The remote control has exactly one button, with the following behaviour.

  - If the door is closed, a push starts opening the door, and vice-versa
  - It takes 5 seconds for the door to open or close completely
  - While the door is moving, one push pauses movement, another push resumes movement in the same direction

- In order to make the door safer, it has been equiped with resistance-based obstacle detection. When the door detects an obstacle, it must immediately reverse the direction of movement.

#### Input

- A string where each character represents one second, with the following possible values.
  - `'.'` No event
  - `'P'` Button has been pressed
  - `'O'` Obstacle has been detected (supersedes P)
- As an example, `'..P....'` means that nothing happens for two seconds, then the button is pressed, then no further events.

#### Output

- A string where each character represents one second and indicates the position of the door (0 if fully closed and 5 fully open). The door starts moving immediately, hence its position changes at the same second as the event.

#### Example

- `..P...O.....` as input should yield 001234321000 as output

#### Solution :

```js
function door(events) {
   let dir = true, 
    inc = 0,
    res = 0;
  return events.split("").reduce((result, event) => { 
    if (event === "P") {
      if (res === 0) {
        dir = true;
        inc = 1;
      } else if (res === 5) {
        dir = false;
        inc = -1;
      } else if (inc !== 0) {
        inc = 0;
      } else {
        inc = dir ? 1 : -1;
      }
    }
    if (event === "O") {
      dir = !dir;
      inc *= -1;
    }
    res += inc;
    res = res > 5 ? 5 : res < 0 ? 0 : res;
    return `${result}${res}`;
  }, "");
}

console.log(door("P......P......")); // '12345554321000'
console.log(door("P.P..")); // '12222'
console.log(door("P.P.P....")); // '122234555'
console.log(door("P.O....")); // '1210000'
```
