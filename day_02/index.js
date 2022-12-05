const fs = require('fs')

const lines = fs
.readFileSync('day_02/day_02_input.txt', {encoding: "utf-8"})
.split(/\r?\n/)
// console.log({lines})

// game
// opponent
// A for Rock 
// B for Paper
// C for Scissors

//your response
// X for rock
// Y for paper
// z for scissors

//scores
// 1 for Rock
// 2 for Paper
// 3 for Scissors

// 0 loose
// 3 draw
// 6 win



const shapeSelected = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3
}

const outcome = {
    win: 6,
    draw: 3,
    loose: 0
}

const toLoose = {
    A: 'B',
    B: 'C',
    C: 'A'
}
const playerInput = {
    X: 'A',
    Y: 'B',
    Z: 'C'
}



const opponent = lines.map(line => {
    letter = line?.charAt(0)
    score = shapeSelected[letter]
    return {
        letter: letter,
        score: score
    }
    
})
const player = lines.map(line => {
    letter = line?.charAt(2)
    score = shapeSelected[letter]
    return {
        letter: playerInput[letter],
        score: score
    }
    
})
let totalScore = []

const isAWinner = (item, index) => {
    if(toLoose[item?.letter] === player[index].letter ) {
        totalScore.push(player[index].score + 6)
        // console.log('player won')
    } else {
    if (player[index].letter === opponent[index].letter){
        totalScore.push(player[index].score + 3)
       // console.log("draw")
    }else {
        totalScore.push(player[index].score)
        // console.log('Player Lost')
    }
    }
}

const opponentPlayed = (opp) => {
    opp.forEach(isAWinner)
    const total = totalScore?.reduce((acc, total) => {
    return acc + total
    }, 0)
    console.log(total)
}
console.log(opponentPlayed(opponent))




