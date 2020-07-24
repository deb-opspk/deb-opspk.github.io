// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
 
 /**
  * Input: two intergers, as parameters
  * Output: array with the numbers in between the parameters
  * Constraints: if the 1st integer is larger than the second interger, reverse order
  *             Use a for loop.  Use push.
  * Edge Cases: 
  */
  
  
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    let arrCountUp = []; //create empty array to capture counting up results
    let arrCountDown = [];
    if (start < end) { //conditional to compare
        for (let i = start; i <= end; i++) { //for loop forward over array
          arrCountUp.push(i); //push new entries into arrCountUp
        } 
        return arrCountUp;  //return arrCountUp
    } else if (start > end) {   //condition to compare
        for (let j = start; j >= end; j--) { //for loop counting in reverse over array
          arrCountDown.push(j); //push new entries into arrCountDown
        } 
        return arrCountDown;    //return arrCountDown
    } else {        //alternative statement
      console.log('Values are equal.');
    }
    // let arr = [];
    // if (start < end) {
    //     for (let i = start; i <= end; i++) {
    //         return arr.push([i]);
    //     }
    // } else if (start > end) {
    //     for (let i = end; i >= start; i--) {
    //         return arr.push([i]);
    //     }
    // } else if (start === end) {
    //     return 'Please enter new numbers.';
    // }
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}