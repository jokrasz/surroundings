var fs = require('fs');

fs.readdir('./file', function(err, data) {
    console.log('Dane przed zapisem!');
    fs.writeFile('nowy.txt', function(err) {
        if (err) throw err;
        console.log('Zapisano!');
    });
});