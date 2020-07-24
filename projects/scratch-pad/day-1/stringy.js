// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    let str = string.length; //create a str variable.  assign str to string parameter.length 
    return str;             //to resolve a number.  return str per instructions

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    let str = string.toLowerCase();  //create a str variable.  assign str toLowerCase method
    return str;                     //return str per instructions
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    let str = string.toUpperCase();  //create a str variable.  assign str toUpperCase method
    return str;                     //return str per instructions


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // let str = string.toLowerCase();
    // for(let i = 0; i < str.length; i++) {
    //     if (i === ' '); {
    //         return str.replace(' ', '-');
    //     }
    // }
    // return str.toLowerCase();
    
    let strLower = string.toLowerCase(); //create variable strLower toLowerCase method
    let str = strLower.split(' ');      //create variable str to use split method
    for(let i = 0; i < str.length; i++) { //use for loop to transvere string
    }                                   //with a dash
    return str.join('-');               //return the string with dashes
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    let strLower = string.toLowerCase();  //create strLower variable to force string parameter into lowercase
    let firstLetter = strLower.split('');  //target the firstLetter of the string parameter and assign it to strLower.  Use the split method on string, creating an array with indexes
    if(firstLetter[0] === char.toLowerCase()) {  //use conditional statement to compare firstLetter, first character to the char parameter provided.  force char toLowerCase
        return true;                        //return true 
    } else {                                //return false if not true.  redundant
        return false;
    }
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    let strLower = string.toLowerCase(); //create strLower variable and assign to string parameter.  Use toLowerCase method to force string parameter to lowercase
    let lastLetter = strLower.slice(-1); //create lastLetter variable and assign to strLower.  Use the slice method to tease the last letter out of the string
    if(lastLetter === char.toLowerCase()) { //conditional and strict equality to compare the lastLetter and the char, using the toLowerCase method
        return true;  //return true if above statement is true
    } else {            //else statement is redundant, but false if not true.
        return false;
    }
    // let lastLetter = strLower.split('');
    // if (lastLetter.length - 1 === char.toLowerCase()) {
    //     return true;
    // } else {
    //     return false;
    // }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    return stringOne.concat('', stringTwo); //using concat method to combine string parameters


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } else {
        return stringTwo;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne > stringTwo) {
        return -1;
    } else if (stringTwo > stringOne) {
        return 1;
    } else if (stringOne === stringTwo) {
        return 0;
    } else {
        console.log('please enter a string');
    }
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne > stringTwo) {
        return 1;
    } else if (stringTwo > stringOne) {
        return -1;
    } else if (stringOne === stringTwo) {
        return 0;
    } else {
        console.log('please enter a string');
    }
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
