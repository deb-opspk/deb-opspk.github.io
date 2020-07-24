
/**	Loops
*	Loops are an excellent way to repeatedly evaluate data, and return a result.
* There are several types of loops.
*	1. For loop
*		a. For loops are tools to evaluate arrays, strings, forms, and other
*				iterable objects.
*		b. For loops start with the JS keyword for, open parenthesis (, start
*				condition, semi colon ;, stop condition, semi-colon ;, increment
*				expression, closed parenthesis ), and statement.
*
for (start condition; stop condition; increment) {
	statement;
}
*/

/**		c. The start condition is where the loop begins.  The expression
*				initializes the first loop and subsequent loops.  The start condition
*				may include variables.
*
*		d. The stop condition is where the loop stops. When the value of the stop
*				condition is true, then the loop continues.  When the value of the loop
*				is false, the loop stops.
* 	e. The increment expression can be a loop up or loop down. Variables, ++,
*				--, etc may be used.
*		f. The statement is what executes post loop.  Multiple statements may be
*				used inside a code block, with {}.
*		g.  The two examples loop backward and forward through an array object.
*/

var i;
var produce = ['apple', 'banana', 'carrot', 'eggplant' ];
for (i = 0; i < produce.length; i++) {
  console.log(produce[i]);  //result apple, banana, carrot, eggplant
};
for (i = produce.length -1; i >= 0; i--) {
  console.log(produce[i]); //result eggplant, carrot, banana, apple
};



/**
*		2. While statement
*			A while statement executes its statements as long as a specified condition
*				evaluates to true.
*			a. The format of a while statement is JS keyword while, condition, and
*					statement.
*			b. Multiple statements may be used within code blocks {};
*			c. Test conditions come before the statement.  If the condition tests as
*					true, then the statement is executed.  If the condition tests as
*					false, then the while loop execution stops and the statement executes.
*			d. While statements should be carefully crafted as they can generate an
*					endless loop, thus crashing the program and/or the computer.

while (condition)
statement
*/

//create two variables
let x = 5;
let y = 0;

//create while loop as long as y is less than 10, add 1.
while (y < 10) {  //result 11.  while loop runs 1 time.
  x++;
  y += x;
}


/**
*
*	3. For in loops
*		For in loops are used to loop through objects.  For in loops iterate through
*		the object's key/value pairs to satisfy the statement.
*		a. A for in loop begins with the JS keyword for, open parenthesis (, a
*			variable let or const, a value that could be any name, it is generally
*			good practice to utilize the word key), the word in, the name of the
*			object, the closed parenthesis, open curly brace for the code block, the
*			statement for execution, and closed curly brace.
*
for (var key in object){
	statement;
}
*/
	//create object to show for in loop
let obj = {
	instrument: 'trumpet',
	performer: 'Miles Davis',
	years_active: 45
};
//for in statement iterating the obj object
for (let key in obj) {
	console.log(`${key}: ${obj[key]}`); //statement to print the obj object key
																			//value pairs.
}

/**
*	4. Be able to loop any number of times, forward counting up to some limit,
*	backward counting down to 0
*/
//for loop. start at 10, stop at 15, increment by one.
for (i = 10; i <= 15; i++) {
  console.log(i); //result 10,11,12,13,14,15
}

//for loop. start at 15, stop at 10, decrement by one.
for (i = 15; i >= 10; i--) {
  console.log(i); //result 15,14,13,12,11,10
}

/**
*	5. Loop over an Array, forwards and backwards (above)
*	6. Loop over an Object (above)
*/
