# Functions

Reusable procedures
-  Functions allow us to write reusable, modular code
- We define a "chunk" of code that we can then execute at a later point.
- We use them ALL THE TIME
- A function can be called after the definition thanks to hoistling
- every method is a function
- a parameter is the variable that is in the () when definining the function
- an argument is which I write when I call the function
- we can omit an argument when calling a function but it must not break the code inside the function

## steps of a function

- Define

```js
function funcName ) {
  //do something
}

function grumpus() {
    console.log('ugh...you again...');
    console.log('for the last time... ');
    console.log('LEAVE ME ALONE!!!');
}
```

- Run

```js
funcName(); //run once
funcName(); //run again!

grumpus();
//ugh...you again...
//for the last time...
//LEAVE ME ALONE!!!
grumpus();
//ugh...you again...
//for the last time...
//LEAVE ME ALONE!!!
```


## inputs

Right now, our simple functions accept zero inputs. They behave the same way every time.

## arguments

We can also write functions that accept inputs, called arguments

```js
function findLargest(x, y) {
    if (x > y) {
        console.log(`${x} is larger!`);
    }
    else if (x < y) {
        console.log(`${y} is larger!`);
    }
    else {
         console.log(C ${x} and ${y} are equal!);
    }
}

findLargest(-2,77)      //77 is larger
findLargest(33,33);     //equals


```


## Return

Built-in methods return values when we call them. We can store those values:

```js
const yell = "I will end you".toUpperCase( );
yell; //"I WILL END YOU"
const idx = ['a','b','c'].index0f('c');
idx; //2


```
Example:

- The return statement ends function execution AND specifies the value to be returned by that function

```js
function add( x, y) {
    return x + y; //RETURN!
}
const sum = add(10, 16);
sum; //26
const answer add(100, 200 ) ;
answer; //300
```



```js
```