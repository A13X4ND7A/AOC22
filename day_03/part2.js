const fs = require("fs");
const { deflateRaw } = require("zlib");

const lines = fs
  .readFileSync("day_03/day_03_input_test.txt", { encoding: "utf-8" })
  .split(/\r?\n/);
  
/*
For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group
*/

const getLetterPriority = (letter) => {
  if (letter.toUpperCase() === letter) {
    return letter.charCodeAt(0) - 38; 
  } else {
    return letter.charCodeAt(0) - 96;
  }
};

const commonItems = lines.map((line) => {
  console.log(line, "line");
  const firstHalf = line.slice(0, line.length / 2); // get the first half of the line
  const secondHalf = line.slice(line.length / 2); // get the second half of the line

  return Array.from(
    new Set([...firstHalf].filter((item) => secondHalf.includes(item)))
  );
});

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