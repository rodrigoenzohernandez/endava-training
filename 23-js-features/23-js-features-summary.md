# New JS Features

## Default Params

### old way

```js
function multiply(a, b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}
multiply(7); //7
multiply(7, 3); //21
```
### new way

If there are more than one parameter, the default parameters must be at the end.

```js
function multiply(a, b = 1) {
    return a * b;
}
multiply(4); //4
multiply(4, 5); //20
```

## SPREAD

Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs
(for object literals) are expected.

### Spread in Function Calls

Expands an iterable (array, string, etc.) into a list of arguments

```js
const nums = [ 9, 3, 2, 8 ];
Math.max(nums); //NaN
// Use spread!
Math.max(...nums); //67
// Same as calling:
// Math.max(9,3,2,8)
```

With strings:
```js
console.log(...'hello')
//h e l l o
```

### Spread with array Literals

Create a new array using an existing array. Spreads the elements from one array into a new array.

```js
const nums1 = [ 1, 2, 3 ];
const nums2 = [ 4, 5, 6 ];

[ ...nums1,...nums2 ];
//[1, 2, 3, 4, 5, 6]

[ 'a', 'b',...nums2 ];
// ["a", "b", 4, 5, 6]

[ ...nums1, ...nums2, 7, 8, 9 ];
//[1, 2, 3, 4, 5, 6, 7, 8, 9]
```
### Spread with objects

Copies properties from one object into another object literal.
If there is a conflic, the value will be the one that comes last. In this case for example if we combine feline and canine, familiy will be Caninae

```js
const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true }; 

const dog = { ...canine, isPet: true };
//{family: "Caninae", furry: true, isPet: true}

const lion = { ...feline, genus: 'Panthera' };
//{legs: 4, family: "Felidae", genus: "Panthera"}

const catDog = { ...feline, ...canine };
//{legs: 4, family: "Caninae", furry: true}

```

Convert array into object

```js
{...[5.4.6]}
// {0: 2, 1:4, 2:6, 3:8}
```

## REST

It looks like spread but it's not!

• Available inside every function.
• It's an array-like object
    o Has a length property
    o Does not have array methods like push/pop
• Contains all the arguments passed to the function
• Not available inside of arrow functions!

```js
function sumAll(...arguments) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
sumAll(8, 4, 3, 2); // 17
sumAll(2, 3); //5
```

### Rest Params
Collects all remaining arguments into an actual array

```js
function sumAll(...nums) {
    let total 0; 
    for (let n of nums) total += n;
    return total;
}
sumAll(1, 2); //3
sumAll(1, 2, 3, 4, 5); //15
```

Another example:

```js
function raceResults (gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log (`SILVER MEDAL GOES TO: ${silver}`)
    console. log (`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
/*
raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis')
GOLD MEDAL GOES TO: Tammy
SILVER MEDAL GOES TO: Todd
AND THANKS TO EVERYONE ELSE: Tina, Trevor, Travis
*/
```



## DESTRUCTURING

A short, clean syntax to 'unpack': 
- Values from arrays
- Properties from objects Into distinct variables.

## Destructuring arrays
```js
const raceResults = [ 'Eliud Kipchoge', 'Feyisa Lelisa', ' Galen Rupp' ];

const [ gold, silver, bronze ]
gold; //"Eliud Kipchoge"
silver; //"Feyisa Lelisa"
bronze; //"Galen Rupp"

const [ fastest, ..everyoneElse ] = raceResults; 
fastest; //"Eliud Kipchoge"
everyoneElse; //["Feyisa Lelisa", "Galen Rupp"]
```
## Destructuring Objects
```js
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

const {first,last,country} = runner;

first; //"Eliud"
last; //"Kipchoge"
country; //"Kenya" 11
```

What if I don't want to have a variable name called as the property?. We can do this:

```js
const { title: newTitle } = runner
```

Default value:

```js
const { isAlive = 'N/A' } = runner
```


## Destructuring params
```js

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya".
}

const fullName = ({first, last}) => {
  return `${first} ${last}`
}

fullName(runner); //"Eliud Kipchoge"

```