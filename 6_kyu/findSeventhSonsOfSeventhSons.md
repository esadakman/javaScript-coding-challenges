## [Seventh JSON of a seventh JSON](https://www.codewars.com/kata/5a15b54bffe75f31990000e0)

#### Context

- According to Wikipedia : "The seventh son of a seventh son is a concept from folklore regarding special powers given to, or held by, such a son. The seventh son must come from an unbroken line with no female siblings born between, and be, in turn, born to such a seventh son."

#### Your task

- You will be given a string of JSON, consisting of a family tree containing people's names, genders and children. Your task will be to find the seventh sons of seventh sons in the family tree, and return a set of their names. If there are none, return an empty set.

#### Tips

- Have a good look at the sample test cases.

- For a seventh son to be a seventh son, there must not be any daughters in the line leading to him. There may be daughters after him, though.

- You may want to use the json module for this one.

#### Solution:

```js
function findSeventhSonsOfSeventhSons(json) {
  const parent = JSON.parse(json);
  const seventhSons = new Set();

  function findName(parent) {
    let isBreakChild = false;

    let test = parent.find((item, index) => {
      if (index <= 6 && item.gender != "male") isBreakChild = true;
      if (index == 6 && !isBreakChild) return true;
    });

    if (test) {
      test = test.children.find((item, index) => {
        if (index <= 6 && item.gender != "male") isBreakChild = true;
        if (index == 6 && !isBreakChild) return true;
      });
    }

    if (test) seventhSons.add(test.name);

    parent.forEach((item) => {
      if (item.children.length) {
        findName(item.children);
      }
    });
  }

  findName(parent.children, false);

  return seventhSons;
}
```
