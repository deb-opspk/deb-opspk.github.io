/**
*	String manipulation
*
*	1. Operators
*	Strings may be manipulated with operators: assignment, arithmetic, comparison,
* unary, binary (logical operators), and ternary operators. (Defined in another
* section).
*/

//Strings may be manipulated by using the += operator.  The += operator will
//concatenate the strings.
var str = "All that you touch you change. ";
str += "All that you change changes you.";

console.log(str); //All that you touch changes. All that you change changes you.


/**	2. Methods
*		a. Strings may be manipulated with string methods.
*
* String method examples:
*
*			i. concat() //Strings may be concatenated:
*/

var x = 'Courage does not always roar.';
var y = 'Valor does not always shine.';

console.log(x + ' ' + y);
//result Courage does not always roar.  Valor does not always shine.  The + sign
//concatenate(joins) the strings x and y.
// The ' ' single quotes create a space between strings x and y.

/**
*			ii. includes()
*				1. The includes() method searches a string and returns a true value if
*         the string locates value and false if it doesn't.
*/

var quote4 = "I know the world is bruised and bleeding, and though it is important not to ignore its pain, it is also critical to refuse to succumb to its malevolence. Like failure, chaos contains information that can lead to knowledge - even wisdom. Like art.";

console.log(quote4.includes('wisdom'));  //returns true.
                                        //The string includes wisdom.

/**			iii. indexOf()
*				1. The indexOf() method is designed to locate the first instance of a
*       value in a string.  If the value is not located, the result will be -1.
*/

//create string
let quote2 = "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway.";

let findInQuote = 'questions';  //create variable to find value in quote2 string
let indexOfTerm = quote2.indexOf(findInQuote);  //use of the indexOf method to
                                                //locate the string 'questions'

console.log(`The term ${findInQuote} is at index ${indexOfTerm}.`);
//The term questions is at index 29. This new string clarifies the index value
//location and repeats the term.
console.log(`The second term ${findInQuote} is at index
  ${quote2.indexOf(findInQuote, (indexOfTerm +1))}.`);
//The second term questions is at index 77. The second string clarifies the
//index value location and repeats the term.

/** 			iv. lastIndexOf()
*				1. The lastIndexOf() method is designed to locate the last instance of a
* value in a string.  If the value is not located, the result will be -1.  This
* example builds on the indexOf() method example.
*/

//create a variable to use the lastIndexOf() method.

let lastIndexOfTerm = quote2.lastIndexOf(findInQuote);
console.log(`The third term ${findInQuote} is at index
  ${quote2.lastIndexOf(findInQuote, (lastIndexOfTerm))}.`);
//The third term questions is at index 129.  The last string clarifies the index
//value location and repeats the term.


/**
*			v. slice()
*				1. The slice method removes a part of the string and returns it without
*           modifying the original string.
*/

//create a string
const quote3 = 'She encouraged herself to see her very small presence in the world as a good thing, a power, something that a hero might possess.';

console.log(quote3.slice(0,22)); //(0,22)  The 0 represents the 0 index.
//The 22 is the 23rd element of the string.  Result: She encouraged herself

console.log(quote3.slice(84,91));  //Result: a power

console.log(quote3.slice(93,127)); //Result: something that a hero might possess

let findInQuote2 = 'something';  //create variable to locate value in quote3
                                 //string
let indexOfTerm2 = quote3.indexOf(findInQuote2);  //use of the indexOf method to
                                                //locate the string 'something'

console.log(`The term ${findInQuote2} is at index ${indexOfTerm2}.`);
//The term something is at index 93. This new string clarifies the index value
//location and repeats the term.

let findInQuote3 = '.';  //create variable to locate value in quote3 string
let indexOfTerm3 = quote3.indexOf(findInQuote3);  //use of the indexOf method to
//locate the string '.'.  Subtract 1 to find the end of the index for the last
//word in the quoted section.

console.log(`The term ${findInQuote3} is at index ${indexOfTerm3}.`);
//The term . is at index 128. This new string clarifies the index value location
//and repeats the term.


/**
*			vi. split();
*				1. 	The split() method splices strings into substrings and places these
*           new values into an array.
*/
//create a string
const quote5 = 'There are years that ask questions and years that answer.';

const quote5Copy = quote5.split();  //create a copy of the string to manipluate
                                    //it into an array.
console.log(quote5Copy); //result ['There are years that ask questions and years
                        //that answer.']

const pullWords = quote5.split(' '); //creates an array with each value being an
                                    //individual word.
const pullSingleCharacter = quote5.split('');  //creates an array with each
                                              //value being an individual index
                                              //of a word or space.

console.log(pullWords[2]); //result years
console.log(pullSingleCharacter[21]); //result a


/**			vii. trim();
*				1. The trim method removes white space from both ends of the string.
*/

let quote8 = '        Stepping onto a brand-new path is difficult, but no more difficult than remaining in a situation, which is not nurturing to the whole woman.            '

console.log(quote8.trim());  //removes the spaces before and after the string.

/**			ix. toUpperCase();
*				1. The toUpperCase() method will manipulate a string to all uppercase.
*         It will also convert a value to a string if the value isn't already a
*         string datatype.
*/

//create quote variable
let quote6 = `The most common way people give up their power is by thinking they don't have any.`;

let quote6Upper = quote6.toUpperCase(); //create variable for toUpperCase method
                      //so quote6 may be leveraged in the toLowerCase() method.

console.log(quote6Upper);  //Result THE MOST COMMON WAY PEOPLE GIVE UP THEIR POWER IS BY THINKING THEY DON'T HAVE ANY.

/**
*			viii. toLowerCase();
*				1. The toLowerCase() method will manipulate a string to all lowercase.
*           It will also convert a value to a string if the value isn't already
*           a string datatype.
*/

let quote6Lower = quote6.toLowerCase(); //create variable for toLowerCase method
                      //so quote6 may be leveraged in the toUpperCase() method.
console.log(quote6Lower);  //Result: the most common way people give up their
//                           power is by thinking they don't have any.

/**
*	3. Properties
*		a. .length property calculates the length of a string.  .length is a
*       read-only result and not a method.
*
*/

let quote1 = 'Be roses that grow in the concrete.';
console.log(quote1.length);  //35
