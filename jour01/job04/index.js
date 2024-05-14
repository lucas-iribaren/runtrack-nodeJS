const fs = require('fs');
const path = require('path');

const mainDirectory = path.join(__dirname, '../../jour01');

fs.readdir(mainDirectory, (err, files) => {
  const directories = files.filter(file => {
    return fs.statSync(path.join(mainDirectory, file)).isDirectory();
  });
  
  console.log("Dossiers présents dans le dossier principal :", directories);
});
