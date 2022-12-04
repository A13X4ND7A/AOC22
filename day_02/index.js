const fs = require('fs')

const lines = fs
.readFileSync('day_02/day_02_input_test.txt', {encoding: "utf-8"})
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

const toWin = {
    X: 'C',
    Y: 'A',
    Z: 'B'

}

const totalScore = 0


const opponent = lines.map(line => {
   letter = line.charAt(0)
   score = shapeSelected[letter]
   return {
    letter: letter,
    score: score
   }
  
})
const player = lines.map(line => {
   letter = line.charAt(2)
   score = shapeSelected[letter]
      return {
    letter: letter,
    score: score
   }
  
})


// need to figure out who won. 
// the the opponent needs to have the corrosponding value in to toWin in order for player to win
// if player letter and opponent match then its a draw




const playerScore = (play, opp) => {
    player.map((player) => {
       
        if (player.letter === toWin[player.letter]) {
            console.log('draw')
        } else {
            console.log('something else')
        }
    }) 
}

console.log(playerScore(player, opponent))




