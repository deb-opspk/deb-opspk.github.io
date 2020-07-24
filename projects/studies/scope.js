/**
*	Scope: Functions can see and modify variables in parent or global scopes.
* The inverse is NOT true.
* 		a. There are two types of variable scopes in javascript: parent or global,
*					and child or local scopes.
*				i. parent or global variable scopes are accessible from the entire
*						program. These variables are not declared inside loops, inside curly
*						braces {} or code blocks, inside functions, if statements, loops,
*						etc.
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
*			ii. child or local variable scopes are only accessible inside the curly
*					braces or code block were declared, inside functions, loops, etc.
*/

//move globalVar variable inside function global()
function global() {
  const globalVar = 'Available through the program';
	console.log(globalVar);
}
console.log(globalVar); //result is Reference Error" globalVar not defined.
global();  //call function global.  result is above error.


//Block scope, illustrated with strings.  quote1 is available inside the {}
//curly braces, inside the code block.  quote1 is not available outside the {}.
{
  const quote1 = 'When I dare to be powerful, to use my strength in the service
	of my vision, then it becomes less and less important whether I am afraid.';
  console.log(quote1) //When I dare to be powerful, to use my strength in the
	//service of my vision, then it becomes less and less important whether I am
	//afraid.
}

console.log(quote1) //ReferenceError: quote1 not defined.

//Block scope, illustrated with a function and a string. quote2Variable is not
//accessable outside the quote2 function.
function quote2 () {
  const quote2Variable = `I changed the past by walking back into it.`;
}

function quote2ScopeAttempt () {
  quote2();
  console.log(quote2Variable);
}
quote2ScopeAttempt(); //ReferenceError: quote2Variable is not defined

//Nested functions: parent scopes do not have access to child scopes

function firstFunc () { //create first function. Function loaded in global scope
  const first = "I am the first function."; //create variable to print
  console.log(first); //prints I am the first function.
  function nestedFunc() { //nested function loaded in local scope
    const nested = "I am the nested function.";
    console.log(nested);  //prints I am the nested function.
    console.log(first); //prints I am the first function.  This demonstrates the
											  //child function with access to the parent function.
  }
  nestedFunc(); //calls nestedFunc
  console.log(nested); // ReferenceError: nested is not defined
}
firstFunc(); //call firstFunc, console.log(nested) generates
						 //ReferenceError: nested is not defined
firstFunc(nestedFunc); //call firstFunc(nestedFunc) generates
											 //ReferenceError: nestedFunc is not defined



//Nested functions: child scopes have access to parent scope variables

function firstFunc () { //create function, global scope
  const first = "I am the first function.";
  console.log(first); //prints I am the first function.
  function nestedFunc() {
    const first = "I am the nested function.";
    console.log(first); //prints I am the nested function.  demonstrating the
		//child scope with access to the parent scope, overwriting the original,
		//first variable contents.
  }
  nestedFunc(); //calls nestedFunc
  console.log(first); //prints I am the first function.
}
firstFunc();


/**
*
*	Closures: Functions form closures around the data they house. If an object
* returned from the Function and is held in memory somewhere (referenced), that
* closure stays ALIVE, and data can continue to exist in these closures! (See:
* our meeting-room app for an example!) (ALSO, see: Understanding JavaScript
* Closures with Ease)
*			a. A closure is a function within a function.
*			b. A closure has three scope chains.
*				i. A closure accesses global variables, like above.
*				ii. A closure accesses local variables, within its function.
*				iii. A closure has access to outer function variables, and outer
*						function's parameters.
*			c. The closure isn't as powerful to be able to call its function's
*					arguments.  A closure can call its own functions parameters.
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
