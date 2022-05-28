const fs = require('fs');

const readStream = fs.createReadStream('./document/text.txt', {encoding: 'utf8'});

// readStream.on('data', (chunk) => {
//     console.log('---- NEW CHUNK -----');
//     console.log(chunk);
// });

const writeStream = fs.createWriteStream('./document/text2.txt');

// readStream.on('data', (chunk) => {
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk);
// });


readStream.pipe(writeStream);

 