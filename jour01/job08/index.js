const fs = require('fs');

const data = fs.readFileSync('./data.txt', "utf-8");

let newMessage = ""
for (let i = 0; i < data.length; i += 2){
    newMessage +=  data[i]
}

console.log('Une Lettre sur deux du fichier data.txt:', newMessage)