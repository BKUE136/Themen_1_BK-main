/*
Berechnung Alter
*/

// Deklaration

let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 1990;

// Berechnung Alter

let date = new Date(); // Systemfunktion Datum
let year = date.getFullYear(); // Daten liefern lassen!!

ageJohn = year - birthYearJohn 
ageMark = year - birthYearMark

console.log("John's Age is: " + ageJohn);
console.log("Mark's Age is: " + ageMark);
console.log("Datum: " + date);

let isJohnOlder, isJohnEqual, isJohnYounger;

isJohnOlder = (ageJohn > ageMark);
isJohnequal = (ageJohn == ageMark);
isJohnYounger = (ageJohn < ageMark);

if (isJohnOlder == true){
  console.log("John ist älter als Mark.")
}
else if (isJohnEqual){
  console.log("John ist genauso alt wie Mark.")
}else if (isJohnYounger){
  console.log("Mark ist älter als John.")
}
else ("Hier ist was falsch!")

