/**
 * Steps: 
 * - enter a number to guess
 * - enter the number that you believe it is.
 * - validate number. If it isn't, repeat previous step
 * - if it is q, break
 */

let guessNumber = parseInt(prompt('Enter the number to guess'))

while(!guessNumber){
    parseInt(guessNumber = parseInt(prompt('Enter a valid number')))

}

let tryNumber = prompt('Guess the number')

let attempts = 0

let message = ""

while(true){
    attempts++
    console.log(tryNumber)
    console.log(guessNumber)

    if(tryNumber === 'q') break;
    if(tryNumber == guessNumber) {
        console.log(`It took you ${attempts} guesses`)
        break;
    }
    else if(tryNumber < guessNumber) message = 'too low'
    else message = 'too high'
    
    
    tryNumber = prompt(message)
}


