# Objects Literals

An object is a data structure. 

- Objects are collections of properties.
- Properties are a key-value pair
- Rather than accessing data using an index, we use custom keys.
- All types are welcome
- Valid keys will be converted to string, instread of symbols that will be symbols.

```javascript
const fitBitData = {
    totalSteps : 308727,
    totalMiles : 211.7,
    avgCalorieBurn  : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep  : '2:13'
};
```

## Creation

```javascript
const person ={
    firstName: 'Rodrigo', 
    lastName: 'Hernandez'
}
```

## Access

```javascript
const person ={
    firstName: 'Rodrigo', 
    lastName: 'Hernandez'
}

//option 1 - This option is ment to use expressions inside the brakets. For example a variable

let prop = firstName

person[prop]

//option 2

person.firstName
```

## Updating
```javascript
const midterms = {
    danielle: 96,
    thomas: 78
}

//option 1

midterms.thomas = 79

//option 2

midterms['danniele'] = 100
```

## Adding
```javascript
const midterms = {
    danielle: 96,
    thomas: 78
}

//option 1

midterms.ezra = 'B+'

//option 2

midterms['rodrigo'] = 'A-'

```

## Nesting Arrays & Objects

```javascript
const shoppingCart ={
    {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1,
    ,
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }
  }

const student = {
    firstName: 'David',
    lastName: 'Jones', 
    strengths: [ 'Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}


```