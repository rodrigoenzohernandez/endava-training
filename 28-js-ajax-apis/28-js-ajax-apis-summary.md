# Requests

- XMLHTTTP
- FETCH
- AXIOS

## API

Application programming interface.

## Web API

HTTP based.

## AJAX

- ASYNCHRONOUS
- JAVASCRIPT
- AND
- XML

## AJAJ

- ASYNCHRONOUS
- JAVASCRIPT
- AND
- JSON

## HTTP REQUESTS

- Foundation of communcation on the world wide web
- Hyper Text Transfer Protocol
- Request       -> I would like this information please
- Response      -> Ok, here you go

## JSON

- Is a format for sending data. 
- Is similar to JS. 
- Is used in another programming languages

Differences:

- Every key needs to have ""

- Java
- Script
- Object
- Notation

```json
{
   "squadName": "Super hero squad",
   "homeTown": "Metro City",
   "formed": 2016,
   
   
   "secretBase": "Super tower",
   "active": true,
   "members": [
      "Molecule Man",
         "Madame Uppercut",
         "Eternal Flame"]
}
```

### Methods

#### JSON.parse(data)

Converts the JSON to a JS object.

#### JSON.stringify(data)

Converts JS object to JSON




## POSTMAN

### XMLHttpRequest

• The "original" way of sending requests via JS.
• Does not support promises, so...lots of callbacks! WTF is going on with the weird capitalization?
• Clunky syntax that I find difficult to remember

```js
const myReq = new XMLHttpRequest();
myReq.onload = function() {
    const data = JSON.parse(this.responseText);
    console.log(data);
};
myReq.onerror = function(err) {
    console.log('ERROR!', err);
};
myReq.open('get', 'https://icanhazdadjoke.com/', true);
myReq.setRequestHeader('Accept', ' application/json');
myReq.send( );
              
```

## Fetch API

The newer way of making requests via JS
• Supports promises!
• Not supported in Internet Explorer :(

## FETCH

A fetch returns a promise.

```js
fetch( 'https://icanhazdadjoke.com/23/2', {
    headers : { Accept: 'application/json' }
} )
    .then((res) => {
         if (res.status !== 200){
             console.log('Problem!', res.status);
             return;
         }
         res.json().then((data) => {
             console.log(data);
         });
    })
    .catch(function(err) {
        console.log('Fetch Error', err);
    });
```

## AXIOS

A library for making HTTP requests.

- It can be used at the front and also at the back.
- It returns parsed data.


- Require it:

```html
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

- Do the fetch

```js
const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR!", e)
    }
}
```

Fetch with headers

```js
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}
```

## query string

Is ke value pair information that we can provide as part of a URL.

Example: /search?q=field-to-find

Combined query strings

Example: /show/2/episodebynumber?season=1&episode=7

## Headers


