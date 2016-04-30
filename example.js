var kraken = require('./index');
var path = require('path');

kraken({
    src: './src/images/',
    dest: './build/images/',
    kraken : {
        api_key: 'your_api_key',
        api_secret: 'your_api_secret'
    }
})
