/*
let js = "amazing";

console.log(80 + 70 + 12 - 10);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let coutry = "Sri Lanka";
let continent = "Colombo";
let population = "1.3M";


// data types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Sahan");

console.log(typeof null);


//assignment

let isIsland = true;
let language;

console.log(coutry);
console.log(continent);
console.log(population);
console.log(language);


// let, const and var

let age = 30;
age = 31;
console.log(age);

const birthYear = 1993;
// birthYear = 1992;
// const job;

const ageSahan = 2037 - 1993;
const ageKaush = 2037 - 1995;
console.log(ageSahan, ageKaush);


const now = 2037;
const ageSahan = now - 1993;
const ageKaushi = now - 1995;

console.log(now - 1993 > now - 1995);

let x, y;
x = y = 25 - 10 - 5;
console.log(x,y)

const averageAge = (ageSahan + ageKaushi) /2;
console.log(ageSahan , ageKaushi, averageAge);


const fistName = "Sahan"
const job = "QA engineer"
const birthYear= 1993;
const year = 2023;

const sahan = "I'm "+ fistName+ ', a ' + (year- birthYear) +' years old '+job +'!'
console.log(sahan)

const sahanNew = `I'm ${fistName}, a ${year-birthYear} years old ${job}!`
console.log(sahanNew)

console.log('string with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`)


const age = 15;

if (age >= 18){
    console.log('Kaushi can start driving lessons 🫡 🚗')
}
else{
    const yearsLeft = 18 - age;
    console.log(`Kash is too young. Wait another ${yearsLeft} years. 🙂`)
}
*/

// convert string to number
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("12.23"));

console.log(Number("Sahan"));

//convert number to string
console.log(String(23), 23);

//type coercion
console.log("I'm " + 23 + " years old!");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1; //11
n = n - 1; // 11-1 = 10
console.log(n);
