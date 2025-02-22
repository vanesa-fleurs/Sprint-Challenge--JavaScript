// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceous

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceous

let tyrannosaurus = {
  "name": "tyrannosaurus",
  "diet": "carnivorous",
  "weight": "7000kg",
  "length": "12m",
  "period": "Late Cretaceous"
}

let stegosaurus = {
  "name": "stegosaurus",
  "diet": "herbivorous",
  "weight": "2000kg",
  "length": "9m",
  "period": "Late Jurassic"
}

let velociraptor = {
  "name": "velocirapto",
  "diet": "carnivorous",
  "weight": "15kg",
  "length": "1.8m",
  "period": "Late Cretaceous"
}

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(tyrannosaurus.weight);

// What was the diet of a velociraptor?
console.log(velociraptor.diet);

// How long was a stegosaurus?
console.log(stegosaurus.length);

// What time period did tyrannosaurus live in?
console.log(tyrannosaurus.period);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
tyrannosaurus.roar = function() {
  return "RAWERSRARARWERSARARARRRR!";
}
console.log(tyrannosaurus.roar());


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests using any array method you like

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the universities in the graduates array.  
Once you have the new array created, sort the universities alphabetically and log the result. */

const alluni = graduates.map((uni) => {
  return uni.university;
});
console.log(alluni);

alluni.sort();
console.log(alluni);

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
const contactInfo = graduates.map((formerstu) => {
  return `${formerstu.first_name} ${formerstu.email}`;
});
console.log(contactInfo);

/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. 
const filteredItems = items.filter((item) => { return item.price <= 100});
console.log(filteredItems);*/
// const uni = graduates.includes()

// const uni = graduates.map((startuni) => {
//   return `${startuni.university} includes ${startuni.includes('uni')}.`
// });
// console.log(uni);

const uni = [];
const information = graduates.map((formerstu) => {
  const included = formerstu.university.includes('Uni')
  if (included === true){
    uni.push(formerstu.university);
  }
});
console.log(uni);

// for(let i = 0; i < graduates.length; i++){
//  if(graduates[i].university.includes('Uni')){
//    uni.push(graduates[i].university);
//  }
// }
// console.log(uni);

// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.


zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const animalNames = [];
const namesofani = zooAnimals.forEach((animalinfo) => {
  animalNames.push(`Name: ${animalinfo.animal_name}, Scientific: ${animalinfo.scientific_name}.`);
});
console.log(animalNames);


/* Request 2: .map()    
const lowerCase = [];
const tolowercase = zooAnimals.map((lower) => {
  return `Name: ${lower.animal_name.toUowerCase}`;
});
console.log(lowerCase);



/*
The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

*/

const lowerCase = [];
const tolowercase = zooAnimals.map((lower) => {
  lowerCase.push(`Name: ${lower.animal_name.toLowerCase()}`);
});
console.log(lowerCase);

/* Request 3: .filter() 

The zoos are concenred about animals with a lower population count. Find out which animals have a population less than 5.

*/
// const lowerPopulation = [];
let lowerPopulation = zooAnimals.filter((checking) => {
  return checking.population <= 5;
});
console.log(lowerPopulation);

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.

*/
// const populationTotal = 0;
// console.log(populationTotal);

const populationTotal = zooAnimals.reduce((currentTotal, counting) => {return counting.population + currentTotal}, 0);
console.log(`The total animal population in the zoo: ${populationTotal}`)


/* 

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/

