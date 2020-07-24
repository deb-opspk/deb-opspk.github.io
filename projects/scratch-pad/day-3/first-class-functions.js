// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (value) { //create a function to test a base
        if (value > base) {   //if value is bigger than base
            return true;      //return true    
        } else {            
            return false;    //if not, return false
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (value) {  //create a function to test a base
        if (value < base) {     //if value is less than base
            return true;        //return true
        } else {        
            return false;       //else, return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function (string) {              //create a function that returns the first character of a string
        let newStr = string.toLowerCase();  //create variable and assign it to the string parameter.  use toLowerCase method to force lowercase use
        if (newStr[0] === startsWith.toLowerCase()) { //conditional to compare the first index of string and compare to startsWith parameter, using toLowerCase method
            return true;                    //return true if strict equality    
        } else {
            return false;                   //return false if not
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function (string) {  //create function to retrieve last character of a string
        let newStr = string.toLowerCase(); //create variable.  force string parameter toLowerCase method
        if (newStr[newStr.length -1] === endsWith.toLowerCase()) {  //use newStr length to locate the last index character of the endsWith.  use strict equality compare toLowerCase method
            return true;                //return true if strict equal
        } else {
            return false;               //return false if not strict equal
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    let collection = [];  //create new array to hold combined collections
    for (let i = 0; i < strings.length; i++) {   //create loop
        collection.push(modify(strings[i]));    //use push method to add the modify 
                                                //instance to the end of the strings array
    }
    return collection;  //return array with new collection

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings 
 * pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
 /**
* Input: Array of Strings(strings), and a function(test) 
* Output: true/false 
* Constraints: use a loop to pass them to the test
* Edge Cases: Leverage above functions for createStartsWithFilter, createEndsWithFilter
*/
 
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    for (let i = 0; i < strings.length - 1; i++) { //create for loop to iterate the array
        if (test(strings[i]) === false){ //create conditional statement, use test function with strings argument.  Use index from for loop to test 
            return false;   //must trigger false statement first, to continue iteration 
        } 
    } return true;  //return true outside of loop
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}