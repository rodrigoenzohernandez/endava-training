/**
Write an arrow function expression called greet. It should accept a single string argument,
representing a person's name. It should return a greeting string as shown below:
          greet ("Hagrid") //"Hey Hagrid!"
          greet ("Luna") /"Hey Luna!"
Be sure to use arrow function syntax!
 */

const greet = name => {
    return `Hey ${name}!`
}

console.log(greet('Hagrid'))
console.log(greet('Luna'))

const greet2 = name => `Hey ${name}!`


console.log(greet2('Hagrid'))
console.log(greet2('Luna'))



