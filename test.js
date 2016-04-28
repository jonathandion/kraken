var kraken = require('./index');
var path = require('path');

kraken({
    src: './src/images/',
    dest: './build/images/',
    kraken : {
        api_key: 'API_KEY',
        api_secret: 'API_SECRET'
    }
})
