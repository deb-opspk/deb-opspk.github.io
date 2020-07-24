// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    var str = input.split('');  //create str variable. assign to input parameter and split() method to create an array
    console.log(str); //[ 'h', 'e', 'l', 'l', 'o' ]
    var flipStr = str.reverse(); //create flipStr variable.  assign to str with reverse method to reverse the input string
    console.log(flipStr); //[ 'o', 'l', 'l', 'e', 'h' ]
    var joinStr = flipStr.join(''); //create joinStr variable.  assign to flipStr and use the join method to remove the commas and collapse the array
    return joinStr; //return the the reversed string
    // let str = ' ';
    // for (let i = input.length - 1; i >= 0; i--) {
    //   str += input[i];
    // }
    // return str;
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}