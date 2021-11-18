# Loops

Loops allow us to repeat code
- "Print 'hello 10 times
- Sum all numbers in an array
There are multiple types:
- for loop
- while loop
- for...of loop
- for...in loop

## for loop

### syntax

```javascript
for (
    [initialExpression];
    [condition];
    [incrementExpression]
)
```

### examples

```js
for (let i = 1; i 10; i++) {  <=
   console.log(i);
}
```

```javascript
for (let i = 1; i 10; i++) {  <=
   console.log(i);
}
```

### loop arrays

To loop over an array, start at index 0 and continue looping to until last index (length-1)

```js
const animals = [ 'lions', 'tigers', 'bears' ];
for (let i = 0; i < animals.length; i++) {
     console.log(i, animals[i]);
}
           
//0 'lions'
//1 'tigers'
//2 'bears'
```

### nested loops

```js
let str = 'LOL';
for (let i = 0; i <= 4; i++) {
    console.log("Outer:", i);
    for (let j = 0; j < str.length; j++) {
         console.log('
                          
                          Inner:', str[j]);
    }
}

/*
Outer: 0
  Inner: L
  Inner: 0
  Inner: L
Outer: 1
  Inner: L
  Inner: 0
  Inner: L
Outer: 2
  Inner: L
  Inner: 0
  Inner: L
Outer: 3
  Inner: L
  Inner: 0
  Inner: L
Outer: 4
  Inner: L
  Inner: 0
  Inner: L
*/

```

## While Loops

While loops continue running as long as the test condition is true.

```js
let num 0;
while (num < 10) {
    console.log(num);
    num++;
}

```

### A common pattern

```js
let targetNum = Math.floor(Math.random() * 10);
let guess =  Math.floor(Math.random( ) * 10);
                      
while (guess !== targetNum) {
    console.log(` Guessed ${guess}...Incorrect!`);
    guess = Math.floor(Math.random( ) * 10); 
}
console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}` );
```

### Break keyword

```js
let targetNum = Math.floor (Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
   guess = Math.floor(Math.random( ) * 10);
   if (guess === targetNum)
       console.log( ` CORRECT! Guessed: ${guess} & target was: ${targetNum}` );
       break;
   }
   else {
       console.log(`Guessed ${guess}...Incorrect!`);
   }
}

```

## For Of

A nice and easy way of iterating over arrays (or other iterable objects)
- No Internet Explorer Support

### syntax

```javascript
for (variable of iterable) {
    statement
}
```

### example

```js
let subreddits [ 'soccer', 'popheads', 'cringe', 'books' ];
for (let sub of subreddits) {
    //Do this for every item in subreddits array:
    console.log(`${sub} - www.reddit.com/r/${sub}` );
}
```

### We can also iterate other objects. For example a string
```js
for (let char of "hello world") {
    console.log(char)
}

```



### nested For...Of

```js
const magicSquare = [
    [ 2, 7, 6 ],
    [ 9, 5, 1 ],
    [ 4, 3, 8 ]
];
                   
for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
         sum += num;
    }
     console.log(`Row of ${row} sums to ${sum}`);
}
```


## iterate over objects

With FOR...IN

```js

//option 1

const testScores =
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
} 
for (let person in testScores) {
    console.log(`${person} scored ${testScores [person]}`);
}

//option 2

Object.keys(testScores)     //returns an array with the keys
Object.values(testScores)   //return values
Object.values(entries)      //returns a nested array

let total = 0; 
for (let score of Object.values (testScores)) {
      total += score;

```
