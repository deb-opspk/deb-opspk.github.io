/**   Hoisting
 * Hoisting is JavaScript process of placing a declared variable into memory and
 * assigning the default value of undefined while it is being created.
 */


// Variable hoisting: var, let, and const

//var is the original variable.
 console.log(cat);  //undefined console message.
 var cat = 'meow';
 console.log(cat);  // prints 'meow' to console.
 console.log(cat);  // prints 'meow' to console.
 var cat = 'meow';

/**
 * Var order of operations:
 * 1. Variable cat is placed into memory.
 * 2. Variable cat's value is set to the default, undefined.
 * 3. Variable cat is initialized with value of 'meow'.
 *
   -------------------------------
 * |(1)(2) var cat =  (3)'meow'; |
   ---------------------------------------------------
 * | console.log(cat);  // prints 'meow' to console. |
   ---------------------------------------------------
 *
   --------------------------------------------------------------
 * | console.log(cat);  (2) //undefined printed to the console. |
   --------------------------------------------------------------
 * | (1) var cat = | (3) 'meow'; |
   -------------------------------
 */

//let, released with ES6 has limited capacities for hoisting and will generate
//errors if not declared and initialized in the correct order
b = 27; //ReferenceError: Cannot access 'c' before initialization
let b; //let variables will not be hoisted.
console.log(b);

//const, The const (constant) variables must be declared and initialized on the
//same line.
con = 27; //const cannot be hoisted.
const con; //SyntaxError: Missing initializer in const declaration
console.log(con);


/**
 * Hoisting with functions
 * Declared functions may be hoisted.  Function expressions may not be hoisted.
 */
//This example calls the function before the function lines of code are written.
//Javascript will hoist the declared function.
declaredAndHoisted();

function declaredAndHoisted() {
    console.log("I'm a standard function.  I am declared and hoisted.");
    //return value is undefined, like the second cat example.
 } //the above console.log prints without an issue because declared functions
   //are hoisted.


//Function expression
functionExpressNotHoisted(); // TypeError: functionExpressNotHoisted is not a
                            //function

var functionExpressNotHoisted = function () {
    console.log("Function expressions are not hoisted!");
};


// ReferenceError: namedFunction is not defined.
namedFunction();

// TypeError: namedVariable is not a function.  namedVariable is undefined.
namedVariable();

var namedVariable = function namedFunction() {
    console.log("Named functions are not hoisted!);
};

/** What is the JS Interpreter?
 * Javascript is an intepreted programming language.  Web servers host
 * web pages, with JavaScript code, not compiled or packaged from
 * software developers, in the original - human readable form.  Client-side
 * web browsers interpret JavaScript pages at browse time.
 *
 * JavaScript Intepreters help speed the client-side web page response
 * time by compiling the server-side pages into binary or computer
 * readable format.
 *
 */
