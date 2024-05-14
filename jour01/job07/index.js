const fs = require('fs');

fs.readFile('./data.txt', "utf-8", (err, data) =>{
    console.log(`Contenu du fichier data.txt:${data}`)
});
