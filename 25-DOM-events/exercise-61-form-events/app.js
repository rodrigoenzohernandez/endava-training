/*
Time to get some practice working with forms and form events! index.html already has a form
element that contains two <input> elements, one for quantity and one for a product name.
 index.html also contains an empty <ul> where you will append new <li> 's. Watch the gif
at the bottom for an overview of how your code should work. Your task is to follow these
steps:
     Listen for the form submission
    When the form is submitted, prevent the default behavior
     Grab the quantity input value and the product input value
     Create a new <li> element. Set the text on the new <li> to include the quantity and
     product name from the form.
    Append the new <li> to the <ul> on the page
     Reset the inputs
Please note:
1. Udemy's interface does not yet recognize some of the newer JS syntax, e.g. .append()
You will need to use alternate (older) syntax for this method in order to get the tests to pass.
2. The form will need to be assigned to a variable named form for the test to pass, I've already
included this line of code for you in the app.js code.
*/

const form = document.querySelector('form');

//Listen for the form submission
form.addEventListener('submit', (e) =>{
    //prevent the default behavior
    e.preventDefault()

    //Grab the quantity input value and the product input value
    const prodInput = document.querySelector('#product')
    const quantityInput = document.querySelector('#qty')

    //Create a new <li> element.
    const newLi = document.createElement('li')

    //Set the text on the new <li> to include the quantity and product name from the form.
    newLi.innerText = `${quantityInput.value} ${prodInput.value}`

    //Append the new <li> to the <ul> on the page
    const ul = document.querySelector("#list")
    ul.appendChild(newLi)

    quantityInput.value = null
    prodInput.value = null
})