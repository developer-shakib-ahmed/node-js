const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}\\stream-data.txt`);

ourReadStream.on('data', (chunck) => {
    console.log(chunck.toString());

    console.log('-----------------------');
    console.log('-----------------------');
    console.log('-----------------------');
});