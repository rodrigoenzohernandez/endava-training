/**

Let's get some practice using addEventlistener . I've provided you with two buttons, each with
an id: 'hello' and "goodbye'. Your goal is to add a click listener to each button.
       When the hello button is clicked, you should console.log "hello"
       When the goodbye button is clicked, you should console.log "goodbye"
Make sure to use addEventListener!

 */

const helloButton = document.querySelector('#hello')

helloButton.addEventListener('click', () => {
    console.log('hello')
})

const byeButton = document.querySelector('#goodbye')

byeButton.addEventListener('click', () => {
    console.log('goodbye')
})