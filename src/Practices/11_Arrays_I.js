/* Die Satzbau-Maschine | Arrays */

/***   THEORIE *  */

/********* Überlegungen - Transponierung **********/
 
/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/
/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 2 + 1
// output("inhalt von a: " + a);

// besser mit for-schleife
// const GAP = " "
// let str = "";
// for (let i = 0; i < 10; i++) {
//     str += "test" + GAP;
//     output(str);
// };

// let a = 0;
// for (let i = 0; i < 10; i++) {
//     a+=1;
//     output("inhalt von a: "+ a);
// };

/***   PRAXIS *  */

/*** 01b. Funktionalität mit Array 2  */
// Transponierung:  untereinander ---> nebeneinander
// Helge Schneider: Anananandereihung ...

output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
// Variante 1: if else
// function getSentenceArr2(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str = "";

//     for (let i = 0; i < arr.length; i++) 
//     {if (i != arr.length -1) {
//         str += arr[i] + GAP;
//     } else {
//         str += arr[i] + PUNCT;   
//     }
//     };
//     return str;
// };

// Variante 2: structur erzeugen und trimmen

// function getSentenceArr2(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str = "";
//     for (let i = 0; i < arr.length; i++)
//     str += arr[i] +GAP;
//     return str.trim() + PUNCT;
// };

// Variante 3: ausnützen von generischen Fkt
let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
output(arr);
const GAP = " ";
const PUNCT = ".";

return arr.join(GAP) + PUNCT;

//*** 02. Array ***/ | test: "Ich bin Max Mütze." */

// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));

// let arr =["Ich","bin","die","coole","Maxine","Mützerich"];

// function getSentenceArr(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   arr[0] + GAP +
//                 arr[1] + GAP +
//                 arr[2] + GAP +
//                 arr[3] + GAP +
//                 arr[4] + GAP +
//                 arr[5] + GAP +
//                 arr[6] +
//                 PUNCT;
//     return str;
// };

// let arr =["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++)
// {
//     output(arr[i]);
// };

/* 02a. Theorie: Schleifen (for-schleife) */
 
/* For -Schleifen als allg. Wiederholungs-Struktur */

// //  increment opperator
// for (let i = 0; i < 10; i++) 
// {
//     output(i);
// };

// //  decrement opperator
// for (let i = 10; i > -1; i--) 
// {
//     output(i);
// };

// increment var scope
// for (let i = 100; i >= -1; i -= 5) 
// {
//     output(i);
// };

/*** 02. Array ***/

// let arr; 
// arr =new array(); //Konstruktor
// arr =[]; // Literal
// arr =[2,1,7,8,10];

// output(arr);
// output(arr.length);
// output(arr[0]);
// output(arr[4]);
// output(arr[arr.length-1]);

// Modul: Ausgabe in Konsole : Test
// output("hi");
function output(outputStr) {
    console.log(outputStr);
};
