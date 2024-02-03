
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/
const prompt = require('prompt-sync')({sigint: true});

//#region Lösung von mir

// let a = parseFloat(prompt ("Wie Groß ist die Zahl a? "));
// let b = parseFloat(prompt ("Wie Groß ist die Zahl b? "));
// let sumab = parseFloat(a+b);

// console.log ("Die Summe von " + a + " und " + b + " ist " + (a+b));
// console.log ("∑ab = " + sumab);

/* 
Variante 1: gut Lesbar, viele Variablen
*/

// let ziffer1, ziffer2, zahl1, zahl2, summe;

// ziffer1 = prompt("Bitte Zahl 1 eingeben: ");
// ziffer2 = prompt("Bitte Zahl 2 eingeben: ");

// console.log("Datentypen: " + typeof ziffer1);
// console.log("Datentypen: " + typeof ziffer1);

// // typenkonvertierung: ziffer -> zahl (mit nachKomma)
// zahl1 = parseFloat(ziffer1);
// zahl2 = parseFloat(ziffer2);

// console.log(zahl1+zahl2)

// kompaktere Lösung

// let zahl1, zahl2, summe;

// zahl1 =parseInt(prompt("Zahl 1: "));
// zahl2 =parseInt(prompt("Zahl 2: "));

// summe =zahl1 + zahl2;
// console.log ("Die Summe der Zahlen ist : " + summe)

// sehr kompakt

console.log(
    "Die Summe ist: " +
    (
        parseFloat(prompt("Bitte Zahl 1 eingeben "))+
        parseFloat(prompt("Bitte Zahl 2 eingeben "))
    )
);
