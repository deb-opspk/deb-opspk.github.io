/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search (animals, string) { //create search function with array, string parameters
    for (let i = 0; i < animals.length; i++) { //create loop to iterate array
    //create if statement to locate name key inside array.  Strictly equal 
    //compare name to string parameter with toLowerCase() method for both values
        if(animals[i].name.toLowerCase() === string.toLowerCase())  { 
            return animals[i]; //return array object if true
        } 
    }
    for (let i = 0; i < animals.length; i++) { //create second loop to return null
        if(animals[i].name.toLowerCase() !== string.toLowerCase()) { //strictly not equal
            return null;
        }
    }
}
//search(animals, 'quackers'); //call search function with animals and 'quackers' string.

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace (array, string, replace) {
    for(let i = 0; i < array.length; i++) { //create loop to iterate array
         if(array[i].name.toLowerCase() === string.toLowerCase())  { //create loop to 
         //iterate array create if statement to locate name key inside array.  
         //Strictly equal compare name to string parameter with toLowerCase() method 
         //for both values
            return array.splice(i, 1, replace); //remove & replace enitre object 
                                                //with splice method
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove (array, string) {
    for(let i = 0; i < array.length; i++) { //create loop to iterate array
         if(array[i].name.toLowerCase() === string.toLowerCase())  { //create loop to 
         //iterate array create if statement to locate name key inside array.  
         //Strictly equal compare name to string parameter with toLowerCase() method 
         //for both values
            return array.splice(i, 1);  //remove enitre object with splice method 
        }                               
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
* Input: animals array and animal object
* Output: add unique object to animals array
* Constraint: Unique object name.  Name and Species values > 0
* Edge Case: n/a
*/

function add (animals, animal) {
    for(let i = 0; i < animals.length; i++) { //create loop to iterate array 
         if(animals[i].name.toLowerCase() === animal.name.toLowerCase())  { 
            return null; //hopefully graceful exit.  no addition 1st constraint
        } else if (animal.name.length > 0 && animal.species.length > 0) { //2nd constraint
                animals.push(animal); //create unique named object in animals array
    }
  }
}
//     if (Object.values(object.name.length > 0) && Object.values(object.species.length > 0)) {
//         return object; //
//     }
// }

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
