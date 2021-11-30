# DOM

- Document Object Model
- The DOM is a JavaScript representation of a webpage.
- It's your JS "window" into the contents of a webpage
- It's just a bunch of objects that you can interact with via JS.

## Document

The document object is our entry point into the world of the DOM.
It contains representations of all the content on a page, plus tons of useful methods and properties

DOCUMENT
    BODY
        H1
        UL
            LI
            LI

How to print it?

console.dir(document)

## Phases


### Selecting

getElementByld
```js
const image = document.getElementById('unicorn')
```

getElementsByTagName
```js
const allImages = document.getElementsByTagName('img');
```

getElementsByClassName
```js
const squareImages = document.getElementsByClassName('square');
```

#### querySelector

A newer, all-in-one method to select a single element.

```js
//Finds first hl element:
document.querySelector('h1');
//Finds first element with ID of red:
document.querySelector('#red');
//Finds first element with class of
dogument.querySelector('.big');
```

#### querySelectorAll

Same idea , but returns a collection of matching elements


### Manipulate

#### Importants

innerText: Shows just the text that is being shown at the moment.
textContent: Shows all the text, even the hidden text with css (display: none)
innerHTML: Returns the html, and allows to change the html. We can use += to add html, instead of just replacing.

setAttribute(): Allows to change an attribute content

```js
document.querySelector('img').setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg')
```
style: It doesn't show styles from css. Only shows inline styles. But it allows us to change the current styles.

```js
document.querySelector('h1').style.color = 'green'
```

How to get the actual style?

```js
const h1 = document.querySelector('h1')
window.getComputedStyle(h1)
```

classList

```js
const h2 = document.querySelector('h2')

h2.classList.add('purple')
h2.classList.add('green')
h2.classList.remove('purple')
h2.classList.containts('green') //true
h2.classList.remove('purple')
h2.classList.toggle('green') //toggle on and toggle of



```

Others:


setAttribute ()
appendChild ()
append ()
prepend ()
removeChild ()
remove ()
createElement
innerText
textContent
innerHTML
value
parentElement
children
nextSibling
previousSibling
style

#### Events

clicks
drags
drops
hovers
scrolls
form
submission
key presses
focus/blur
mouse wheel
double click
copying
pasting
audio start
screen resize
printing

## Traversing Parent/Child/Sibling

- .parentElement --> returns the parent element. Every element has just one parent
- .childElementCount --> counts the children of an element
- .children --> returns an array with the children in the order that are found in the DOM

- nextSibling --> returns the node element of the next element
- nextElementSibling --> returns next element
- previousSibling
- previousElementSibling --> returns previous element

## Creating new elements

```js
const newImage = Document.createElement('img')
newImage.src = 'www.textimage.com/resource'

//option 1 - add at the end
document.body.appendChild(newImage)

//add at the begining of the element
document.body.prepend(newImage)

//append text

const p = document.querySelector('p')
p.append('new text') //is added to the end of the paragraph

p.append('new text','new text2' ) //is added to the end of the paragraph

p.insertAdjacentElement('afterend', newImage)

```

## Remove

### RemoveChild

We have to call the method at the parent.

```js
b.parentElement.removeChild(b)
```

### Remove

Removes the actual element

```js
element.remove()
```

##### addEventListener

Specify the event type and a callback to run

```js
const button = document.querySelector('h1');

button.addEventListener('click', () => {
  alert("You clicked me!!")
})
```

```js
```

```js
```
