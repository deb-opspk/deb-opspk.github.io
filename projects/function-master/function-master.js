//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) { 
    let output = Object.values(object); //create variable and assign to 
    return output;  //Object.values() method.  Use object parameter to 
                    //extract values.  return output variable.
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let keys = Object.keys(object); //create variable and assign to 
    let output = keys.join(' '); //Object.keys method.  Use object parameter
    return output;  //to extract values.  Use join method to place space
}                   //seperator.  Return variable output

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let valuesArray = Object.values(object); //create array to store object values
    let valuesStr   = [];  //create valuesStr array to receive values
    for (let values of valuesArray) { //use for of loop to iterate valuesArray
        if (typeof values === 'string') {   //vet values for strings
            valuesStr.push(values); //push values to new array
        }
    }
   let output = valuesStr.join(' ');    //create variable to store value strings with the join method, with a space
   return output.trim();  //return output and use trim method to remove extra spaces
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array'; //using Array.isArray to vet array as collection
    } else if (typeof collection === 'string') { //using string to vet datatype
        return 'string';
    } else if (typeof collection === 'number') { //using number to vet datatype
        return 'number';
    } else if (typeof collection === 'boolean') { //using boolean to vet datatype
        return 'boolean';
    } else if (typeof collection === 'function') {   //using function to vet datatype
        return 'function';
    } else if (collection instanceof Date) {     //using instanceof Date to vet if Date
        return 'date';
    } else if (typeof collection === 'undefined') {  //using undefined to vet datatype
        return 'undefined';
    } else if (collection === null) {            //using null to vet datatype
      return 'null';
    } else if (typeof collection === 'object') { //using Array.isArray, instanceof Date, and null to vet datatype
        return 'object';
}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //create variable and assign to string.  Use charAt() method to target 0 (1st) index of string
    //use toUpperCase method to force the first letter to upper case
    //concatinate the remaining of the string with the slice method. Slice returns a shadow copy 
    //of the string, starting at the 1st index or the second character.
    let capitalize = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalize;  //return the capitalized letter.
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let arr = string.split(' '); //create an array, arr, and assign to string parameter.  Use split() method, with 
    //a space to force the string into the new array, with each word at its own index
    let capitalizeWords = []; //create empty array, capitalizeWords, to receive output of arr  
    //create for loop to iterate over arr
    for (let i = 0; i < arr.length; i++) { 
    //push method to add the string of words into the capitalizeWords array
    //charAt method to select the 0 (1st) index of each word
    //toUpperCase method to capitalize the first letter of each word
    //slice method to concatonate the remaining of the string in the array index, through the for
    //loop iteration process.
      capitalizeWords.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }; //return the capitalizeWords array back into a string with the join method, with a space.
  return capitalizeWords.join(' ');
}
        


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) { //leverage the capitalizeAllWords()
    //backtick concatinating Welcome string and the exclamation mark
    //accessing the object name key value by bracket notation. 
    return `Welcome ${capitalizeAllWords(object['name'])}!`;
    //did not pass tests.  passed repl.it.
    //return capitalizeAllWords(`Welcome ${object['name']}!`); 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) { //leverage the capitalizeAllWords()
    //backtick concatinating name key value and species key value
    //pull the object name key value and the species key value
     return `${capitalizeAllWords(object['name'])} is a ${capitalizeAllWords(object['species'])}`;
}
// function profileInfo(object) {
//     //concat the object's name prop and species property to form a sentence
//     //edge case: the first letter of the name and species must be capitalized
// const objName = object.name[0].toUpperCase() + object.name.slice(1).toLowerCase(); //slice creates a shallow copy of your string
// //slice will start at the designated index.  slice does not need to provide an end point.  It will copy to the last index
// const objSpecies = object.species[0].toUpperCase() + object.species.slice(1).toLowerCase();
//     return objName + ' is a ' + objSpecies;
    
// }


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Input Desired: Object with key of 'noises' and value of array.
 * Output: Return Object value array as a string, separated by spaces,
 *      by using join() method.
 * Constraints: If noises key does not exist, return 'there are no noises'
 * Edge Case: 1) Must check for noises key with an empty array value
 *            2) Must check for no noises key.  Same return message
 */

function maybeNoises(object) {
    let string = object['noises']; //Create string variable for noise, string output.
    //Assign variable to object key: noises / values with bracket notation.
    //Create if statement to detect Edge cases 1 & 2 (above)
    //String cannot be undefined, null, or have no length.  Cannot === arrays or objects. 
    
    if ((string === undefined || null) || string.length === 0) {
        return 'there are no noises'; //return message per instructions
    //Continue conditional statement 
    } else {
        return string.join(' '); //Use join method to create a space between string words.
    }
}
//First draft too wordy
//if(object['noises'] === undefined || object['noises'].length === 0 || (object['noises'] === (typeof null))) {
    //return 'there are no noises';
//} else if (string !== undefined || string !== null || string.length !== 0) {
//  return string.join(' ');

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) { 
    //Using ternary operator to test conditional
    //includes() method iterates over string
    return string.includes(word) ? true : false;
}

    //use conditional if/else and includes() method
    //to iterate string parameter
    // if(string.includes(word)) {
    //     //return true if word parameter is in string
    //     return string.includes(word);
    // } else { //return false if parameter is not included in string
    //     return string.includes(word);
    // }     

//Alternative return statements produce string, word, and true/false
//evaluation.
//return '${string}, ${word}, ${string.includes(word)}';
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Input: name and Object
 * Output: Add the name to the Object.friends array with push() method
 * Constraints: possibly all lower case
 * Edge Case: Check for duplicates prior to adding
 */

function addFriend (name, object) { 
  //use the object friends key and push the name parameter to the object
  //use lowercase method because samples were in lowercase
  object.friends.push(name.toLowerCase());
  return object; //return object.
}
  //Removed duplicate entry checking
    // for (let i = 0; i < object['friends'].length; i++) {
    //     if (object['friends'][i] !== name) {
    //         object['friends'].push(name.toLowerCase());
    //     }
    // }   
    // return object;

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  let string = name.toLowerCase(); //create variable to simplify name parameter and force strict equality
  let objFriends = object['friends']; //create variable to simplify object key friends, values extraction
  //conditional statement, test 3 elevated to top.  undefined and null test before friends array.length test
  //if statement generates errors in python tutor and repl.it if length property not found during test 3
    if ((objFriends === undefined || null) || objFriends.length === 0) {
      return false; //test 3
      //Using methods join (with a space), toLowerCase and includes in this conditional statement.
      //Join forces the array into a searchable string.  toLowerCase pushes everything to lower case for comparison
      //Includes permits the iteration of the string variable.  String variable built with the name parameter, with toLowerCase method
    } else if (objFriends.join(' ').toLowerCase().includes(string)) {
      return true; //test 2
    } else {
      return false; //test 1
    }
}
//     for (let i = 0; i < objFriends.length; i++) {
//         //return ((objFriends === undefined || objFriends.length === 0 || objFriends === null) ? true : false); //test 3
//         return ((objFriends[i].toLowerCase() === name.toLowerCase()) ? true : false); //test 1
//     }
// }
//     let string = name.toLowerCase();
//     let objFriends = object['friends'];
//     for (let i = 0; i < objFriends.length; i++) {
//         return (objFriends[i].toLowerCase() === string) ? true : false; //passes test 1, fails 2 & 3
//     }
// }
    
    //passes test 2, fails 1 & 3
//     for (let i = 0; i < objFriends.length; i++) {
//         if (objFriends[i].toLowerCase() === string) {
//             return true;
//         } else if (objFriends === undefined || objFriends.length === 0 || (objFriends === (typeof null))) {
//             return false;
//         } 
//     }
// }

//  if (objFriends[i].toLowerCase() === string) {
//             return true;
//         } else {
//             return false;
//         }
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function nonFriends(name, array) {
//   let notFriends = [];
//   //for in loop to iterate through array of objects
//   for (let i = 0; i < array.length; i++) {
//     //checking the object name does not match the name argument and name is not included 
//     //in the friends array and the object does not include the name being checked.
//     if ( (array[i]['name'] !== name) && !array[i]['friends'].includes(name) ) {
//       //push non-friends values into the notFriends array
//       notFriends.push(array[i]['name']);
//     }
//   } //return notFriends array
//   return notFriends;
// }
    
function nonFriends(name, array) {
    //verify if a name parameter is in the friends array
    //iterate friends key/value array for each name parameter with a for loop
    //create array to hold non-friends
    //
    const notFriends = [];
    for (let i = 0; i < array.length; i++) {
        //check if input name is in friends array
        //if not in array, add the current object name to notFriends array
        //if the given name is not the object name property, add to the notFriends array  
        if (name !== array[i].name && !array[i].friends.includes(name)) {
            notFriends.push(array[i].name); //push unique, notFriends to the notFriends array
        }
    }
    return notFriends;  //return notFriends array
    
}
    
    
    
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    let newObject = object; //create newObject and assign to object parameter
    newObject[key] = value; //newObject[key] parameter and assign value
    //If the key/value pair does not exist, it will be created
    return newObject; //return newObject
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    var newObject = object; //create newObject and asssign to object parameter
    for (let string of array) { //use for of loop to iterate array
        for (let keys in object) { //use for in loop to iterate object
        //if string values in array strictly equal object keys or string strictly equals keys
            if (string === object[keys] || string === keys) { 
                delete newObject[keys]; //delete the newObject keys
            }
        }
    } return newObject;  //return newObject
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function dedup(array) {
//   return Array.from(new Set(array)); 
// }



function dedup(array) {
    //remove all duplicates from the array.  create a new array to hold unique items
    const uniqueArr = [];
    //if you need to reference and alter the original array, use splice().
    //get access to all elements in the given array with a for loop.
    for (let i = 0; i < array.length; i++) {
        //inside of loop, check if the new array contains the current element in the array
        if(!uniqueArr.includes(array[i]) ) {   //if yes, do not add
            uniqueArr.push(array[i]); //if no, add to the unique array
        }   
    } 
    //return the unique array
    return uniqueArr;
}
   




//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}