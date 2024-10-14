const userEntry = prompt(`Enter lucky numbers separated by commas`, `5,6,8,12,2`);

const luckyStrings = userEntry.split(`,`);
console.log(`LUCKY STRINGS: `, luckyStrings);

const luckyNumbers = []; 


for(  let index = 0;      index < luckyStrings.length; index = index + 1) {
  console.log(`INDEX: `, index);
  console.log(`LUCKY STRING: `, luckyStrings[index]);
  
  const luckyNumber = Number(luckyStrings[index]);
  luckyNumbers.push(luckyNumber);
}

console.log(`LUCKY NUMBERS: `, luckyNumbers);


const getLength = (luckyNumb) =>{
  console.log(luckyNumb.length)
  return;
}
getLength(luckyNumbers);
// above I created a function that console logs the length of lucky numbers//
let sum = 0;
const getSum =(luckyNumb) => {
  for(let i = 0; i<luckyNumb.length; i++){
    sum = sum + luckyNumb[i];
    console.log(sum);
  }
  
}
getSum(luckyNumbers);

// above we created a for loop that calculates the sum of the array using 
// the sum = sum + luckynumb[i]. our parameter was luckyNumb which was passed
// into the function //

const getMean =(luckyNumb) => {
  const mean = sum / luckyNumb.length;
  console.log(mean);
}
getMean(luckyNumbers);
// above to get the mean we used the sum variable from the previous 
// function to divide the length of the array by the sum of the array//

const getMin = (smallest) =>{
  const minimum = Math.min(...smallest);
  console.log(minimum);
}
getMin(luckyNumbers);
// above I created a function and for some reason it wasn't working however,
// I looked up why it wasnt working and it was because i didn't spread the 
// array into individual elements and then I was good //

const getMax = (largest) =>{
  const maximum = Math.max(...largest);
  console.log(maximum);
}
getMax(luckyNumbers);
// above we used the Math.max to get the maximum of the array.

const getRange = (luckyNumb) =>{
const range = Math.max(...luckyNumb) - Math.min(...luckyNumb);
console.log(range);
}
getRange(luckyNumbers);
// above we used the same method to get the max and min then
// we subtracted them and got the range.
let evenNumber =[];
const getEvens = (luckyNumb) => {
  for(let i = 0; i < luckyNumb.length; i++){
    if(luckyNumb[i] % 2 === 0){
      evenNumber.push(luckyNumb[i]);
    }
  }
  console.log(evenNumber);
}
getEvens(luckyNumbers);
// i used a for loop to get the even numbers / odd numbers
// passsed the array of luckyNumbers through my luckyNumb parameter
// result was the even numbers getting printed 

let oddNumber = [];
const getOdds = (luckyNumb) => {
  for (i = 0; i < luckyNumb.length; i++){
    if(luckyNumb[i] % 2 !== 0){
      oddNumber.push(luckyNumb[i]);
    }
  }
  console.log(oddNumber);
  }
getOdds(luckyNumbers);

// had to do a lot of googling but i did end up understanding for 
// loops alot more 