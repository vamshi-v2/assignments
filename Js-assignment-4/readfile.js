const fs = require('fs');

function myReadFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (data) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

myReadFile('hello.txt')
    .then(data => {
        console.log('File content:', data);
    })
    .catch(err=> {
        console.error('Error reading file.', err);
    });
