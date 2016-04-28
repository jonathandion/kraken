var Kraken = require('kraken'),
    Download = require('download'),
    dir = require('node-dir');

module.exports = function (options) {

    var kraken = new Kraken({
        api_key: options.kraken.api_key,
        api_secret: options.kraken.api_secret
    })

    dir.readFiles(options.src,
        function(err, content, next) {
             if (err) throw err;
              next();
        },
        function(err, files){
            if (err) {
                console.log(err);
                return;
            }
            files.forEach(function (file) {
                upload({
                    file: file,
                    wait: true
                }, file)
            })
        });

    function upload(opts, p) {

        var dest = p.replace(
                    options.src,
                    options.dest)
                    .replace(/\\/g,"/")
                    .split('/')
                    .slice(0, -1)
                    .join('/');

        kraken.upload(opts, function(data) {

            if (data.success) {
                download(data, dest)
                console.log('Success. Optimized image URL: %s', data.kraked_url)
            } else {
                console.log('Failed. Error message: %s', data.message)
            }
        })

    }

    function download(data, dest) {

        new Download({mode: '755'})
            .get(data.kraked_url)
            .dest(dest)
            .run(function(err, files) {
                if(err) console.log(err)
            })
    }

};
