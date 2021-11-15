# Basics

JS is REPL (Read Evaluate Print Loop)

## Primitive types

- Number
- String
- Boolean
- Null
- Undefined
- NaN

Technically there are two others:
- Symbol
- BigInt

### Number

JS has just one number type.

#### Math Operations

It works with PEMDAS (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction). 

```javascript

//Addition
50 + 5 //55

//Subtraction
90 - 1 //89

//Multiplication
11 * 4 //44

//Division
100 / 25 //4

//Modulo
27 % 2 //1

//Exponent

2 ** 4 //16

```

### NaN

```javascript
0 / 0 //NaN
1 + NaN //NaN

```

### Booleans

Just two values, true or false.

```javascript

let on = true;
let off = false;

```

## typeof (value)

It returns the type of the value.

## Variables

Stores in memory a value. We can change from variable type. For example:

```javascript
let isLoggued = true;
isLogged = 50;
```

### CONST

CONST works just like let, except you CANNOT change the value

```javascript
const luckyNum = 7;
```

### VAR

The old way of declaring variables. Is global.

### LET

Is local.

```javascript

//declare variables

let numA = 5;
let numB = 1;

//use variables

let total = numA + numB //6

```

Update variables

```javascript

let score = 50;

score += 1; //Increment by 1. The same as score = score +1. It can be also score ++

score -=1; //Decrement in 1. The same as score = score -1. It can be also score --

score *=2;

score /=2;

```

### VAR VS LET

```javascript

function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo"
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}

run();

```

## Variable Naming and conventions

Identifiers: 
- Cannot start with a digit
- Can contain _ or $

Is recommended to use camelCase.

For example:

```javascript
let currentDate = '15/11/2021';
```

Is recommended to start boolean variables with is. For example:

```javascript
let isLogged = true;
```
