const fs = require('fs');

const newContent = "Je manipule les fichiers avec un module node !";

fs.writeFileSync('./data.txt', newContent, 'utf-8')
  console.log("Le contenu du fichier data.txt a été modifié avec succès !");
