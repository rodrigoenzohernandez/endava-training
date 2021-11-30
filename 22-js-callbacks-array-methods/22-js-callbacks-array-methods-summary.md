# Callbacks and array methods

Use the new arrow function syntax
Understand and use these methods:

## Arrow Functions 

syntactically compact alternative to a regular function expression

```js
const square = (x) => {
  return x * X;
}
const sum = (x, y) => {
  return x + y;
}

//parens are optional if there's only one parameter:
const square =
  return x * X;
                X => {
//Use empty parens for functions w/ no parameters:
const singASong = () => {
  return "LA LA LA LA LA LA";
}



```

### implicit return

```js
const isEven = function (num) { //regular function expression
  return num % 2 0;
}
const isEven = (num) => { //arrow function with parens around param
  return num % 2 0; ===
}
const isEven = num => { //no parens around param
  return num % 2 0;
}
const isEven = num => (//implicit return
  num % 2 ===
);
const isEven = num => num % 2 0; //one-liner implicit return 
```

## forEach

Accepts a callback function.
Calls the function once per element in the array.
```js
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]; 
nums.forEach( function (n) {
  console.log(n * n)
  //prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
});
nums.forEach( function (el) {
  if (el % 2 === 0) {
    console.log(el)
    //prints: 8, 6, 4, 2
  }
} )
```

## map

Creates a new array with the results of calling a callback on every element in the array

```js
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
  return t.toUpperCase();
})
texts; //["rofl", "lol", "omg", "ttyl"]
caps; //["ROFL", "LOL", "OMG", "TTYL"]
                          
```

## find
returns the value of the first element in the array that satisfies the provided testing function.
```js
let movies =[
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
  ]
  
let movie = movies.find(movie =
  return movie.includes( 'Mrs.')
}) //"Mr. and Mrs. Smith"
                                   > {
let movie2 = movies.find(m => m.index0f('Mrs') 0); -- -
// "Mrs. Doubtfire"
```

## filter
Creates a new array with all elements that pass the test implemented by the provided function.
```js
const nums =  [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
  return n % 2 : 1; //our callback returns true or false
  //if it returns true, n is added to the filtered array
})
//[9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5);
//[4, 3, 2, 1]
```

## every
tests whether all elements in the array pass the provided function. It returns a Boolean value.

```js
const words = ["dog", 'dig', 'log', 'bag', 'wag'];
words.every(word => {
  return word.length === 3
}) //true

words.every(word => word[0] 'd'); //false

words.every(w => {
  let last_letter = w[w.length - 1];
  return last_letter === 'g'
}) //true
                     
```

## some
Similar to every, but returns true if ANY of the array elements pass the test function
```js
const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag']
;
//Are there any words longer than 4 characters?
words.some(word => {
  return word.length > 4;
}) //true

//Do any words start with 'Z'?
words.some(word => word[0] === 'Z'); //false 

//Do any words contain 'cake'?
words.some(w => w.includes('cake')) //true
```

## reduce
Executes a reducer function on each element of the array, resulting in a single value.

### summing an array

- For the first time:
    - accumulator = firstElement
    - currentValue = secondElement

```js
[3, 5, 7, 9, 11].reduce((accumulator, currentValue)  => {
 return accumulator + currentValue;
});

/*
Callback        accumulator     currentValue        return value
fırst call      3               5                   8
second call     8               7                   15
third call      15              9                   24
fourth call     24              11                  35
*/

```

### finding max value
```js
let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const topScore = grades.reduce((max, currVal) => {
 if (currVal > max) return currVal;         
 return max;
})
topScore; //99


//A shorter option w/ Math.max & implicit return
const topScore = grades.reduce((max, currVal) => (Math.max(max, currVal)
))
               
```

### a initial value can be setted

```js
[4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
//RETURNS: 30

[4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100);
//RETURNS: 130
```

### tallying

```js
const votes =
['y','y','n','y','n','y','n','y','n','n', 'n', 'y','y'];
const tally = votes.reduce( (tally, vote) => {
  tally[vote] = (tally[vote] || 0) + 1;
  return tally;
}, {}); //INITIAL VALUE: {}
               
tally; //{y: 7, n: 6}
```

## setTimeout

```js
setTimeout(() => {
    console.log('hello')
}, 3000)
```

## setInterval

```js
const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

clearInterval(id)

```

## arrow functions & THIS

Inside arrow functions, THIS reffers allways to the windows object.

Yo wouldn't use an arrow function to declare a method.

### Normal function

THIS refers to the object: Person. Because it depend on how the function is executed.

```js
const person = {
    firstName: 'Rodrigo',
    lastName: 'Hernandez',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

person.fullName() // Rodrigo Hernandez

```

### Arrow Function

- Don't declare methods with arrow function. It will have problemas with THIS.

- Formal definition: The keyword THIS inside of any arrow function is just the same value of the keyword this in the scope of where the function was created

- Explanation: Here THIS refers to the window object because it depends on where the function was created (totally different to the normal function, in which THIS deends on where the function was executed.)



```js
const person = {
    firstName: 'Rodrigo',
    lastName: 'Hernandez',
    fullName:  () => {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function(){
      setTimeout(() => {
        console.log(this.fullName())
      })
    }
}

person.fullName() // undefined undefined

```


#### Useful way


If we declare the setTimeout as a normal function, it won't work, because THIS will be refer to WINDOW.

But if we use an arrow function it will work because this will refer to the value of THIS in the function shoutName that was declared with normal function.

```js
const person = {
    firstName: 'Rodrigo',
    lastName: 'Hernandez',
    fullName:  function() {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function(){
      setTimeout(() => {
        console.log(this.fullName())
      })
    }
}

person.fullName()

```