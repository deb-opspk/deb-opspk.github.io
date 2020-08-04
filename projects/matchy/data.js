/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {}; //
animal.species = 'dog';
animal['name'] = 'Olie';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


var noises = []; //Step 2:1 create empty array
noises = ['woof'];  //step2/2 create item w bracket notation
noises.push('bow-wow'); //step 2/3 create item at end of array
noises.unshift('scratch');  //step 2/4-6 create item at beginning of array
  function animalNoises(noise) {    //step 2/7 create function to add as many noises of the array
    noises.push(noise);
}  
    
 
animalNoises('bark');  //call animalNoises function to add bark to array
console.log(noises.length); //Step 2/8 error checking
console.log(noises[3]);     //Step 2/9 - cheating
console.log(noises);        //Step 2/10 - print array

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises; //combining animal.noises empty array with noises array in step 2
console.log(noises);    //error checking, Step 3/3
animal['noises'].push('GRRR'); //create an additional noise
console.log(animal); //print animal object


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * Input:
 * output:
 * constraints:
 * Edge Case:
 */


var animals = [];   //create animals empty array
animals.push(animal);   //push animal object into empty array
var duck = {            //Step 6/4: create duck animal w characteristics
    species: 'duck',    
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
}
animals.push(duck); //step 6/5: push 
var cat = {          //Step 6/7: create two animals w characteristics
    species: 'cat',
    name: 'Etta',
    noises: ['meow', 'hiss', 'purr']
}
animals.push(cat);  //push to array
var alligator = {
    species: 'alligator',
    name: 'Mack',
    noises: ['crunch', 'snap']
}
animals.push(alligator);  //push to array


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//choosing a collection: an array of objects

var friends = [];
function getRandom(array) {  //create a function getRandom.  Use animals object, min and max as paramaters.
   let randomFriends = animals[Math.floor(Math.random(animals) * animals.length)];  //return animals with Math.floor(Math.random) methods to randomize results.  Multiply by the animals object length, minus one to receive a whole number and an index value of the animal object.
    animal["friends"] = friends; //create animals obj new key of friends, assign to friends array 
    return friends.push(randomFriends['name']); //return randomized randomFriends, name to animals.friends object key
}

getRandom();    //call function
// function getRandom(animalNames) {
//     animalNames = animals[Math.floor(Math.random() * animals.length)];
// //   animalNames = animals[Math.floor(Math.random() * animals.length)];
//   friends.push(animalNames['name']);
//   return friends;
// }


console.log(animals);  //print animals obj
console.log(friends);   //print array

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */

//getRandom();
// animal['friends'] = [];  
// animal['noises'] = noises;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}