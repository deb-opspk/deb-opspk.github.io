/**
* Data types
*
* 0. JavaScript data types are primitive/simple and complex.
* 1. Primitive/simple: number, string, Boolean, symbol, undefined, NaN
* 2. Primitive (special): null
* 3. Complex: array, object
*
* The typeof operator is a handy tool to tease out data types.  Typeof may be
* used in conjunction with console.log();.
*
* Primitive/simple data types explained:
*
* 00. Number: The number data type is exactly as expected.  Number holds
*   integers positive, negative, zero, decimals, and scientific notation.
*/

 var num = 100;
 console.log(100);        //100
 console.log(typeof num); //number

/**
* 01. String: Strings are surrounded by the following single quotes '', double
*     quotes"", and back-ticks ``.  Strings may include numbers, letters,
*     symbols, etc. The plus sign concatenates the string and number and/or
*     strings, thus combining the string.  Examples:
*/

var string = 'I am a string!';
console.log(string);                 //I am a string!
console.log(typeof string);          //string
                                    //'I' [0] accesses the first letter
console.log(string[0]);             //in I am a string.
console.log(string.length - 1);     //13 string.length counts the 14 characters
                                    //in the variable string and subtracts 1.



var string1 = "Adding_a_string" + 10;
console.log(string1);                //Adding_a_string10

var string2 = 10 + 2 + `Adding_string2`;
console.log(string2);				 //12Adding_string2

/**
* 02. Boolean: Booleans are true / false values.
*/

 var boolean = true;
 console.log(boolean);         //true
 console.log(typeof boolean);  //boolean

/**
* 03. undefined: The default value of a variable is undefined. An initialized
*   variable is a declared variable, given a value, placed into computer memory.
*   The below example shows a declared variable that has not been initialized
*   with a value.  The variable is stored in memory.
*/

 var defaultvar;
 console.log(defaultvar);        //undefined
 console.log(typeof defaultvar); //undefined

 //The below example has a declared variable, defaultvar; initialized with the
 //value of 100.  Console.log returns 100.

 var defaultvar = 100;
 console.log(defaultvar);        //100

/**
* 04. NaN: Stands for not a number.  The below example shows a variable nan
*   attempting to multiply a string by the number 100.  The console returns nan,
*   not initializing the variable. It is important to note NaN datatype is
*   number.
*/

 var nan = 'oneHundred' * 100;  //undefined global result
 console.log(nan);     			//NAN
 console.log(typeof nan); 		//number

 var nan2 = 0/0;            //undefined result
 console.log(nan2);         //NAN
 console.log(typeof nan2);  //number

/**
* 05. null: The null data type differs from NaN because the value does not exist
*     or the value is at an invalid address. Null is a primative data type and
*     evaluates to falsy.  The null data type is used to represent an
*     intentional absence of data.
*/
var nul = null; //create variable nul to test null data type
console.log(typeof nul); //typeof reveals object as null datatype

//use console.log, strict equality and equality operators to determine how null
//and undefined match up.
console.log(null === undefined);  //false
console.log(null == undefined);   //true
console.log(null === null);     //true
console.log(null == null);      //true

/**
* Complex data types:
*
* 06. array: An array is very similar to a list of items.  You may use a
*   variable to create an array.  Arrays may store numbers, strings, Boolean.
*   This is how you create an empty array:
*/

var array = [];  //Create an empty array
array = ['List', 'items', 'in', 'array'];  //Adding items to array
console.log(array);  //prints ['List', 'items', 'in', 'array']
console.log(array.length);  //prints 4 items in array

array.unshift('beginning'); //puts the word 'beginning' at the front of the
                            //array, with the unshift method.
array.push('end');  //puts the word 'end' at the end of the array,
                    //with the push method.
console.log(array[1]);  //Leverages the index to print 'List', second item in
                        //the array.  Index starts at 0.
console.log(array[array.length - 1]);  //leverages the length property to print
                                      //the last index item on the array, 'end'.

console.log(array);  //prints the full array: ['beginning', 'List', 'item',
                    //'in', 'array', 'end']
console.log(array.length);  // prints total number of items in array, 6.

array.add1 = ['Second', 'array'];  //adds array add1 to array.
array.add2 = ['Third', 'array']; //adds array add2 to array
console.log(array); //prints combined arrays:

/**
[
  'beginning',
  'List',
  'items',
  'in',
  'array',
  'end',
  add1: [ 'Second', 'array' ],
  add2: [ 'Third', 'array' ]
]
*/

console.log(array.length); //prints 6 items in the array
console.log(typeof array);  // prints object.  Arrays are objects.
array.add1.push('to', 'end');  //Using the push method to add items to the
                              //end of the add1 array
array.add2.unshift('beginning', 'of'); //Using the unshift method to add items
                                      //to the beginning of the add2 array
console.log(array);  //prints array:

/**
[
  'beginning',
  'List',
  'items',
  'in',
  'array',
  'end',
  add1: [ 'Second', 'array', 'to', 'end' ],
  add2: [ 'beginning', 'of', 'Third', 'array' ]
]
*/

array.pop();  //pop method removes the last item of the array.
console.log(array);  //prints array
console.log(array.length); //prints array length of 5

/**
[
  'beginning',
  'List',
  'items',
  'in',
  'array',
  add1: [ 'Second', 'array', 'to', 'end' ],
  add2: [ 'beginning', 'of', 'Third', 'array' ]
]
*/

array.shift();  //shift method removes the first item of the array, 'beginning'.
console.log(array);   //prints array
console.log(array.length); //prints array length of 4

/**
[
  'List',
  'items',
  'in',
  'array',
  add1: [ 'Second', 'array', 'to', 'end' ],
  add2: [ 'beginning', 'of', 'Third', 'array' ]
]
*/

/**		 join()
*				1. 	The join() method will concatenate an array by creating and
*       returning new strings from the array values.
*/

//create array
let arr = ['True', 'life', 'is', 'lived', 'when', 'tiny', 'changes', 'occur.'];

//use join() to transform the arr array into a string with a space.

let arrJoin = arr.join(' '); //(' ') //space between array values
console.log(arrJoin);  //results True life is lived when tiny changes occur.

arrJoin = arr.join(''); //no space between array values
console.log(arrJoin);  //results Truelifeislivedwhentinychangesoccur.

arrJoin = arr.join(''); //commas between array values
console.log(arrJoin);  //results True,life,is,lived,when,tiny,changes,occur.


 /**
 *
 * 07. Object
 *   	Objects are similar to arrays in that they are complex data types. Objects
 *    hold multiple types of data like all primative data types and arrays.
 * 		Objects may be multi-level by having objects within objects, with arrays.
 *    Because objects may hold multiple types of data types, they may be thought
 *    of as collections. These collections use key-value pairs to identify the
 *    data.  They do not use indexes like arrays, because the data are not
 *    represented in a linear fashion.
 *		Object examples:
 */

  var obj = {};  // creating a new, empty, literal object.
  obj = {  //adding values to the object
  name: 'Deb',
  pet: true,
  hobbies: ['cycling', 'coding', 'reading'],
  };
  console.log(obj); //prints obj {name: 'Deb', pet: true, hobbies: ['cycling',
                    //'coding', 'reading']}
  console.log(typeof obj); //prints object.

 /**
 * 		The word 'name' is part of a key-value pair.  'Name' is the key and 'Deb'
 *    is the value.  Name and key are strings and could both be enclosed by ''
 *    or "". Word string values must be enclosed by quotes.  Word string keys
 *    may be enclosed by quotes.  The rule of thumb is to code consistently.
 * 		Objects use the curly braces {} to define properties inside objects
 *    properties. Properties (key-value pairs) are separated inside the {}
 *    by commas.
 *		Adding values to existing objects:
 */

 obj.pet = 'cat'; //adds the key-value pair of pet: 'cat' to the obj object,
                  //using the dot-notation technique.
 obj['pet name'] = 'kitty'; //adds the key-value pair of 'pet name' to the obj
                            //object, with bracket notation. Requires quotes
                            //and must be used if key strings have spaces.
 console.log(obj); // prints the following:
 /**
 {
  name: 'Deb';
  pet: true;
  hobbies: ['cycling', 'coding', 'reading'],
  'pet name': 'kitty'
 }
 */

 console.log(obj.pet); //prints cat
 console.log(obj['hobbies']); //prints the 'hobbies' key array: ['cycling',
                              //'coding', 'reading'].
 console.log(obj['hobbies'][2]); //prints the 'hobbies' key array, index item 2:
                                //['reading']. Must use the quotes around the
                                //key string, 'hobbies', or you will generate a
                                //Reference error of hobbies not defined.



/**
* 08. Function
*  	'function' is a JavaScript keyword, or term is tied to a specific action
*     or task in JavaScript. A function is a non-data structure that runs an
* action one or multiple times. Functions are reusable code.
* 		1. Two phases (functions):
*			a. Definition and Declaration:
*				i. The function is defined with the JavaScript 'function' key word.
*				ii. Functions are declared with the keyword, name, parameters, and code
*            block: function functionName(parameter1, parameter2) { code block
*              to be executed or tasks) };
*	 				1. Design the task or action for the program to perform.  Name the
*           function something that resembles the intended task.  See example
*           below, 'multiply'.
*				  2. Tasks might include conditional statements, operators, loops
* 				3. Create parameters (placeholders) for generic values so the function
*            might be used multiple times. 'num1' and 'num2' are parameters
*            (below).
*	  			4. The {} curly braces create a code block, function body, or area
*           that the function will operate.  {} is like a border for functions.
* 			iii. Functions typically have a console.log(); or return statement to
*             trigger an action in JavaScript.
*					  1. console.log(); prints a result to the screen with no data
*               alteration or manipulation.
* 					2. Return statements may manipulate data.
*/

 //function declaration
  function multiply(num1, num2) {
	  return num1 * num2;
  }

 /**
 *			b. Call/Invocation/Execution
 *				i. Function take no actions until called or invoked.
 *					1. Function Call
 *						aa. use the function name.
 *						bb. create arguments (values) for the parameters (num1, num2).
 *						cc. The number of arguments should match the number of defined
 *              parameters.
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
 *        They are generic placeholders. The number of parameters should match
 *        the number of arguments.
 * 			b. Arguments are values passed to the function for manipulation or
 *        evaluation. They replace parameters and pass the manipulated value
 *        into computer memory.
 *
 */

   function multiply(num1, num2) { //num1 & num2 are parameters
	   return num1 * num2;
   }

  multiply(100,2);  //100 is the argument for num1.  2 is the argument for num2.
  console.log(multiply(100, 2)); //expected result is 100 * 2 = 200.
  console.log(typeof multiply);	 //expected result is function


 /** 09. Infinity and -Infinity
 *	Infinity and -Infinity are tools to verify the largest and smallest possible
 *    values.  MDN says, "Infinity is a property of the global object".
 *    Infinity is a global scope variable.  Positive Infinity is larger than any
 *    other number.  -Infinity is smaller than any other number.
 */

console.log(Infinity); //Infinity
console.log(Infinity * 1000); //Infinity
console.log(Math.log(0)); //-Infinity
console.log(1 / Infinity); //0
console.log(1 / 0); //Infinity



 /**
 * 10. What is the difference between primitive/simple and complex data types?
 * 		Primitive/simple datatypes are immutable, or cannot be changed.
 *    The primitive/simple datatypes are the most basic items, in the basic form
 *    they could be represented. Complex datatypes are mutable, can be changed
 *    and/or updated in their current form, added to, subtracted from.
 *
 * 11. Primitive values are passed to a function BY COPY, complex values are BY
 *    REFERENCE. What does that mean, and how are they different?
*
 * 		a. Primative values: string, number, Boolean, null, undefined, and
 *      symbol(ES6).
 * 			i. Value types:
 *				1. Memory allocation is in the Stack.
 *				2. The stack holds primative data types.
 *				3. Primitive data types are immutable (no changes).
 *				4. The Stack operates faster than the Heap memory space.
 *				5. Variables know the data content.
 *				6. A variable knows the Stack memory location.
 *				7. FIFO logic (first in, first out).
 *				 	aa. The stack operates like a stack of paper on a desk.
 *
 *		b. Complex values: array, function, object
 *			i. Reference types:
 *				1. Memory allocation is in the Heap.
 *				2. The Heap holds complex data types.
 *				3. Complex data types are mutable (changable).
 *				4. The Heap operates slower than the Stack memory space.
 *					aa. Holds more complex data.
 *				5. Variables store a memory location, not data content.
 */

/**
 * 			i. Value types (continued):
 */

 var x = 'ant'; //JavaScript pushes variable value for x to the Stack

 /*

 /*
		x
	---------
	| 'ant'	|
	---------
	   0x001 (memory location)

 *	1. Value types are immutable
 *		a. Primative value types cannot be changed once initialized.
 */

 var x = 'ant'; //expected result variable x declared. initialized to string
                //'ant'.
 console.log(x.toUpperCase()); //prints to console, 'ANT'.
 console.log(x); //prints to console, 'ant'.

/* 	2. Value types are compared by value.
 *		a. Values are compared by string value.
 *		b. Values are NOT compared by string value and memory location.
 *		c. X and Y are in two different memory locations.
 *			i. X is at memory location 0x001
 *			ii. Y is at memory location 0x002
 *		d. variables x and y know the string value and the memory location.
 */

 var x = 'ant';
 var y = 'ant';
 x == y; // expected result: true

/*
 *
		x 					y
	---------			---------
	| 'ant' |			| 'ant' |
	---------			---------
	  0x001 			  0x002

 * 	3. Value types are copied by value
 *		a. X and Y are two different variables, in two different memory locations.
 *		b. A copy of X is made for Y's value.
 */

/** 		i. Reference types (continued):
 *
 *		1. Reference types are mutable.
 *			a. You can change complex datatypes post/after initialization:
 */

 var i = {			//creates a object, a complex data type
	insects: 'ants'
	};

	console.log(i);  //prints key/value pairs for object i.
	console.log(i['insects']); //prints object i's key in lowercase, ant.

i.insects = i.insects.toUpperCase();  //i object; accessing the insect key;
//using the toUpperCase method to convert the insect key result to uppercase.
console.log(i); //prints key/value pairs for object i.
console.log(i['insects']);  //prints object i's key in uppercase, ant.

 /**
 *		2. Reference types are compared by memory references
 */

 var a = {	//create complex object a.  create complex object b.
	city: 'Paris'
	};
 var b = {
	city: 'Paris'
	};
 console.log(a == b);  //result is false because they are stored in different
 //memory spaces.  A new object results in a new memory location in the Heap.
 /**
 *
 *	a				a
 * 	---------		-----------------
 * 	| 0x002 |	=> 	|{city: 'Paris} |
 *	---------		-----------------
 *	 0x001			0x002
 *	b				b
 * 	---------		-----------------
 * 	| 0x004 |	=> 	|{city: 'Paris} |
 *	---------		-----------------
 *	 0x001			0x004
 *
 *	//memory location for a 0x002 does not equal the memory location for b
 *    0x004.
 *
 */
 //		3. Reference type is copied by reference
 var a = {	//create complex object a.  create complex object c.
	city: 'Paris'
	};
 var c = {
	city: 'London'
	};
console.log(c); //prints object c key/value pair.

 var c = a;  //copy a's key/value pair to c.
 console.log(c.city);  //prints Paris, the value for object a's city key.
