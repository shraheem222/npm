const { readFile, writeFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

const sendText = (path) => {
    return new Promise((resolve, reject) => {
        writeFile(path, 'I am going to replace by Promise method.', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

getText('./content/first.txt')
    .then(() => getText('./content/second.txt'))
    .then(() => sendText('./content/result-async.txt'))
    .then((data) => console.log(data))
    .catch(err => console.log(err));