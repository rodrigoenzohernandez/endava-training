# Functions in detail

## Scope

Variable "visibility".
The location where a variable is defined dictates where we have access to that variable
```js
function helpMe( ){
    let msg = "I'm on fire!";
    msg; //"I'm on fire";
}
msg; //NOT DEFINED! msg is scoped to the helpMe function

```
### Function Scope
```js
let bird = 'mandarin duck';
function birdWatch(){
   let bird = 'golden pheasant';
   bird; //'golden pheasant'
}    
bird; //'mandarin duck' --> bird is scoped to birdWatch function
```

## Block Scope

Thanks to let or const. Not possible with VAR

```js
let radius 8;
if(radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
}
console.log(radius); //8
console.log(PI); //NOT DEFINED
console.log(circ); //NOT DEFINED

```

### Lexical Scope

A nested or inner function (child function) has access to his parents scope.
The parent doesn't have access to the variables declared on their child functions.

```js
function outer() {
  let hero = "Black Panther";
  function inner() {
    let cryForHelp = `${hero}, please save me!`
    console.log(cryForHelp);
  }
  inner();
}
```

## Function Expressions

Is a function without a name, that is stored inside of a variable.
- Javascript considers a variable as a value that can be assigned to a variable

```js
const square = function (num) {
  return num * num;
}
square(7); //49
```

## Functions are objects

## Higher order functions

Functions that operate on/with other functions.
They can:
- Accept other functions as arguments
- Return a function

### Functions as arguments

```js
function callTwice(func) {
  func();
  func();
}
function laugh() {
  console.log( "НАНАНАНАНАНАНАННАНАНАНАН")%;
}
callTwice(laugh) //pass a function as an arg!
//"НАНАНАНАНАНАНАННАНАНАНАН"
//"НАНАНАНАНАНАНАННАНАНАНАН"
```

### Returning functions

This example is called factory function.

```js
function makeBetweenFunc(min, max) {
  return function (val) {
    return val >= min && val <= max;
  }
}
const isAdult = makeBetweenFunc(19, 64);

isAdult(17); //false
isAdult(50); //true

const isSenior = makeBetweenFunc(65, 120);

isSenior(66); //true
isSenior(20); //false

```

## Methods

We can add functions as properties on objects.

```js
const math = {
    multiply : function(x, y) {
        return x * y;
    },
    divide : function(x, y) {
        return x / y;
    },
    square : function(x) { 
        return x * X;
  }
};
```

###  Shorthand
We do this so often that a new there's a new shorthand way of adding methods.

```js
const math = {
  blah: 'Hi!',
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  }
}
math.add(50, 60) //110

```

### THIS in methods

- Use the keyword this to access other properties on the same object.

```js
const person =
  first: 'Robert',
  last: 'Herjavec',
  fullName() {
    return `${this.first} ${this.last}`
  }
}
person.fullName(); //"Robert Herjavec"
person.last = "Plant";
person.fullName( ); //"Robert Plant"
                {
```

#### The value of this depends on the invocation context of the function it is used in.

Example with the same function and different result:
```js

const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName() {
        return `${this.first} ${this.last}`
    }
}

//result 1:

person.fullLName();
// "Robert Herjavec"

//result 2:

const func = person.fullName;
func()
// "undefined undefined"

```

In result 2, I assign the method person.fullName to a variable. So when the execution of the this arrives, it's not referring to the
person object, THIS is refering to the windows object of javascript.
In this case, it means that:
this.first is really windows.first. And windows.first is undefined.

## VAR VS LET VS CONST

### VAR

Our variables are scoped to functions but not to blocks

### LET or CONST

Block Scope

## TRY ... CATCH

- Allows to execute the next code
- Is recommended to use in every api call

```js
try {
    
} catch (error) {
    
}
```