// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    return Array.isArray(value);  //use Array.isArray to vet array datatype
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value) === true) { //check for array
        return false;           
    } else if (value === null) { //check for null
        return false;
    } else if (value instanceof Date === true) { //check for Date
        return false;
    } else if ((typeof value) === 'object') { //check for object
        return true;
    } else { //check for numbers, strings, Boolean
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if(isArray(value) === true || isObject(value) === true) { //using isArray and isObject functions to vet collections
        return true;    //return true if a collection
    } else {
        return false;   //return false if not a collection
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
     if(Array.isArray(value)) {     //using Array.isArray to vet if an array
        return 'array';
    } else if (typeof value === 'string') { //using string to vet datatype
        return 'string';
    } else if (typeof value === 'number') { //using number to vet datatype
        return 'number';
    } else if (typeof value === 'boolean') { //using boolean to vet datatype
        return 'boolean';
    } else if (typeof value === 'function') {   //using function to vet datatype
        return 'function';
    } else if (value instanceof Date) {     //using instanceof Date to vet if Date
        return 'date';
    } else if (typeof value === 'undefined') {  //using undefined to vet datatype
        return 'undefined';
    } else if (value === null) {            //using null to vet datatype
      return 'null';
    } else if (typeof value === 'object') { //using Array.isArray, instanceof Date, and null to vet datatype
        return 'object';
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
