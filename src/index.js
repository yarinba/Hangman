import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let h1


window.addEventListener('keypress', (e) =>{
    const guess = String.fromCharCode(e.charCode)

    h1.makeGuess(guess)
    render()
    
})

const render = () =>{
    puzzleEl.innerHTML = ''
    guessesEl.textContent = h1.statusMes


    h1.puzzle.split('').forEach((letter) =>{
        
        const spanEl = document.createElement('span')
        spanEl.textContent = letter
        puzzleEl.appendChild(spanEl)
    })
    
}

const startGame = async () =>{
    const puzzle = await getPuzzle('2')
    h1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()