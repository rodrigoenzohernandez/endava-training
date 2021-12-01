# DOM EVENTS

Events: Respond to user inputs and actions

- clicks

```html
<!-- option 1 -->
<button onClick="alert('You clicked me')">Click Me</button>
```

```js
// option 2

//if you console log btn, you will see all the functions in null, and they can be asigned to a function.

const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU CLICKED ME");
  console.log("I HOPE IT WORKED");
};

function scream() {
  console.log("AHHH");
}

btn.onmouseenter = scream;
```

## 3rd option: addEventListener

Specify the event type and a callback to run

- Is the only way that allows us to chain callbacks to the same event.

```js
const button = document.querySelector("h1");

//we can change the 'click' to any other event
button.addEventListener("click", () => {
  alert("You clicked me!!");
});
```

Chain

```js
const button = document.querySelector("h1");

function twist() {
  console.log("twist");
}

function shout() {
  console.log("shout");
}

//we can change the 'click' to any other event
button.addEventListener("click", twist);
button.addEventListener("click", shout);

//run just once

button.addEventListener("click", twist, { once: true });
```

- drags
- drops
- hovers
- scrolls
- form
- submission
- key presses
- focus/blur
- mouse wheel
- double click
- copying
- pasting
- audio start
- screen resize
- printing

## Events & the KeyWord THIS

```js
const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", colorize);
}

const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}

function colorize() {
  //this refers to the element that is being clicked.
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
```

## Keyboards Events & Event objects

e.key --> the letter o number. Example: a
e.code - the code that correspondes to the actual physical location of the key. Example: KeyA

```js
window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    default:
      console.log("IGNORED!");
  }
});
```

## FormEvent

Default behaviour: All the page goes to the new page.

How to prevent that behaviour:

```js
const form = document.querySelector("#shelterForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("SUMITTED THE FORM!");
});
```

Another example:

```js
const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const catName = input.value;
  const newLI = document.createElement("LI");
  newLI.innerText = catName;
  list.append(newLI);
  input.value = "";
});
```

## Input & change events

some keys are not included in the "key down" format. For example shift, or copy and paste.

### Change

It changes when you leave the input (loss your focus) and when the input is different to the previous one.

```js
const input = document.querySelector('input');
input.addEventListener ('change', function (e) {
     console.log ("CASKDJASKJHD")
}
```

### Input

It changes every time the value of the input changes

```js
const input = document.querySelector('input');
input.addEventListener ('change', function (e) {
    h1.innerText = input.value //changes in real time h1
     console.log ("CASKDJASKJHD")
}
```

## Event Bubbling

When I click the button, all the onclicks will be executed. It's called bubbling.

Order: button --> p --> section

```js
<section onclick="alert('section clicked')">
  <p onclick="alert('paragraph clicked')">
    I am a paragraph:
    <button onclick="alert('button clicked')">Click</button>
  </p>
</section>
```

How to stop bubbling?

```js
button.addEventListener("click", function (e) {
  container.style.backgroundColor = makeRandColor();
  e.stopPropagation(); //with this method stops the propagation
});
```

## Event Delegation

We add our event listener after another event. For example add a new event listener to remove new items after creating them.

e.target --> The object that was actually clicked

```js
const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove();
});
```
