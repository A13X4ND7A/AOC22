const fs = require("fs");
const { deflateRaw } = require("zlib");

const lines = fs
  .readFileSync("day_03/day_03_input.txt", { encoding: "utf-8" })
  .split(/\r?\n/);
  
/*

- Groups of three elves
- Elves carry badge that Identify their group which is the item shared by all three.
- Every three lines is equal to a group of Elves

- find the common letter in every three lines
- assign a letter priority to the common letter
- sum up all priorities

*/
const getLetterPriority = (letter) => {
  if (letter.toUpperCase() === letter) {
    return letter.charCodeAt(0) - 38; 
  } else {
    return letter.charCodeAt(0) - 96;
  }
};
const groupsOfThree = lines.reduce((acc, line, index) => {
  const groupIndex = Math.floor(index / 3);
  if (!acc[groupIndex]) {
    acc[groupIndex] = [];
  }
  acc[groupIndex].push(line);
  return acc;
}, []);

const commonItems = groupsOfThree.map((group) => {
  const letterSets = group.map((line) => new Set(line));
  const intersection = [...letterSets.reduce((acc, set) => new Set([...acc].filter((letter) => set.has(letter))))];
  return intersection;
});

console.log(commonItems)

const priorities = new Map();

commonItems.flat().forEach((item) => {
  const priority = getLetterPriority(item);
  const currentPriority = priorities.get(item) || 0;
  priorities.set(item, currentPriority + priority);
});

const totalPriority = Array.from(priorities.values()).reduce(
  (total, priority) => total + priority
);
console.log(totalPriority); 


