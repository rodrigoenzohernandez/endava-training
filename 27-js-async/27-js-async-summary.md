# Async JS

## The call stack

The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.
How JS "knows" what function is currently being run and what functions are called from within that function, etc.

STACK --> LIFO

- Last thing in
- first thing out

• When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
• Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
• When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

```js
const multiply (х, у) > х * у; 
const square = (x) => multiply(x, x);
const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) ===  square(c);
};
                        
                                       
isRightTriangle(3, 4, 5);
```


JS is single threaded: At any given point in time, that single JS thread is running at most one line of JS code.

Workaround

```js
console.log('I print first!');
setTimeout(() => {
   console.log('I print after 3 seconds');
}, 3000);
console.log('I print second!');
```

The browser does de work.

• Browsers come with Web APIS that are able to handle certain tasks in the background (like making requests or setTimeout)
• The JS call stack recognizes these Web API functions and passes them off to the browser to take care of
• Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.

## Callback hell

When we nest a lot of callbacks.

```js
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
   } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
     gm( source + filename).size(function (err, values) {
        if (err) {
          console.log( 'Error identifying file size: ' + err)
         } else {
          console.log(filename + ': ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '' + filename,
                 
                   
function(err) {
              if (err) console.log('Error writing file: ' + err)
            } )
          }.bind(this))
        }
      })
    })
  }
})
```

## Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation
- A A pattern for writing async code

A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

loadRedditPosts (not shown) returns a promise

```js
loadRedditPosts('/r/funny')
    //this runs if promise is resolved:
    .then( (res) => {
        console.log(res.data);
  } )
  //this runs if promise is rejected:
    .catch((err) => {
        console.log('Oh No!', err);
    });
```

This function returns a Promise which is randomly resolved/rejected.

```js
const makeFakeRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             const randNum Math.random( );
            if (randNum > 0.5) resolve({ data: 'lol', status: 200 });
             reject({ status: 404, data: 'NO DICE' });
        }, 1000);
    });
};
```

## Async functions

A newer and cleaner syntax for working with async code! Syntax "makeup" for promises

### Pieces

#### Async

Async functions always return a promise.
• If the function returns a value, the promise will be resolved with that value
• If the function throws an exception, the promise will be rejected



```js
async function hello() {
    return 'Hey guy!';
}
hello();
// Promise {<resolved>: "Hey guy!"}
async function uh0h() {
    throw new Error('oh no!');
}
uh0h( );
//Promise {<rejected>: Error: oh no!}
```

#### Await

• We can only use the await keyword inside of functions declared with async.
• await will pause the execution of the function, waiting for a promise to be resolved


Another example

```js

const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'test') return 'WELCOME'
    throw 'Invalid Password'
}

async function doLogin(username, password){
    try {
        let response = await login(username, password)
        console.log('Logged in')
        console.log(response)
    } catch (error) {
        console.log('Error')
        console.log(error)
    }
}

```


