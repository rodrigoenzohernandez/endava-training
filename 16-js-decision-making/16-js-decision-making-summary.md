# Decision Making

## Comparisons

```javascript
>   // greater than
<   // less than
>=  // greater than or equal to
<=  // less than or equal to
==  // equality
!=  // not equal
=== // strict equaliry
!== // strict non-equality

10 > 1;     //true
0.2 > 0.3;  //false
-10 < 0;    //true
50.5 < 5;   //false
0.5 <= 0.5; //true
99 >= 4;    //true
99 >= 99;   //true
'a' < 'b';  //true
'A' > 'a';  //false


```

If we compare strings, it will comare the unicode of the character

The Unicode Standard[https://www.unicode.org/charts/PDF/U0000.pdf]

## == vs ===

### == (double equals)

- Doesn't care about type
- Checks for equality of value, but not equality of type.
- It coerces both vaIues to the same type and then compares them.
- This can lead to some unexpected results!
- when using == it converts both values to the same type an then compare

```javascript
5 == 5;             //true
'b' == 'c';         //false
7 == '7';           //true
0 == '';            //true
true == false;      //false
0 == false;         //true
null == undefined;  //true

```

### === (triple equals)

Cares about type.

```javascript


5 === 5;    //true
1 === 2;    //false
2 === '2';  //false
false === 0;//false

//Same applies for != and !==
10 != '10 ';    //false
10 !== '10';    //true
                    
```

Recommended: === always.

## Console

### Console.log

Prints into the console

### alert()

Its a popup.

### prompt()

It allows to input data.

## Conversions

### parseInt()

It converts strings to int.

## How to run a JS file

- Create a dir
- Create a html file
- Create a JS file
- At the end of the body import the JS file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=Ddevice-width, initial-scale=1.0">
    <title>First JS Script</title>
</head>
<body>
    <h1>First Script!</h1>
    <script src="app.js"></script>
</body>
</html>
```

## Conditional Statements

### IF

Only runs code if given condition is true

```javascript
let rating = 3;
if (rating === 3){
    console.log("YOU ARE A SUPERSTAR!" );
}
```
### ELSE IF

```javascript
const age = 3;

if (age < 5) {
    console. log ("You are a baby.  You get in for free!")
} else if (age < 10) {
     console.log ("You are a child. You pay $10")
} else if (age < 65) {                                               
    console. log("You are an adult. You pay $20")
}
```
### ELSE

Allows to take into account all the possibilities.

### NESTED CONDITIONALS

Is a conditional inside another conditional

## TRUTHY AND FALSY VALUES

- All JS values have an inherent truthyness or falsyness about them
- Falsy values:
  - false
  - 0
  - "" (empty string)
  - nulL
  - undefined
  - NaN
- Everything else is truthy!

```javascript
if(false || 0 || "" || null || undefined || NaN){
   console.log('truthy')
}
else{
    console.log('falsy')
}
```

## Logical operators

### AND (&)
All conditions must be true for the entire thing is true.

```javascript
true && true //true
//any other combination is false
```

### OR

If one side is true, the entire thing is true

```javascript
true && true //true
true && false//false
false && true //false
false && false //false


//any other combination is false
```

### NOT

!
expression returns true if expression is false

```javascript
!false //true
```

## SWITCH

The switch statement is another control-flow statement that can replace multiple if statements.
I find the syntax unwieldy and hard to remember, but it's good to know about!

Break --> Is needed to execute just the code of the case instead of all the next cases
Default --> is like an else

```javascript
const day = 2
switch (day) {
    case 1:
         console.log("MONDAY!");
        break;
    case 2:
        console.log("TUESDAY!");
        break;
    case 3:
         console.log("WEDNESDAY");
        break;
    case 4:
         console, log("THURSDAY");
        break;
    case 5:
         console.log("FRIDAY");
        break;
    default:
         console.log("INVALID NUMBER!")
```

If you want that different cases have the same result, just join the cases

```javascript
    case 4:
    case 5:
         console.log("FRIDAY");
        break;
```