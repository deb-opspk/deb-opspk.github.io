/** Operators
*
* 	Arithmetic operators
* 	+ addition operator  	// simple addition (5+3) = 8;
*	- subtraction operator 	// simple subtraction (5-3) = 2;
* 	/ division operator		// simple division (15/3) = 5 ;
* 	* multiplication operator 	// simple multiplication (5*3) = 15;
* 	% remainder operator		//simple remainder (5 / 3) = 2;
* 	** Exponentiation operator  //simple exponent (5 ** 3) == 125
*/

/** 	Assignment operators
* 	= assignment operator
* 	+= addition operator 	//live examples below
*	-= subtraction operator
*	*= multiplication assignment
*	/= division assignment
*	%= remainder assignment
*/

var x = 5  // assignment operator.  variable x is/has the value of 5.
console.log(x += 3); //the same as 5 + 3 = 8
var x = 5
console.log(x -= 3); //the same as 5 - 3 = 2
var x = 5
console.log(x *= 3); //the same as 5 * 3 = 15
console.log(x /= 3); //the same as 5 * 3 = 15; and 15 divided by 3 = 5.
										//x not reset to equal 5.
console.log(x %= 3); //the same as 5 * 3 = 2; starting point is 5, carried from
										//the value above, remainder is 2.
var x = 5;
console.log(x **= 3); //the same as 5 ** 3 = 125


/**
*	Comparison operators
* 	Comparison operators resolve in truthy or falsy comparisons
*	== Equality 	// x == y;  values compared.  Data types not compared.
*	!= Inequality 	// x != y; x not equal to y.  Data types not compared.
*	=== Strict equality // x === y, values and data types compared.
*	!== Strict inequality // x !== y, values & data types not equal &/or not
*		compared.
*
*/
// > Greater than operator
console.log(5 > 2); //is true.

// 	< Less than operator
console.log(5 < 2); //is false.

//	>= Greater than or equal to operator
console.log(6 >= 6 && 7 >= 6); //true

//	<= Less than or equal to
console.log(6 <= 6 && 7 <= 16); //true


console.log(1 == 1);	//true
console.log(1 == '1'); //true value of number 1 and string '1' are the same.
console.log(1 != '1'); //false
console.log(1 != true); //false
console.log(0 != false); //false
console.log(1 === '1'); //false  data types of number & string are not the same.
console.log(1 !== 1);  //false.  values and datatypes are equal.
console.log(11 !== 1); //true values are not equal.  datatypes are equal.



/**
* Logical operators
*  Logical operators employ Boolean values to return a result.  These are also
* 	known as binary operators, comparing two values.
*	&&	//Logical AND
*	||	//Logical OR
*	!	//Logical NOT  //Not equal to.  console.log(10 != 100); //true
*/
let a = 10;
let b = 20;

// true. Use of the &&. Both sides of the operands must return a true value to
//receive a true output.
console.log(a >= 10 && b < 100);
//false.  A false result occurs when one side fails.
console.log(a != 10 && b == 20);
//true.  Use of the ||. One side of the operands must return a true value to
//receive a true output.
console.log(a == 10 || b == 100);
//false.  A false result occurs when both sides fail.
console.log(a != 10 || b == 100);



/**
* Unary operators (!, typeOf, ++, --, -)
*
*
*	! This value goes before the number, string, or value to NOT equal the value.
* ! converts to a Boolean value and negates the results.
*/

console.log(!50.0); // false
console.log(!'50'); // false
console.log(!0);	//true
console.log(!1);	//false
console.log(!true);	//false
console.log(!false); //true

//	negation: - This value goes before the number, string, or value to negate
//the value.

console.log(-50.0); // -50
console.log(-'50'); // -50
console.log(-0);	//-0
console.log(-1);	//-1
console.log(-true);	//-1
console.log(-false); //-0

// 	increment ++ // adds one to the operand.

var x = 5; //5
x++;        //5 + 1 = 6;
console.log(x); //6

//	 decrement -- // subtracts one from the operand.

x--; //subtracts 1; 6-1 = 5
x--; //subtracts 1; 5-1=4
console.log(x); // 4


/**
*	typeof operator validates the data type of a boolean, function, number string,
* variable, or objects.
*/

// Boolean:
var bool = true;
console.log(typeof bool); //boolean
console.log(bool); //true

// Function:
function func() {
	console.log('I\'m a function');
}
func();  //prints I'm a function
console.log(typeof func); //function
console.log(func);  //prints [Function: func]

//Number:
var num = 1;
console.log(typeof num); //number
console.log(num);

var ab = 100 / 'seven';
console.log(typeof ab); //number
console.log(ab); // NaN

// String:
var str = 'happy coding';
console.log(typeof str); //string
console.log(str); // 'happy coding'

//Variable:
const xy = function (data, input) {return data * input};
console.log(typeof xy);  //function

//undefined:
var c;
console.log(typeof c); //variable a is not assigned a value, therefore undefined


//Null:
var d = null;
console.log(typeof d); //object

//Array:
var arr = []; //create array literal
console.log(typeof arr); //object
console.log(Array.isArray(arr)); //array, expected result true.
console.log(arr); //[] or empty array

//Object:
var e = {
  music: true
};
console.log(typeof e); //object
console.log(e);


/**
* Ternary operator (a ? b : c)
*
*  The ternary operator uses three operands:
*
*	condition ? ifTrueExecute : executeFailSafe;
*
*	1. Conditional, represented as a question mark, ?
*	2. 1st expression, followed by a colon, :
*		a. If expression evaluates to truthy, the 1st executes.
*	3. 2nd expression, followed by a semi colon, ;
*		a. If 1st expression evaluates to falsy, the 2nd executes.
*		b. The second expression is a fail safe when 1st expression fails.
*/

function getCoat(weather) {
	return (weather ? 'rainy' : 'sunny');
}
console.log(getCoat(true));  //rainy
console.log(getCoat(false)); //sunny
console.log(getCoat(1));  //rainy
console.log(getCoat(0));  //sunny
console.log(getCoat('rainy')); //rainy
