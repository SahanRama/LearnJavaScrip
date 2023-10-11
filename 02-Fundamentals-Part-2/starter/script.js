"use strict";
/**
// const interface = "sahan"
// const private = 3421;

function logger(){
    console.log('My name is Sahan')
}
// calling / running / invoking function
logger();
logger();

function fruitProcessors(apples,oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessors(5,0)
console.log(appleJuice);

const appleOrangeJuice = fruitProcessors(2,4);
console.log(appleOrangeJuice);

// Function declaration
function calcAge1(birthYear){
    return 2037 -  birthYear;
}

const age1 = calcAge1(1993);

//function expression
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1994)
console.log(age1 , age2);


// Arrow function
const calcAge3 = birthYear => 2037 -birthYear;
console.log(calcAge3(1993))

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(1993, "Sahan"))
console.log(yearsUntilRetirement(1980, "Bob"))

// Function calling another function
function cutPieces(fruit){
    return fruit * 4;
}

function fruitProcessors(apples,oranges){
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice
}

console.log(fruitProcessors(3,2))

const calAge = function(birthYear){
    return 2037-birthYear;
}
const yearsUntilRetirement = (birthYear,firstName) => {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement >0){
        console.log(`${firstName} retires in another ${retirement} years.`)
        return retirement
    } else{
        console.log(`${firstName} already retired. 🥳`)
        return -1
    }
   
}

console.log(yearsUntilRetirement(1993, 'Sahan'))
console.log(yearsUntilRetirement(1965, 'Bob'))


// Challenge 01
const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
  (scoreOne + scoreTwo + scoreThree) / 3;
// Test data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koala win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// Test data 2
 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 checkWinner(scoreDolphins,scoreKoalas);


// Add element to the end of the array
const friends= ['Michael', 'Steven', 'Peter']
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

// Add element to the beginning of the array
friends.unshift('John');
console.log(friends)

// Remove elements
friends.pop() // Last element
const popped = friends.pop() // return the removed element
console.log(popped)
console.log(friends)

// Remove the first element
const removed = friends.shift() // First
console.log(removed)
console.log(friends)

// Get the index of element
console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('BOB'))

friends.push(23)
console.log(friends.includes('Steven'))
console.log(friends.includes('BOB'))
console.log(friends.includes('23')) //Strict match

if(friends.includes('Steven')){
    console.log('You have a friend called Steven')
}

CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.


const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const tip = calcTip(100);
console.log(tip);

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);


// Objects

const sahan = {
  firstName: "Sahan",
  lastName: "Ramanayake",
  age: 2023 - 1993,
  job: "QA engineer",
  friends: ["Tharinda", "Shermal", "Jonas"],
};

console.log(sahan);

console.log(sahan.lastName);
console.log(sahan["firstName"]);

const nameKey = "Name";
console.log(sahan["first" + nameKey]);
console.log(sahan["last" + nameKey]);

// console.log(sahan."last" + nameKey) //wrong

const interestedIn = prompt(
  "What do you want to know about Sahan? Choose between firstName,lastName, age, job and friends"
);
console.log(interestedIn);

if (sahan[interestedIn]) {
  console.log(sahan[interestedIn]);
} else {
  console.log("Wrong request! ");
}

sahan.location = "Sri Lanka";
sahan["facebook"] = "sahanRama";
console.log(sahan);
console.log(sahan.friends.length);

// Challenge
// Sahan has 3 friends, and his best friend is called Tharinda

const text = `${sahan["firstName"]} has ${sahan.friends.length} friends and his best friend is called ${sahan.friends[0]}`;
console.log(text);


const sahan = {
  firstName: "Sahan",
  lastName: "Ramanayake",
  birthYear: 1993,
  job: "QA engineer",
  friends: ["Tharinda", "Shermal", "Jonas"],
  hasDriverLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },
  //   calcAge: function () {
  //     console.log(this)
  //     return 2037 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  summary: function () {
    // return this.hasDriverLicense ?  "a" :  "no;"
    return `${this.firstName} is a ${this.calcAge()} old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(sahan.calcAge());
console.log(sahan.age);
console.log(sahan.age);

console.log(sahan.summary());

// console.log(sahan["calcAge"](1991));

 CHALLENGE #3
Let's go back to Mark and John comparing their bmis!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
console.log(mark.calcBMI());
mark.calcBMI() > john.calcBMI()
  ? console.log(
      `${mark.fullName}'s bmi (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
    )
  : console.log(
      `${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
    );
