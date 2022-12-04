const fs = require('fs')

const lines = fs
.readFileSync('day_01/day_01_input.txt', {encoding: "utf-8"})
.split(/\r?\n/)

// let cheese = []
// let elf = 0
// lines.split(/\r?\n/).forEach(line =>  {
//     if(line !== ''){
//         elf += parseInt(line)
        
//     } else {
//      cheese.push(elf)
//      elf = 0

//  }
// })

// console.log((Math.max(...cheese)))


const separator = '';

const newCalories = lines
.reduce(
    (acc, total ) => {
if (total == separator) {
    acc.totalCalories.push(acc.sum)
    acc.sum = 0
}else {
    acc.sum += Number(total)
}
return acc
}, {totalCalories: [], sum: 0}
)

console.log((Math.max(...newCalories.totalCalories)))


