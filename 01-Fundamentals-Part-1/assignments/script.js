//assignment
const country = "Sri Lanka";
let continent = "Colombo";
let population = 1300000;

let isIsland = true;
let language;

console.log(country);
console.log(continent);
console.log(population);
console.log(language);

language = "Sinhala";
console.log(language);

const halfPopulation = population/2;
console.log(halfPopulation) 
 console.log(population+1)

const finlandPopulation = 600000;
console.log("Does my country population more than finland? " , finlandPopulation>population)

/** 
const numNeighbours = Number(prompt("How many neighbor countries does your country have?"));

if (numNeighbours === 1){
    console.log('Only 1 border!')
}
else if(numNeighbours > 1){
    console.log('More than 1 border')
}else{
    console.log('No borders')
}
*/

if (language ==='english' && population < 500000 && !isIsland){
    console.log(`You should live in ${country}`  )
}else{
    console.log(`${country} does not meet your criteria :(`)
}