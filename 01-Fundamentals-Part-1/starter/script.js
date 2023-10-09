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


//falsy values: 0, '', null, undefined, NaN
const age = 18;
if (age===18) console.log('You just became an adult! (strick)')

if (age==18) console.log('You just became an adult! (loose)')

const favoriteNumber =Number(prompt("what is your favorite number?"))
console.log(favoriteNumber)
console.log(typeof(favoriteNumber))

if (favoriteNumber === 23){
    console.log('Cool! 23 is a cool number!!')
}


const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);

// if(hasDrivingLicense && hasGoodVision){
//     console.log('Sarah is able to drive')
// }else{
//     console.log('Someone else should drive..')
// }

const isTired = false;

if(hasDrivingLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive')
}else{
    console.log('Someone else should drive..')
}


const day = 'saturday'

switch(day) {
    case 'monday':
        console.log('Plan course structure')
        console.log('Go to meetups');
        break;
    case 'tuesday':
        console.log("Go to office")
        console.log("Get ready for release");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("do the release ")
        console.log("Sprint kickoff");
        break;
    case 'friday':
        console.log("its Firyay")
        break;
    case 'saturday':
    case 'sunday' :
        console.log("enjoy the Weekend")
        break;
    default:
        console.log("Not a valid date")
}

if (day ==='monday'){
    console.log('Plan course structure')
    console.log('Go to meetups');
}else if( day=== 'tuesday'){
    console.log("Go to office")
    console.log("Get ready for release");
}else if (day===' wednesday' || day === 'thursday'){
    console.log("do the release ")
        console.log("Sprint kickoff");
}else if(day === 'friday'){
    console.log("its Firyay")
}else if( day==='saturday' || day === 'sunday'){
    console.log("enjoy the Weekend")
}else{
    console.log("Not a valid date")
}
*/
const age = 13;
// age >= 18 ? console.log("I'd like to drink wine 🍷") :console.log("I'd like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);
console.log(`I'd like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
