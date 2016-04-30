# kraken
Node module to optimize all your images locally with the powerful Kraken.io API

## How to use

```javascript

var kraken = require('kraken-images');
var path = require('path');

kraken({
    src: path.join(__dirname + '/src/'),
    dest: path.join(__dirname + '/build/'),
    kraken : {
        api_key: 'your_api_key',
        api_secret: 'your_api_secret'
    }
})

```
