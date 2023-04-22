const fs = require("fs");
const { deflateRaw } = require("zlib");

const lines = fs
  .readFileSync("day_03/day_03_input_test.txt", { encoding: "utf-8" })
  .split(/\r?\n/);
  
  //split into two compartments of equal size
//looks at both uppercase and lowercase chars to compare
//items are then converted to a priority
//  - lowecase a - z priorities 1 - 26
//  - uppercase A - Z priorities 27 - 52

// each letter is assigned a number (priority) there fore a = 1, b = 2, A = 27, B = 28 etc
// neeed to sum the prorities in each rucksack ( number of lines)

/* NOTES 
 - The ASCII code for character a to z start from 97(a) to 122(z)
 - The ASCII code for character A to Z in the upper case starts from 65(A) to 90(Z), 
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