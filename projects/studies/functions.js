
/**
* Function
*  	'function' is a JavaScript keyword, or term is tied to a specific
*      action/task in JavaScript. A function is a non-data structure that runs
*      an action one or multiple times. Functions are reusable code.
* 		1. Two phases (functions):
*			a. Definition and Declaration:
*				i. The function is defined with the JavaScript 'function' key word.
*				ii. Functions are declared with the keyword, name, parameters, and
*          code block: function functionName(parameter1, parameter2) { code
*           block to be executed or tasks) };
* 	 				1. Design the task or action for the program to perform.  Name the
*             function something that resembles the intended task.  See example
*             below, 'multiply'.
*	    			2. Tasks might include conditional statements, operators, loops
*			    	3. Create parameters (placeholders) for generic values so the
*             function might be used multiple times. 'num1' and 'num2' are
*             parameters (below).
*				    4. The {} curly braces create a code block, function body, or area
*             that the function will operate. {} is like a border for functions.
* 			iii. Functions typically have a console.log(); or return statement to
*             trigger an action in JavaScript.
*				   	1. console.log(); prints a result to the screen with no data
*               alteration or manipulation.
* 					2. Return statements may manipulate data.
*/

 //function declaration
  function multiply(num1, num2) {
	   return num1 * num2;
  }

 /*
 *			b. Call/Invocation/Execution
 *				i. Function take no actions until called or invoked.
 *					1. Function Call
 *						aa. use the function name.
 *						bb. create arguments (values) for the parameters (num1, num2).
 *						cc. The number of arguments should match the number of defined
 *                parameters.
 *
 */
 //function call with two arguments in place of num1 and num2

 multiply(100, 2);  //multiply value passed into reference memory.
  console.log(multiply);  //prints [Function: multiply] to the console.
  console.log(multiply(100, 2)); //prints 200 to the console.
  console.log(typeof multiply);  //prints function to the console.

 /**
 *		2. What is the difference between a function's parameters and arguments
 *        PASSED to a function?
 *			a. Parameters are created during the declaration stage of functions.
 *          They are generic placeholders. The number of parameters should match
 *          the number of arguments.
 * 			b. Arguments are values passed to the function for manipulation or
 *          evaluation. They replace parameters and pass the manipulated value
 *          into computer memory.
 *
 */

function multiply(num1, num2) { //num1 & num2 are parameters
	return num1 * num2;
  }

  multiply(100,2);  //100 is the argument for num1.  2 is the argument for num2.
  console.log(multiply(100, 2)); //expected result is 100 * 2 = 200.
  console.log(typeof multiply);	 //expected result is function





/**		3. What are the syntax(s) of named and arrow functions?
 *
 *    Named functions are declared functions, like the multiply function above
 *    or the holiday function below.
 */

 function holiday() {
  console.log('go to beach'); //prints go to beach
 }

 //arrow function syntax:

 const add = (num1, num2) => {
	return num1 + num2;
 }

 console.log(add(7, 10)); //prints 17

 //arrow function syntax, without arguments:

 const hello = () => {
	console.log('hello');
 }

 hello(); //prints hello

 /**
 *		4. How do we assign a function to a variable? Use anonymous functions or
 *      function expressions: anonymous functions are functions without a name,
 *      stored as variables.
 * 			Use the variable name, add, to call the function:

 let add = function (a, b) {return a + b};
 const add = function (a, b) {return a + b};
 var add = function (a, b) {return a + b};
 *
 * 		5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single
 *      value.  How do we specify inputs, and how do we specify outputs?
 *      A Function's default parameters is undefined.  This permits functions to
 *      be created with placeholders for inputs at a later time.  A return
 *      statement (for functions) is not required. Functions may be created to
 *      console.log(); items, for programming coding verification and debugging.
 */

var str;		//define variable, do not assign a value
function options(str) {		//create options function, with str parameter
	console.log(typeof str); //console.log typeof operator to review the str
                          //datatype
}
options(str);	//call options function. prints undefined.



/**
*
*		6. Scope: Functions can see and modify variables in parent or global scopes.
*     The inverse is NOT true.
* 			a. There are two types of variable scopes in javascript: parent or
*           global, and child or local scopes.
*				   i. parent or global variable scopes are accessible from the entire
*             program. These variables are not declared inside loops, inside
*             curly braces {} or code blocks, inside functions, if statements,
*             loops, etc.
*/
//create a global variable
const globalVar = 'Available through the program.';

//create a function, global to test the global variable
function global() {
	console.log(globalVar); //console.log() statement to print globalVar when
                          //called by function global();
}
console.log(globalVar); //result Available through the program.
global();  //result Available through the program.

/**
*
*				ii. child or local variable scopes are only accessible inside the curly
*           braces or code block were declared, inside functions, loops, etc.
*/

//move globalVar variable inside function global()
function global() {
  const globalVar = 'Available through the program';
	console.log(globalVar);
}
console.log(globalVar); //result is Reference Error" globalVar not defined.
global();  //call function global.  result is above error.


/**
*
*		7. Closures: Functions form closures around the data they house. If an
*       object returned from the Function and is held in memory somewhere
*       (referenced), that closure stays ALIVE, and data can continue to exist
*       in these closures! (See: our meeting-room app for an example!) (ALSO,
*       see: Understanding JavaScript Closures with Ease)
*			a. A closure is a function within a function.
*			b. A closure has three scope chains.
*				i. A closure accesses global variables, like above.
*				ii. A closure accesses local variables, within its function.
*				iii. A closure has access to outer function variables, and outer
*           function's parameters.
*			c. The closure isn't as powerful to be able to call its function's
*         arguments.  A closure can call its own functions parameters.
*/
//Create function cityState, with parameters city, state.
function cityState(city, state) {
	let location  = 'I live in ';  //create variable string to concatenate city
                                //and state.
	function combineCityState () {  //create closure to combine location variable,
                                  //city and state, and return when called.
 		return location + city + ' ' + state;
	}
	return combineCityState();
}
cityState('New Orleans', 'LA');  //result, I live in New Orleans, LA.
