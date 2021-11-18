/**
 * In some dice games like Craps, a roll of two 1's is called "Snake Eyes". It's generally not a good
roll. Please write a function called issnakeEyes , which accepts two numbers as inputs,
representing two dice. If the two numbers are both 1's, please print "Snake Eyes!" otherwise
print "Not Snake Eyes!"
       isSnakeEyes (1,1) //Snake Eyes!
       isSnakeEyes (1,5) //Not Snake Eyes!
       isSnakeEyes (4,5) //Not Snake Eyes!
   2
 */

function isSnakeEyes(firstNumber, secondNumber){
    let message = ''
    if(firstNumber == 1 && firstNumber === secondNumber) message = 'Snake Eyes!'
    else message = 'Not Snake Eyes!'

    return message
}

console.log(isSnakeEyes (1,1)) //Snake Eyes!
console.log(isSnakeEyes (4,5)) //Not Snake Eyes!
console.log(isSnakeEyes (1,5)) //Not Snake Eyes!
