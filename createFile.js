const fs = require('fs');

const fileName = 'message.txt';
const content = 'Hello, this is a message written to the file!';

fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`File ${fileName} created and written to successfully.`);
    }
});