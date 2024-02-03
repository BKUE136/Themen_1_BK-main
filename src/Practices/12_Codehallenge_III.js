/*** Mini-Challenge  */

// Const
const prompt = require('prompt-sync')({sigint: false}); // input
const PUNCT = ".";  // .
const QUEST = "?"; // ?
const EXC = "!"; // !
const CHECK = " get F*ed"
const STR_ENTER_Pop = "Bitte Satzzeichen eingeben!: | S:. | Q:? | E:! |"
const ERR_STR_ENTER_Pop = " | S:. | Q:? | E:! |"

let arr = ["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"];

// module App
startApp();
function startApp() {
    output(getSentence(arr, getPop(), )); // FEHLER ?
};

// prompt "enter punct"
function getPop() {
    let op1 = prompt(STR_ENTER_Pop);
    while (!isPop(op1)) {
        op1 = prompt(ERR_STR_ENTER_Pop);
    }
    return op1;
};

function isPop(op1) {
    return op1 === "S" || op1 === "Q" || op1 === "E";
};

/*** Funktion mit Array als Parameter | mögliche Tests: */
// output(getSentence(["Ich","bin","Max"],"S"));
// output(getSentence(["Bist","du","Max"],"Q"));
// output(getSentence(["Ich","bin"],"E"));
output(getSentence(arr, op2)); // FEHLER ? // "Q" ist statisch

function getSentence(arr, op2) {
    const GAP = " ";
    let str = ""; 
    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length-1) {
            str += arr[i] + GAP;
        } else { getPunct(op2)
            str += arr[i] + getPunct(op2);
        }
    }
     return str;
};

function getPunct(op2) {
    switch (op2) {
        case isPop("S"):
           return PUNCT; 
        case isPop("Q"):
            return QUEST;
        case isPop("E"):
            return EXC;
        default:
            return CHECK; // this returns F*ed
    };

};

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
};
