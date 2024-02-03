/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});

const firstName = prompt ("Bitte Namen eingeben: ");
let age;
        while (isNaN(age))
        {
                age =  parseInt (prompt ("Bitte Alter eingeben: "));
        }


// console.log(age);

// switch (true) {
//     case (age >= 0) && (age <= 5) :
//         console.log(firstName + " trinkt Milch.");
//         break;
//     case (age >= 6) && (age <= 12):
//         console.log(firstName + " trinkt Saft" + " oder" +  " trinkt Milch");
//         break;
//     case (age >= 13) && (age <= 17):
//         console.log(firstName + " trinkt Cola" + " oder" +  " trinkt Saft" + " oder" +  " trinkt Milch");
//         break;
//     case (age >= 18) && (age <= 130):
//         console.log(firstName + " trinkt Wein" + " oder" +  " trinkt Cola" + " oder" +  " trinkt Saft" + " oder" +  " trinkt Milch");
//         break;   
//     default:
//         console.log("Bitte Tee in den oberen Input einführen!");   
//         break;
// }


// if-else-statement

// console.log("Datentyp: " + typeof age + " Alter: " + age);

isAgeless6 = (age < 6);
isAgeLess13 = (age < 13);
isAgeLess18 = (age < 18);
isAgeless131 = (age < 131);

isNameJasper = (firstName == "Jasper");

if (isNameJasper)
{   
        console.log(firstName + " trinkt ausschließlich Monster. ");
}
else if (isAgeless6) 
{
    console.log(firstName + " trinkt Milch.");
}
else if (isAgeLess13) 
{   
        console.log(firstName + " trinkt Saft" + " oder" + " trinkt Milch.");
}
else if (isAgeLess18) 
{   
        console.log(firstName + " trinkt Cola" + " oder" +  " trinkt Saft" + " oder" +  " trinkt Milch. ");
}
else if (isAgeless131) 
{   
        console.log(firstName + " trinkt Wein" + " oder" +  " trinkt Cola" + " oder" +  " trinkt Saft" + " oder" +  " trinkt Milch. ");
}
else
{
    console.log("Du bist so alt geworden, du darfst alles trinken was du willst, sogar Korn.");
}
