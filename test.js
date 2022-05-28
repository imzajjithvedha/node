const fs = require('fs');

// fs.readFile('./document/tex.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// console.log('Hello');

// fs.writeFile('./document/text2.txt', 'This is written by function', () => {
//     console.log('file was written');
// });

// if(!fs.existsSync('./document/new')) {
//     fs.mkdir('./document/new', () => {
//         console.log('folder created successfully!');
//     });
// } else {
//     fs.rmdir('./document/new', () => {
//         console.log('folder deleted successfully!')
//     });
// };

if(fs.existsSync('./document/text2.txt')) {
    fs.unlink('./document/text2.txt', (err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log('file removed!');
        }
    });
}


