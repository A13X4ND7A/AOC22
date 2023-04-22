const fs = require("fs");
const { deflateRaw } = require("zlib");

const lines = fs
  .readFileSync("day_04/input_test.txt", { encoding: "utf-8" })
  .split(/\r?\n/);


lines.map((line) => {
  const ranges = line.split(',');
  let arrayBefore = [];
  let arrayAfter = [];

  ranges.forEach((range) => {
    const [start, end] = range.split('-').map(Number);
    let fullRange = [];
    
    for (i = start; i < end + 1; i++) {
      fullRange.push(i);
    }
    
    console.log(fullRange, 'fullRange')
    
    console.log(range, 'range')

//    arrayBefore = [...arrayBefore, ...fullRange];
    
//    console.log(arrayBefore, 'arayBefore')
    
  });


//  const unique = new Set(arrayBefore);
//  arrayAfter = [...unique];


//  const result = arrayAfter.filter((number) => !arrayBefore.includes(number));
//    console.log(unique, 'unique')
//   console.log(arrayBefore, 'before')
//  console.log(arrayAfter, 'after')
 
//  console.log(result, 'resulty');
});

  
  
  /* 
  - Each pair of elves has several sections e.g: 4-7, 3-5. This would translate to sections 4,5,6,7 and 3,4,5.
  - need to identify what sections are overlapping with each other. for example in this example, both elves would clean 4 and 5. 
  */
  
   