Quota
=========================
_Random quote API_

I built this for a personal project. Anyone is welcome to use it

- Database consist of one quote for every champion in league of legends
- Easy to use
- Allows requests over HTTP or HTTPS

### Usage
To get a new random quote, make a request to:
`https://serve-lol-quotes-andrewclark.glitch.me/random`

This returns a JSON object in the following format:
```
  {
    quoteText: String
    quoteAuthor: String
  }
```


##### Javascript Example

```js
  fetch('https://serve-lol-quotes-andrewclark.glitch.me/random')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.quoteText} -${data.quoteAuthor}`)
  })
```

##### jQuery Example

```js
  $.getJSON('https://serve-lol-quotes-andrewclark.glitch.me/random'), function(data) {
    console.log(`${data.quoteText} -${data.quoteAuthor}`)
  }
```
