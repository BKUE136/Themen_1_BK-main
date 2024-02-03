/* 
funktion
*/
const prompt = require('prompt-sync')({sigint: true});

// funkionsaufruf | call

// test();
// ausgabeNamen()

// function test()

// {
//     console.log("Hallo, Du da. ");
// }

// 2a. Parametrisierung + Datenübergabe von INNEN

// function ausgabeNamen()

// {
//     let firstName = prompt ("Bitte Namen eingeben: "); // Diese deklaration ist rekursiv
//     console.log("Hallo Du da, " + firstName +"!");
// }

// 2b. Parametrisierung + Datenübergabe von Außen

// ausgabeNamen2("Maria"); //Argument
// ausgabeNamen2("Marim");
// ausgabeNamen2("Madim");

// let firstName = prompt ("Bitte Namen eingeben: ");

// function ausgabeNamen2(firstName)
// {
// console.log("Hallo, "+ firstName + "!")
// }

// ausgabeNamenParams(prompt ("Bitte Vornamen eingeben: "), prompt ("Bitte Nachnamen eingeben: ")); //Piping

// function ausgabeNamenParams(firstName, familyName)
// {
//         console.log("Hallo, "+ firstName + " " + familyName + "!")
// }
// ;

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamenParamsSRP("Max", " Mütze")
// ausgabeNamenParamsSRP(prompt ("Bitte Vornamen eingeben: "), prompt ("Bitte Nachnamen eingeben: ")); //Piping

// function ausgabeNamenParamsSRP(firstName, familyName)
// {
//     // 1.Funktionalität: string composing
//     const GAP = " ";
//     let word = "Hallo," + GAP + firstName + GAP + familyName + "!"
//     // 2. Funktionalität: string output
//     console.log(word)
// }
// ;

// exkurs 1.Funktionalität: string composition

// output(getString("Max", "Mütze"));

// function getString(firstName, familyName) 
// {
//     const GAP = " ";
//     let outputStr = "Hallo," + GAP + firstName + GAP + familyName + "!"
//     return outputStr;
//     console.log ("hi") // dieser Befehl ist unerreichbarer Code! Daher ausgegraut!
// };

// function output(outputData) // Funktionalität als Kaspselung | function as a wrapper
// {
//     console.log(outputData);
// };
