
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function triangles(base) {
//   var newTriangles = ' ';  //create empty string
//   while (newTriangles.length < base) { //while loop to create base of triangle
//     console.log(newTriangles += '#');  //
//   }
// }
// triangles(7);

// function triangles(x) {
//   //create variable to represent any character or number
// let hashtag = x;
// console.log(hashtag); //print first character
// let count = 1; // start count at 1
// while (count < 7) { //end count at 7
//   hashtag = hashtag += x; //increment and assign hashtag by adding 1 character
//   console.log(hashtag); //print hashtag on new line
//   count = count + 1; //continue while loop until count is less than 7
// }
// }
// triangles('#');  //call function


// function triangles(x) {
//   let hashtag = x; //create variable to represent any character or number
//   for (let count = 1; count.length < 8; count += hashtag) { //for loop to rotate through 1 - 7;
//     hashtag = hashtag += x; //increment and assign hashtag by adding 1 character
//     console.log(hashtag); //print character
//     count = count + 1; //increment next line by 1 character
//   }
// }
// console.log(triangles('#')); //prints undefined, not desired outcome.


function triangles() {
  //for loop to rotate through lines
  //Start: single #. Stop: when hashtags = 7.  Increment by 1 hashtag
for (let hashtag = "#"; hashtag.length < 8; hashtag += "#")
//console.log hashtag
  console.log(hashtag);
} //call function
triangles();

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
 for (var i = 1; i <= 15; i++) { //for loop to rotate through numbers 1-15
   if (i % 3 == 0 && i % 5 == 0) { //if index is divisible by 3 and 5, return FizzBuzz
     console.log('fizzbuzz');  //print FizzBuzz
   } else if (i % 3 == 0) { // if index is divisible by 3, return Fizz
     console.log('fizz'); //print Fizz
   } else if (i % 5 == 0) { //if index is divisible by 5, return Buzz
     console.log('buzz'); //print Buzz
   } else {
   console.log(i); //print all numbers not divisible by 3 or 5
 }
}
}
fizzBuzz();  //call function
  //write conditional statements that
//print numbers from 1-100 or 1-15;
//use modulas % to account for
//division by 3, 5, and (3 and 5)
//console.log() Fizz for all by 3
//console.log() Buzz for all by 5
//console.log() FizzBuzz for 3&5


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
