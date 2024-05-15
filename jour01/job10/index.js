const urlModule = require('url');

const URL = "https://www.google.com&search=nodejs";

// Récupérer le protocole utilisé
const parsedURL = urlModule.parse(URL);
const protocol = parsedURL.protocol;
console.log("Protocole utilisé :", protocol);

// Récupérer le nom d'hôte
const hostname = parsedURL.hostname;
console.log("Nom d'hôte :", hostname);

// Récupérer les paramètres de l’URL
const searchParams = parsedURL.search;
console.log("Paramètres de l'URL :", searchParams);

// Reformater l’URL en une nouvelle URL valide en modifiant le nom d'hôte par “www.laplateforme.io”
parsedURL.hostname = "www.laplateforme.io";

// Ajouter à cette nouvelle URL un paramètre
parsedURL.search += "&newparam=newvalue";

// Afficher la nouvelle URL dans le terminal
const newURL = urlModule.format(parsedURL);
console.log("Nouvelle URL :", newURL);
