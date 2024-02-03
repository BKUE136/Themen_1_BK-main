// let arr;
// arr =["Ich", "bin", "Max"];

// output(arr);
// output(arr[0][0]+ "" + arr[1][2]);
// output("-----------------");

// // nested loop
// for (let i = 0; i < arr.length; i++) 
// {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);      
//     }
// }

/***** Objekte 1 Daten/Funktionen *******/

let person =    {
                firstName: "Ben",
                familyName: "K2hn",
                salary: [120000, 160000],
                permission: true,
                sayHello: function() {
                    return TXT; // Aufrufe von Innen können über this. erfolgen //
                },
                };

// output(person);
// output(person.firstName);
// output(person.permission);
// output(person.salary[1]);

// const GAP = " ";
// const TXT = "Ich bin " + person.firstName + GAP +  person.familyName + GAP + "und verdiene" + GAP + person.salary[1] + GAP + "p.a.";

// output(person.sayHello());


/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest
// nested object {{{}}}

// let baikal = {
//     value: "10m",
//     deep: {
//         deeper: {
//             temperatur: "4 Grad Celsius",
//             deepest: "Das Licht - auf 1642m!",
//         },
//     },

// };

// output(baikal.deep.deeper.temperatur);
// output(baikal.deep.deeper.deepest);
// // Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
};
