# Strings

Represent text and must be wrapped in quotes.

```javascript
let username = 'rodrigoenzohernandez'
```

Strings are indexed: Each character has a corresponding index (a positional number).

```javascript
let username = 'rodrigoenzohernandez'

username[0] //r
username[1] //o
username[99] //undefined
```

## Length property

Is the number of characters

```javascript
let username = 'rodrigoenzohernandez'
username.length //20
username.length -1 //last index
```

## Concatenation

```javascript
let firstname = 'rodrigo'
let lastname = 'hernandez'

let fullName = firstname + lastname //rodrigohernandez

1 + 'hi' // '1h1'
```
## Methods

They help us do things like:
- Searching within a string
- Replacing part of a string
- Changing the casing of a string

You can use the methods in chain.

### toUpperCase()

```javascript
'rodrigoenzohernandez'.toUpperCase() //RODRIGOENZOHERNANDEZ
```

### .toLowerCase()

```javascript
'RODRIGOENZOHERNANDEZ'.toLowerCase() //rodrigoenzohernandez
```

### .trim()

Deletes extra spaces at the start and the end. Not the spaces in the middle.

```javascript
'        RODRIGO ENZO      HERNANDEZ                 '.toLowerCase() //RODRIGO ENZO      HERNANDEZ
```

### .indexOf(string)

Method with argument. Returns the first occurrence of the string.

```javascript
'hi my name is rodrigo'.indexOf('h') //0
'hi my name is rodrigo'.indexOf('is') //11
```

### .slice(beginIndex, endIndex)

Extracts a portion of a string.

```javascript
let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),    // OUTPUT: he morn
    str3 = str1.slice(4, -2),   // OUTPUT: morning is upon u
    str4 = str1.slice(12),      // OUTPUT: is upon us.
    str5 = str1.slice(30);      // OUTPUT: ""
```

### .replace(substr, newSubstr)

```javascript
let text = "Visit Microsoft!";
text.replace("Microsoft", "W3Schools");
```

### .repeat(repeats)

```javascript
'a'.repeat(5) //'aaaaa'
```

## String Template Literals

Template literales are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.

It uses backtick.

```javascript
`hello ${1 + 2 + 9}` //hello 12
```

## Data Types

### Null

- Intentional absence of any value
- Must be assigned

```javascript
let loggedInUser = null;
```

### Undefined

- Variables that do not have an assigned value are undefined

```javascript
'hello'[99]
```

## Math Object

Contains properties and methods for mathematical constants and functions

### PI

```javascript
Math.PI
```

### .round()

Rounding a number
```javascript
Math.round(4.9) //5
```

### .abs()

Absolute value
```javascript
Math.abs(-456) //456
```

### .pow()

Raises 2 to the 5th power
```javascript
Math.pow(2,5) //32
```

### .floor()

Removes the decimal

```javascript
Math.floor(3.9999)
```

### random

By default creates random numbers between 0 and 1.

```javascript
Math.randmon()
```

How to randomize between 1 and 10 for example
```javascript
const step1 = Math.random()
const step2 = step1 * 10
const step3 = Math.floor(step2)
const step4 = step3 +1

//In one line
Math.floor(Math.random() * 10) +1 //6
```

Randomize between 20 and 22
```javascript
Math.floor(Math.random() * 3) +20 //6
```