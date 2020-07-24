/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use
 * variables.  Variables are named identifiers that can point to values of a
 * particular type, like a Number, String, Boolean, Array, Object or another
 * data-type.  Variables are called so because once created, we can CHANGE the
 * value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name
 *      (id or alias) for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization
 *      (or assignment).
 */

// 1. declaration //
var myName;

/**
 * At the declaration phase, the variable myName is undefined because we have
 *  NOT initialized it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this
// with constants //
var myVariable1 = 1;
myVariable1 = true;
myVariable1 = "someString";


// 4. declaring and assignment //

/** Declaring variables in JavaScript allows computer programs to store values
* into memory to call them at a later time to service program calls or
* functions.  Variables might be simple or primative data types like: number,
* strings, boolean, undefined, or NAN.  They could also be complex data types
* like arrays, functions, null, or objects.
*
* Declaring a variable uses one of three JavaScript keywords: var, let, or const
* and assign them a a name.  The assigned name should make sense for the action
* the variable will perform in the program.  Example below: var myNumber; would
* be a variable that another person could presume held a number.
*/

var myNumber;
/**
 * Assigning a variable is when you give the variable a value.  Assignment may
 * happen in two ways.  The next example shows the variable lastName being
 * declared on the the first line and assigned the value of 'Smith' on the
 * second line.
 */

var lastName;
lastName = 'Smith';

/*
 * The second way assignment may occur is to declare and assign the variable in
 * one step, on one line.  The below example shows the declaration of the newCar
 * variable and assigns the value of the variable to 'Mini Cooper'.
 */

 var newCar = 'Mini Cooper';



// 5. var, let, const //

/** There are three ways which you may declare and/or assign variables with the
* following keywords: var, let, and const.  The phoneNumber variable shows the
* use of var. Var is the orignial JavaScript keyword to assign variables.  Its
* use is depricated or reduced.  You may assign new values, multiple times to
* the phoneNumber variable. It will hold or maintain the last assigned value,
* 8885555555.
*/

var phoneNumber = 8005555555;
var phoneNumber = 8885555555;
console.log(phoneNumber); // 8885555555;
 /**
  * Let permits the declaration and assignment of a variable within its code
  * block and sub-code blocks. Variables declared with var in functions may be
  * seen through all function scopes.  See MDN Scoping rules for more
  * information:
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
  */

  let address1 = 4444;
  let address2 = 'Salty Lane';

 /**
  * const is a permanent value for a variable.  A variable using const must be
  * declared and assigned at the same time.  The const values cannot be updated
  * and are fixed.  A TypeError will occur if you attempt to re-assign a const
  * variable to a different value.
  */

//  const var1 = 42;
//  var1 = 55;
//  console.log(var1); //TypeError Assignment to constant variable.



// 6. Hoisting //

/**
 * Hoisting is JavaScript process of placing a declared variable into memory and
 * assigning the default value of undefined while it is being created.
 */

 console.log(cat); // Reference error: cat is not defined.

 var cat = 'meow';

 console.log(cat);  // prints 'meow' to console.

 console.log(cat);  //undefined printed to the console.
 var cat = 'meow';

/**
 * Order of operations:
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
 *
 */
