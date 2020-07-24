
/**
* 		Control flow - Conditional Statements
*		1. If
*			a. If control flow statements utilize Boolean, true / false logic
*         during processing of each condition.
*			b. The basic syntax is the word IF, parenthesis enclosing proposed
*					condition or conditions, open curly braces {, a statement that
*					resolves to true or false, a semi colon ; closing the end of the
*					statement, and closed curly braces }.
*			c. Subsequent statements after the first statement are bookended by the
*					{} curly braces and represent a code block for execution.
*  		d. Multiple if (conditions) may be used.  There isn't a limit.
*			e. Multiple statements may be used.
*			f. The if flow control will execute rotate through the statements until
*					the value of true is located or to the last statement to execute.
*			g. Each if statement will be evaluated independently or execute till the
*					value of true is determined.
*			h. Else is the last execution in an if statement.  It is the failsafe or
*					final action for the code.
*
*/

var condition1;
var condition2;
var condition3;
var statement1;
var statement2;
var statement3;

if (condition1) {
	statement1;
} else if (condition2) {
	statement2;
} else {
	statement3;
}


//create two strings for comparison.
let quote9 = `How can we prepare for the future if we won’t acknowledge the
past?`;

let quote10 = `We embrace those things that make us unique or odd. For only in
these things can we locate and then develop our most individual abilities.`;

if (quote9.length < quote10.length) {  //use the .length property to calculate
																			//the length of strings.
  console.log(quote9);  // result is the printing of quote9.
}

/**
*
*		2. Else-if
*			a. Else if expand the versitility of the if statement by testing multiple
*					conditions in a dependency relationship with the first, or
*					parent If statement.
*
*/


if (condition1) {
	statement1;
} else if (condition2) {
	statement2;
} else {
	statement3;
}

let quote19 = `How can we prepare for the future if we won’t acknowledge the
past?`;

let quote100 = `We embrace those things that make us unique or odd. For only in
these things can we locate and then develop our most individual abilities.`;

let quote19Length = quote19.length;
let quote100Length = quote100.length;

if (quote19Length > quote100Length) {
  console.log(quote19 + ' ' + quote100);
} else if (quote19Length < quote100Length) {
  console.log(quote19 + ' ' + quote100);
} else {
  console.log('Quote lengths are equal.');
}

/**
*
*		3. Else
* 			a. Else is the last execution in an if statement.  It is the failsafe or
*					final action for the code.  Code example demonstrated above.
*			b. The else statement runs if the above statements are false.
*			c. Following values are false: false, undefined, null, 0, NaN, and ""
*					(empty string).
*
*		4. Switch
*			a. A switch statement differs from if / else if / else statements in that
*					it uses an exact match, a case label, for evaluation.
*			b. Writing case statements might be better in the event there are limited,
*					fixed results for testing.  Example: days of the week.
*			c. The switch statement will continue to execute until it executes a true
*					statement.
*			d. A switch statement starts with the word switch, followed by an
*					(expression), open curly brace {, case label, colon :, break
*					statement, semi colon ;, multiple case statements will have the case
*					label:, break;, until the end, were a default statement is created,
*					break; added, and closing curly brace }.
*			e. Break statements stop the code from executing.
*			f. Switch statements use the === strict comparison operator.
*			f. Default statements is the failsafe or final executing statement.
*			e. Example switch statement code:
*/


var expression;
var label1;
var label2;
var finalstatement;

switch (expression) {
case label1: statement1
	break;
case label2: statement2
	break;
default:
	finalstatement
	break;
}

var petstore;
var fish;
var dogs;
var cats;

switch (petstore) {
  case fish:
  console.log('We have 6 fish.');
  break;
  case dogs:
  console.log('We have 5 dogs.');
  break;
  case cats:
  console.log('We have 7 cats');
  default:
  console.log(`We have 18 pets. We're sure you'll love one of them.`);
  break;
}
