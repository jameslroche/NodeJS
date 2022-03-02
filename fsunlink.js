var fs = require('fs')

fs.unlink('calc1.js', function (err) {
    console.log('deleted')

})