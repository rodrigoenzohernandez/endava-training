# Arrays

Is a data structure. Ordered collection of values. It allows to group data together. 

Examples:

 • List of comments on IG post
 • Collection of levels in a game
 • Songs in a playlist
 • typeof defines it as an object.
 • It can store items with different type

 ```javascript
 // To make an empty array
let students = [];
//An array of strings
let colors = ['red', 'orange', 'yellow'];
//An array of numbers
let lottoNums = [19,22,56,12,51];
//A mixed array
let stuff = [true, 68, 'cat', null]; 
 ```

## length property

It counts all the elements.

## Modify arrays

```javascript
let colors = ['red','orange', 'green', 'yellow']; 
colors[0] = 'red';
colors[2] = 'yellow';
colors[3] = 'green';
colors[4]; //undefined
colors[4] = 'blue';
//["red", "orange", "yellow", "green", "blue"]
```

This cannot be done in a string. I can't change a particular character accesing with the index.

If I assign a element to a position far away from the final one, all the previous positions with be filled with undefined.

For example:


```javascript
let colors = ['red','orange', 'green', 'yellow']; 

colors[7] = 'black'

//let colors = ['red','orange', 'green', 'yellow', undefined, undefined, undefined,'black']; 


```

## Methods

### Push

add to end

```javascript
let colors = ['red','orange', 'green', 'yellow']; 
colors.push('black')
// ['red','orange', 'green', 'yellow', 'black']
```

### Pop

remove from end and returns the element deleted

```javascript
let colors = ['red','orange', 'green', 'yellow']; 
colors.pop()
// ['red','orange', 'green']
```


### Shift 

remove from start and returns the element deleted

```javascript
let colors = ['red','orange', 'green', 'yellow']; 
colors.shift()
// ['orange', 'green', 'yellow']
```

### Unshift

add to start

```javascript
let movieLine = ['Rodri','Carlos']; 
colors.unshift('VIP')
// ['VIP', 'Rodri', 'Carlos']
```

### concat

merge arrays. Creates a new array.

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

### includes

look for a value

```javascript
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

```

### indexOf

just like string.indexof

```javascript
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```



### reverse
reverses an array. Does not create a new array, modifies the original.
Careful: reverse is destructive -- it changes the original array.

```javascript

const array1 = ['one', 'two', 'three'];

const reversed = array1.reverse();

// expected output: "reversed:" Array ["three", "two", "one"]
// expected output: "array1:" Array ["three", "two", "one"]
```

### join

creates a string from an array

```javascript

```

### slice

copies a portion on an array

```javascript
var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']

var masculinosLast = nombres.slice(-2);
// [ 'Ana', 'Vanesa']
```

### splice

removes/replaces elements. Is destructive to the original array. Is not efficient to update the middle of an array.

splice(start, deleteCount, item1, item2, itemN)


```javascript

//Remove 1 element at index 3 
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

//Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

//Remove 1 element at index 2, and insert "trumpet"

let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

```

### sort

sorts an array sort. It converts everything into string and then compares the unicode to sort.

- It doesn't work to sort an array of numbers by default

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

## Reference Types & Equality testing

When you compare arrays, it's not comparing the values, it compares the reference in memory.

```javascript

[1, 2, 3] === [1, 2, 3] //false
['a', 'b', 'c'] === ['a', 'b', 'c'] //false

let arrOriginal = [1, 2, 3]

let arrCopy = arrOriginal //now is referencing to the same space in memory. If I modify one, the other will be modified.

arrOriginal.push(4)

// arrOriginal --> [1, 2, 3, 4]
// arrCopy --> [1, 2, 3, 4]

arrOriginal === arrCopy //true

```

## Const and arrays

The values can change as long as the reference remains the same.

```javascript

const nums = [1, 2, 3]

nums.push(4)        //is valid
nums[0] = 9         //is valid
nums = [25, 60, 80] //not valid. Is completely different, because they are different in memory
nums = [1 ,2, 3]    //not valid. Is completely different, because they are different in memory


```

## Multi dimensional arrays

```javascript

const colors = [
  ['red', 'crimson'],
  ['orange', 'dark orange'],
  ['yellow', 'golden rod'],
  ['green', 'olive'],
  ['blue', 'navy blue'],
  ['purple', 'orchid']         

const gameBoard = [
    ['X', '0', 'X'],
    ['0', null, 'X'],
    ['0', '0', 'X'],
]

//to get null value:

gameBoard[1][1] //null

```