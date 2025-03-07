// console.log("heelo guys");

// const fs = require('fs');

// fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
//     if (err) throw err;
//     console.log('File written successfully');
// });


// fs.readFile('output.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// const path = require('path');


// console.log(path.basename('C:/Users/user/Desktop/React notes lords/backend/app.js')); // file.txt
// console.log(path.dirname('C:/Users/user/Desktop/React notes lords/backend/app.js'));  // /users/deepak/documents
// console.log(path.extname('app.txt'));  // .js


// const os = require('os');


// console.log(os.platform());
// console.log(os.arch()); // x64, arm, etc.
// console.log(os.cpus()); // CPU information
// console.log(os.freemem()); // Free memory in bytes
// console.log(os.totalmem()); // Total memory in bytes


// const fs = require('node:fs');
// const folderName = 'C:/Users/user/Desktop/React notes lords/New Folder';
// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   }
// } catch (err) {
//   console.error(err);
// }


// const fs = require('node:fs');
// const folderPath = '/Users/user/Desktop/React notes lords/mySQL';
// fs.readdirSync(folderPath);


// const fs = require('node:fs');

// fs.rename('/Users/user/Desktop/React notes lords/New Folder', '/Users/user/Desktop/React notes lords/Lords Folder', err => {
//   if (err) {
//     console.error(err);
//   }
//   // done
// });


// const fs = require('node:fs');

// fs.rmdir('/Users/user/Desktop/React notes lords/Lords Folder', err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`${dir} is deleted!`);
// });



// const fs = require('fs').promises;

// async function readFileAsync() {
//     try {
//         const data = await fs.readFile('output.txt', 'utf8');
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     }
// }

// readFileAsync();



// const fs = require('fs').promises;

// fs.readFile('output.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));



// const fs = require('fs');

// fs.readFile('output.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });



// fs , path , os , http



const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World! This is my first Node.js server.');
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});