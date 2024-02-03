// Probeklausur

console.log("Hello, world!");
/*
Aufgabe 1 (2 Punkte)
Erzeugen Sie ein Array testArr mit 4 beliebigen Elementen vom Datentyp String.
Geben Sie anschließend das letzte Element in die JS-Konsole aus. 
*/

let testArr = ["Eins", "Zwei", "Drei", "Vier"];
console.log(testArr);


/*
Aufgabe 2 (4 Punkte)
Sie sehen folgende Struktur in Ihrem JS-Editor und 
geben Sie jeweils den Inhalt der property param1 und param2 in die JS-Console aus.:
*/
var struc =
    {
    level1:
        {
        level2:
            {
            param1: 3.14,
            param2: 10.01
            }
        }
    };
console.log(struc.level1.level2.param1);
console.log(struc.level1.level2.param2);

/*
Aufgabe 3 (3 Punkte)
a)Wie nennt man die in Aufgabe 2 verwendete Struktur? 
b)Im Zusammenhang mit der
Entwicklung von Webseiten mit HTML/JS ist Ihnen eine ähnliche Struktur bekannt -
b1)wie nennt man diese (Abkürzung) ? b2) Wann wird diese Struktur vom Browser angelegt? 
*/
/*
Antwort zu 3a) Objekt
Antwort zu 3b) 1. Document Object Modell oder DOM 2. beim parsen von HTML
*/

/*
Aufgabe 4 (16 Punkte)
Legen Sie eine JS-Funktion rechner() an. Diese soll folgende Aufgaben erfüllen:
Bei Aufruf sollen zwei Zahlen übergeben werden. In Abhängigkeit eines dritten
Parameters soll die Funktion entweder die Summe oder die Differenz der beiden Zahlen
berechnen und danach das Ergebnis als String in der Form ‘Das Ergebnis lautet: XX’
in die JS-Console ausgegeben. Verwenden Sie für die Funktionalität der Summen- bzw.
Differenzbildung 2 Funktionen summe() und differenz()
Geben Sie auch zwei Funktionscalls an!
( Plausibilitätsbetrachtungen wie Gültigkeit von Eingaben etc. sind zu vernachlässigen) 
*/
const prompt = require('prompt-sync')({sigint: true});

const FI_NUMBER = "Bitte erste Zahl eingeben: ";
const SE_NUMBER = "Bitte zweite Zahl eingeben: ";
const CHO_OP1 = "Bitte Rechenart auswählen: | + | - | ";
const RESULT_STR = "Das Ergebnis lautet : "

startApp();
function startApp() {
    output(RESULT_STR + calculator(getNum1(), getNum2(), getOp1()));
};

function summe (a, b) {
	return a + b ;
};

function differenz(a, b) {
	return a - b ;
};

function calculator(a, b, op1)	{
    switch (op1) {
        case "+":	{
            return(summe(a, b))
        }
        case "-":	{
            return(differenz(a, b))
        }
    };
};

function getOp1(){		
    let op1 = prompt(CHO_OP1);
            return op1;
        }

function getNum1(){
    let a = prompt(FI_NUMBER);
            return parseInt(a);
        }

function getNum2(){
let b = prompt(SE_NUMBER);
        return parseInt(b);
    }

function output(outputData) {
	console.log(outputData);
};

