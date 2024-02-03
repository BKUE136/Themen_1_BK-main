/*
The fast attack is available when the knight is sleeping
@param {boolean} knightIsAwake
@return {boolean} Whether or not you can execute a fast attack.
*/

// dataset test1:
// const knightIsAwake = true;

// dataset test2:
// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;

// dataset test3:
// const archerIsAwake = false;
// const prisonerIsAwake = true;

// const
// const knightIsAwake = true;
// // test1: canExecuteFastAttack(knightIsAwake) |export|
// export function canExecuteFastAttack() {
//     return knightIsAwake != true;
// };

// // test2: canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) |export|
// export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {

//     return (knightIsAwake != true && archerIsAwake === true && prisonerIsAwake != true);
// };

// // test3: canSignalPrisoner(archerIsAwake, prisonerIsAwake) |export|
// export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
//     return (archerIsAwake!= true && prisonerIsAwake === true);
// };

// // dataset test4:
// const knightIsAwake = false;
// const archerIsAwake = false;
// const prisonerIsAwake = true;
// const petDogIsPresent = true;

// // test4: canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent,) |export|
// function canFreePrisoner(knightIsAwake, archerIsAwake,prisonerIsAwake, petDogIsPresent) {
//     if ((archerIsAwake === true && petDogIsPresent  === true)) {
//         return canFreePrisoner != true;
//     } else {(
//         knightIsAwake != true &&
//         archerIsAwake != true &&
//         prisonerIsAwake === true ||
//         petDogIsPresent  === true
//         ); 
//         return canFreePrisoner === true;
//     };
// };


// if ((archerIsAwake === true && petDogIsPresent  === true)) {
    
// };


// if ((archerIsAwake === true && petDogIsPresent  === true)) {
//     return canFreePrisoner != true;
// } else {(
//     knightIsAwake != true &&
//     archerIsAwake != true &&
//     prisonerIsAwake === true ||
//     petDogIsPresent  === true
//     ); 
    
// };

// false(archerIsAwake === true && petDogIsPresent  === true)
//test_NR                       [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
// const knightIsAwake =        [0,  0,   0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1]
// const archerIsAwake =        [0,  0,   0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  1,  1,  1,  1]
// const prisonerIsAwake =      [0,  0,   1,  1,  0,  0,  1,  1,  0,  0,  1,  1,  0,  0,  1,  1]
// const petDogIsPresent  =     [0,  1,   0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1]
// expected =                   [0,  1,   1,  1,  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0]
// fct eC24                     [0,  1,   1,  1,  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0]
// Jasper                            x                                x  c24  x

// petDogIsPresent === true && (knightIsAwake != true && archerIsAwake != true)
// petDogIsPresent === true && (knightIsAwake === true && archerIsAwake != true)
// prisonerIsAwake === true && (knightIsAwake != true && archerIsAwake != true)

//     (((petDogIsPresent === true || prisonerIsAwake === true) && archerIsAwake != true) 
// && 
//     (knightIsAwake != true || archerIsAwake != true))

// // dataset test4:
// const knightIsAwake = true;
// const archerIsAwake = false;
// const prisonerIsAwake = true;
// const petDogIsPresent = false;

// // fct eC24
// function eC24(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
//     return (
//         (archerIsAwake != true &&
//         (prisonerIsAwake === true ||
//         petDogIsPresent  === true)) 
//       &&
//         (knightIsAwake != true ||
//          archerIsAwake != true)
//         );
// };

// // fct c24
// function c24(knightIsAwake, prisonerIsAwake, petDogIsPresent) {
//     return (
//         (knightIsAwake === true && prisonerIsAwake === true) && petDogIsPresent != true
//         );
// };
// // fct can free 2 -the sequell
// function canFreePrisoner(
//     knightIsAwake,
//     archerIsAwake,
//     prisonerIsAwake,
//     petDogIsPresent) {
//     if (!archerIsAwake && (prisonerIsAwake || petDogIsPresent)) {
//       return true;
//     } else (knightIsAwake && prisonerIsAwake) {
//         return false;  
//     };
//       return false;
//     };

// // fct can free
// function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
//     let c24Value =false;
//     if (c24(knightIsAwake, prisonerIsAwake, petDogIsPresent) === true ) {
//         return c24Value === true;
//     } else {   
//     return eC24(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
//   }
//   };

// output()
function output(outputData) {
    console.log(outputData);
};

// module App for output
startApp();
function startApp() {
    // output("task_1: "   + canExecuteFastAttack(knightIsAwake));
    // output("task_2: "    + canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));
    // output("task_3: "    + canSignalPrisoner(archerIsAwake, prisonerIsAwake));
    // output("task_Finale: "  + canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent,));
    // output("task_A: eC24 "       + eC24(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));
    // output("task_B: c24 "       + c24(knightIsAwake, prisonerIsAwake, petDogIsPresent));
};
