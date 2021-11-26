# OOP

## Prototypes

__ proto__ --> Is a property that references the array prototype. A prototype is the template object for arrays, strings, etc.

If I create a new method in String.prototype, all the string variables will have that new method. 

EX: This is a demonstration, is not recommended:

```js
String.prototype.yell = function () {
  console. log(this.toUpperCase());
};

"hello".yell() //HELLO
```

We can also replace:

```js
Array.prototype.pop = function () {
return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};

[1,2,3].pop() //SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF

```

### Prototype VS __ proto__

Array.prototype is the actual object.

__ proto__ is a reference to the object Array.prototype.


## Factory functions
```js

//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"


```

This kind of functions are not recommended, because the methods live at the object instead of the proto object.

## Constructor functions

```js
// This is a Constructor Function...
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();

```

### New

In an operator.

// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) thi, object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object.

```js
```

## JavaScript Classes

### Constructor

Is a function that will execute inmediatly whenever a colour is created.
- We can call a function inside a constructor.

Example:

```js
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');

```

## Extends and Super Keywords

Inheritance: Share functionatilies between classes.

### extends

Extends from the super class.

### super

Is going to reference the class that we are extending from.

```js

class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`
    }
}

class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'MEOWWW'
    }
}

class Dog extends Pet{
    bark(){
        return 'WOOOF'
    }
}

const doby = new Dog('doby', 12)
const monty = new Cat('monty', 15)


```

```js
```

```js
```
