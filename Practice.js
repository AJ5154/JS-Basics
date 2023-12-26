// 1. Simple Array Transformation:
const arr = [1, 2, 3, 4, 5];

const result = arr.map((value) => value * 2);

console.log(result);

// 2. Remove Duplicates from Array:
const arr1 = [1, 2, 2, 3, 4, 4, 5];

const result1 = arr1.filter((value, item) => arr1.indexOf(value) === item);

console.log(result1);

// 3. Convert Array of Strings to Uppercase:

const arr2 = ["apple", "banana", "orange"];

const result2 = arr2.map((value) => value.toUpperCase());

console.log(result2);

// 4. Filter Array Elements by Length

const arr3 = ["apple", "banana", "orange", "kiwi"];

const result3 = arr3.filter((value) => value.length <= 5);

console.log(result3);

// Reverse String in Array

const arr4 = ["hello", "world", "javascript"];

const result4 = arr4.map((value) => value.split("").reverse().join(""));

console.log(result4);

// 6. Sort Array of Numbers:

const arr5 = [5, 2, 8, 1, 4];
const result5 = arr5.sort();
console.log(result5);

// 7. Flatten Array of Arrays:

const arr6 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const result6 = arr6.flat();
console.log(result6);

// 8. Merge Arrays:

const arr7 = [1, 2];
const arr8 = [3, 4];

const result7 = arr7.concat(arr8);
console.log(result7);

// 9.Group Objects by Property:

const arr9 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Charlie" },
];
const grpresult = arr9.reduce((value, index) => {
  value[index.id] = value[index.id] || [];
  value[index.id].push(index);
  return value;
}, {});
console.log(grpresult);

// 10. Transform Object Array to Array of Values:

const arr10 = [{ x: 1 }, { x: 2 }, { x: 3 }];
const result10 = arr10.map((value) => value.x);
console.log(result10);

//11. Remove Property from Objects:

const arr11 = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];
const result11 = arr11.map(({ age, ...restElem }) => restElem);
console.log(result11);

//12. Filter Objects by Property Value:

const arr12 = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];
const result12 = arr12.filter((value) => value.age <= 25);
console.log(result12);

// 13. Map and Modify Object Properties:

const arr13 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const result13 = arr13.map(({ id, name }) => ({ userId: id, fullName: name }));
console.log(result13);

// 14. Remove Null and Undefined Values from Array:

const arr14 = [1, null, 3, undefined, 5];
const result14 = arr14.filter((value) => value !== null && value !== undefined);
console.log(result14);

// 15. Sum Nested Arrays

const arr15 = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];
const result15 = arr15.map((value) => value.reduce((sum, num) => sum + num, 0));
console.log(result15);

// 16. Find Maximum Value in Array of Objects:

const arr16 = [{ value: 10 }, { value: 20 }, { value: 15 }];
const result16 = arr16.reduce(
  (max, obj) => (obj.value > max.value ? obj : max),
  arr16[0]
);
console.log(result16);

// 17. Zip Arrays into Object of Key-Value Pairs:

const array = require("lodash");

let x = ["a", "b", "c"];
let y = [1, 2, 3];
const result17 = array.zipObject(x, y);
console.log(result17);

// 18. Rotate Matrix 90 Degrees Clockwise

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const result18 = matrix.map((val, index) =>
  matrix.map((row) => row[index]).reverse()
);
console.log(result18);

// 19. Partition Array into Groups of Size N

const arr19 = [1, 2, 3, 4, 5, 6, 7];
const arrSize = 3;
const result19 = [];

for (let i = 0; i < arr19.length; i += arrSize) {
  result19.push(arr19.slice(i, i + arrSize));
}

console.log(result19);

// 20. Find Common Elements in Arrays

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const result20 = array1.filter((value) => array2.includes(value));
console.log(result20);

// 21. Flatten and Sort Array of Objects

const arr21 = [
  { id: 2, name: "Alice" },
  { id: 1, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const result21 = arr21.sort((a, b) => a.id - b.id).map((obj) => obj.name);
console.log(result21);

// 22. Group Objects by Property and Count Occurrences

const arr22 = [
  { type: "A" },
  { type: "B" },
  { type: "A" },
  { type: "C" },
  { type: "B" },
];

const result22 = arr22.reduce((value, idx) => {
  value[idx.type] = (value[idx.type] || 0) + 1;
  return value;
}, {});

console.log(result22);

//23. Combine and Merge Objects with Same Property:

const arr23 = [
  { id: 1, name: "Alice" },
  { id: 2, age: 25 },
  { id: 1, city: "New York" },
];

const result23 = arr23.reduce((value, idx) => {
  value[idx.id] = { ...(value[idx.id] || {}), ...idx };
  return value;
}, {});

console.log(result23);

// 24. Flatten and Filter Object Arrays

const arr24 = [
  { id: 1, tags: ["a", "b"] },
  { id: 2, tags: ["b", "c"] },
];

const result24 = [...new Set(arr24.flatMap((obj) => obj.tags))];

console.log(result24);

// 25.Sort Array of Objects by Multiple Criteria
const arr25 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];
const result25 = arr25.sort((a, b) => {
  if (a.age !== b.age) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});

console.log(result25);
