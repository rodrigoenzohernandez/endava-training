/**

Let's get some practice working with DOM element attributes. I've provided you with some very
basic markup. Please select the image element and:
       • change its source to this url: https://devsprouthosting.com/images/chicken.jpg
        change its alt text to be "chicken"
 */

// YOUR CODE GOES IN HERE:

//first option

document.querySelector('img').src = 'https://devsprouthosting.com/images/chicken.jpg'

//second option

document.querySelector('img').setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg')


document.querySelector('img').alt = 'chicken';