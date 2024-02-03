// const given
const BILLABLE_DAYS = 22;
const HOURSPERDAY = 8;

// variables given
let ratePerHour = 29.654321;
let numDays = 155;
let discount = 0.2547;

// testData for test2:
// let budget = 27467;

// // testData1
// let ratePerHour = 16;
// let numDays = 70;
// let discount = 0;

// // testData2
// let ratePerHour = 16;
// let numDays = 130;
// let discount = 0.15;

// // testData3
// let ratePerHour = 29.654321;
// let numDays = 220;
// let discount = 0.112;

// testData4

/* 
cost for projects, over multiple months.

month = 22 billable days.       || const BILLABLE_DAYS = 22;     ||
discount for every full month   || discount 42% becomes 0.42     ||
remaining days are billed at day rate.
|| -> days remaining are not discounted!                        ||
|| Math.Ceil to exlucde: needs add dayrates for days remaining  ||
The result must be rounded up to the nearest whole number.
*/

// task1:
/*export*/ function dayRate(ratePerHour) {
  return (ratePerHour*HOURSPERDAY);
};

// task2:
/*export*/ function daysInBudget(budget, ratePerHour) {
  return (Math.trunc(budget/dayRate(ratePerHour)));
};

// task3:
//numMonth()
function numMonth(numDays){
  return Math.floor(numDays/BILLABLE_DAYS);
};

// Math.ceil

//rateMonth()
function rateMonth(ratePerHour){
  return (ratePerHour * HOURSPERDAY);
};

// disC()
function disC(discount){
 return (1-discount);
;}

// daysRemaining()
function daysRemaining(numDays) {
    return(numDays-(numMonth(numDays)*BILLABLE_DAYS));
};

// costDaysRemaining()
function costDaysRemaining(numDays, ratePerHour) {
    return Math.ceil(daysRemaining(numDays) * dayRate(ratePerHour));
};

//test3: priceWithMonthlyDiscount(ratePerHour, numDays, discount)
/*export*/ function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {

     return Math.ceil(disC(discount)*(numMonth(numDays)*rateMonth(ratePerHour)*BILLABLE_DAYS) + costDaysRemaining(numDays, ratePerHour));
};


// output()
function output(outputData) {
    console.log(outputData);
};

// module App for output
startApp();
function startApp() {
    // output("task1: " + dayRate(ratePerHour));
    // output("task2: " + Math.trunc(budget/dayRate(ratePerHour)));
    output("task3_A: "       + numMonth(numDays));
    output("task3_B: "       + rateMonth(ratePerHour));
    output("task3_C: "       + disC(discount));
    output("task3_D: "       + daysRemaining(numDays, numMonth));
    output("task3_E: "       + costDaysRemaining(numDays, ratePerHour));
    output("task3_Finale: "  + priceWithMonthlyDiscount(ratePerHour, numDays, discount));
};
