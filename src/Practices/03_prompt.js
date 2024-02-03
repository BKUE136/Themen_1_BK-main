/*
Prompt
*/

const prompt = require('prompt-sync')({sigint: true});

let firstName = prompt("Vorname? ");
let familyName = prompt ("Nachname? ");
let coffee = prompt ("Wieviel Kaffee? ");
console.log ("Hallo, " + firstName + " " + familyName + "! " + "Willkommen in der Welt." + " Du hast schon " + coffee +" Kaffee getrunken!");
