// 1.task: expectedMinutesInOven

const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;
console.log(EXPECTED_MINUTES_IN_OVEN);

// 2.task: remainingMinutesInOven

let actualMinutesInOven;
function remainingMinutesInOven(actualMinutesInOven) {
let actualMinutesInOven = 10;
  return Number(EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);
};

// function getsparetime(actualMinutesInOven) {
//   actualMinutesInOven =10;
//   return Number(EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);
// };

console.log(getsparetime());
// console.log(actualMinutesInOven);

// export function remainingMinutesInOven(actualMinutesInOven) {
//   throw new Error(rmio);
// };

// 3.task: 
// export function preparationTimeInMinutes(numberOfLayers) {
//   throw new Error('Remove this line and implement the function');
// }

// 4.task
// export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
//   throw new Error('Remove this line and implement the function');
// }
