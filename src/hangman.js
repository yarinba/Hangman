class Hangman{
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.alreadyGuessed = [' ']
        this.status = 'playing'
    }
    get puzzle(){
        let puz = ''
        this.word.forEach((letter) => {
            if(this.alreadyGuessed.includes(letter)){
                puz += letter
            } else {
                puz += '*'
            }
        });
    
        return puz
    }
    recaStatus(){
        const finalpuz = this.puzzle
        if(finalpuz.indexOf('*') === -1){
            this.status = 'finished'
        } 
        if(this.remainingGuesses < 1){
            this.status = 'failed'
        }
    }
    makeGuess(guess){
        if(this.status === 'playing'){
            guess = guess.toLowerCase()
            const uniqe = !this.alreadyGuessed.includes(guess)
            const badG = !this.word.includes(guess)
            
            if(uniqe){
                this.alreadyGuessed.push(guess)
            }
            if(uniqe && badG) {
                this.remainingGuesses--
            }
        
            this.recaStatus()
        }
    }
    get statusMes(){
        if(this.status === 'playing'){
            return `Guesses left: ${this.remainingGuesses}.`
        } else if(this.status === 'failed'){
            const finalWord = this.word.join('')
            return `nice try! The word was ${finalWord}.`
        } else if(this.status === 'finished'){
            return `Great work! You guessed the word.`
        }
    }
}


export {Hangman as default}