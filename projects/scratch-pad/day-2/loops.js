// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  for (let i = 0; i <= array.length - 1; i++) { //create for loop, forward  over array
    console.log(array[i]); //print indexes of array
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length -1; i >= 0; i--) { //create for loop, bacward over array
    console.log(array[i]); //print indexes of array
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  return Object.keys(object);  //using object.keys method to seek keys
                              //and push into an array
  // let arr = []; //create an array to hold the object keys
  // for (let key in object) { //use for in loop to rotate through object, gathering keys
  //   if (object.hasOwnProperty(key)) {
  //     return arr.push(key);
  //   }
  // YOUR CODE ABOVE HERE //
//}
}
/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (let key in object) { //using for in loop to rotate through object
      console.log(key);     //and print keys
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  return Object.values(object); //using Object.values method to seek values
  // YOUR CODE ABOVE HERE //    //and push them into an array
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (let values in object) {
    console.log(object[values]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value 
 * pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
    // let objEntries = 0; //assign objEntries to zero
    // for (const [key, value] of Object.entries(object)) { //attempting to use MDN example
    //   return objEntries += [key, value]; //attempt to count each key/value pair
    // }
    
    var arr = []; //create new array
    arr = Object.entries(object); //assign new array Object.entries() method
    return arr.length; //return the length of the arr
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var arr = Object.values(object);  //create an array using the Object.values() method
  arr.reverse().forEach(function(item) {  //Using reverse and forEach methods to loop backward over the array
  console.log(item);  //function in above line created the item parameter to be called in the console.log(item);
  });

  // let arr = []; //create empty array
  // for (let values in object) { //for in loop for object values
  //   if (object[values]) { //use conditional statement to accumulate loop iterations
  //     arr.push(object[values]); //push values to arr
  //   } let arrReverse = arr.reverse(); //create arrReverse variable to use reverse method
  
  //   console.log(arrReverse);
  // } 
  //console.log(arrReverse); //console.log per instructions
  //return arrReverse; //return for function
  
  //   arr = object[values].concat([values]); //assign array to object values
  //   console.log(arr); //prints arr values
  // } 
  // let arrReverse = arr.reverse(); //create arrReverse to use reverse method
  // console.log(arrReverse); //crapped out

 
  // let arr = []; //create empty array
  // for (let values in object) { //for in loop for object values
  //   arr = object[values]; //assign array to object values
  // }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
