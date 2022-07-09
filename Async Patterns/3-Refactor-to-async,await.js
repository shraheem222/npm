const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async ()=>{
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        console.log(first);
        const second = await readFilePromise('./content/second.txt','utf8');
        console.log(second);
        await writeFilePromise(
        './content/async-mind-grenade.txt',
        `This is awesome ${first} ${second}`
        ,{ flag: 'a'});
    } catch (error) {
        console.log(error);
    }

}

start();



// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }

// const sendText = (path) => {
//     return new Promise((resolve, reject) => {
//         writeFile(path, 'I am going to replace by Promise method.', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }