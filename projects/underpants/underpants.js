// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//takes in any value and returns them unchanged

_.identity = function(value){
    //return the value unchanged
    return value;
}



/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


_.typeOf = function(value){
    if(Array.isArray(value)) { //vet if typeof is an array, typeof is object
        return 'array'; //return array
    } else if (typeof value === 'string') { //vet if typeof is a string
        return 'string'; //return string
    } else if (typeof value === 'undefined') { //vet if typeof is undefined
        return 'undefined'; //return undefined
    } else if (typeof value === 'function') { //vet if typeof is function
        return 'function'; //return function
    } else if (typeof value === 'boolean') {  //vet if typeof is boolean
        return 'boolean'; //return boolean
    } else if (typeof value === 'number') { //vet if typeof is number
        return 'number'; //return number
    } else if (value === null) { //vet if typeof is null; typeof is object
        return 'null'; //return null
    } else if (value instanceof Date) { //vet if instanceof is Date, typeof is object
        return 'date'; //return date - not required
    } else if (typeof value === 'object') {  //vet if typeof is object
        return 'object'; //return object
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element 
*       in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function (array, num) {
    if ( (!Array.isArray(array)) || num < 0 ) { //if array parameter is not an array
        return [];  //or the num parameter is negative, return an empty array literal
    } else if (typeof num !== 'number') { //if num parameter is not a number
        return array[0];    //return the first element in the array
    } else if (num > array.length) { //if the number is greater than the array length
        return array;   //return the array
    } else {
        return array.splice(0,num); //test2, Using the num parameter, Slice the array
        //with the num parameter and return the array length (num) from the 
        //begining of the array
    }
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num) {
    if ((!Array.isArray(array)) || num < 0) { //vet if array parameter is an array
        return []; //and num parameter is not negative.  if negative or not an array;
        //return empty array literal.
    } else if (typeof num !== 'number') { //vet if num is a number
        return array[array.length - 1]; //return the last item of array
    } else if (num > array.length) { //vet if number is larger than the array length
        return array;   //return full array if number is larger than array length
    } else {
        return array.splice(array.length - num); //return the number of items from the end of the
    }               //array the size of the number parameter.
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// var byFoo = {}
// for (var i = 0; i < myArray.length; i++) {
//     byFoo[myArray[i].foo] = myArray[i];
// }

_.indexOf = function(array, value) {
    for (let i = 0; i < array.length; i++) { //iterate over array with for loop
        if (array[i] === value) { //strict equality compare values in array with value
            return i;   //return the array index if match is found
        }
    }
    return -1; //return -1 when a match is not found.
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    for (let i = 0; i < array.length; i++) { 
//ternary operator did not pass: (array[i] === value) ? true : false;
       if (array[i] === value) { //conditional to strictly compare array value at index to value parameter
           return true; //return true if located
       }
    }
    return false; //return false if not located
}



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    if(Array.isArray(collection)) { //test if collection is an array.  Must be performed
    //before the object.  create a for loop to iterate over the collection
        for (let i = 0; i < collection.length; i++) { 
            func(collection[i], i, collection); //call function for each element (collection[i])
            //index, and collection
        }
        
    }  else { //test collection as an object
        for (let key in collection) { //use for in loop for objects
            func(collection[key], key, collection); //call function for each element (collection[key]),
            //each key, and the collection.
        }
    }  

}




/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


_.unique = function(array) {
 let uniqueArr = []; //create unique array to hold unique array index items
 for (let i = 0; i < array.length; i++) { //create loop to iterate over array 
 //if the inlcudes method returns false for the array parameter and the indexof method returns -1 or not found
     if (!uniqueArr.includes(array[i]) && (_.indexOf(array, array[i]) !== -1)) { 
         uniqueArr.push(array[i]); //push the array index item to the uniqueArr array
        }
    }
    return uniqueArr; //return the unique array per instructions
};
 



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Returns: 
*   1) Array of elements vetted by the function
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/




_.filter = function(array, func) { //create filter function with array and function parameters
    let newArr = []; //create a new array to return desired, filtered elements / storage container
    _.each (array, function(element, index, array) { //Use each with array, and function arguments
    //use each to loop through the function, pass into the loop the function the element, index, and array
    //conditional statement to vet truthy values driven by the function's logic
        if (func (element, index, array)) {
            newArr.push(element); //push truthy values to the newArray 
        }

});
    return newArr; //return newArray of filtered elements
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, func) { //create reject function with an array and function parameters
    let newArr = []; //create newArr to hold rejected elements from array
    _.filter (array, function(element, index, array) { //use the filter function with element, index, and array parameters
        if (!func (element, index, array)) { //negate the filter function call, as you want the rejected items
            newArr.push(element); //push rejected items to the newArr
        }
    });
    return newArr; //return newArr;
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


_.partition = function(array, func) {
    let newArr = []; //create array as storage for the truthy and falsey values
    let arrTruthy = []; //create an array to hold truthy values
    let arrFalsey = []; //create an array to hold falsey values
    _.filter (array, function(element, index, array) { //use filter to vet the truthy elements in array
        if (func (element, index, array)) { //conditional to pull iterated truthy values
            arrTruthy.push(element); //push truthy values to the arrTruthy array
        } else if (!func (element, index, array)) { //use the ! operator to vet negative values
            arrFalsey.push(element); //push negative values to the arrFalsey array
        }
    });
    newArr[0] = arrTruthy; //push the truthy array to the 0 index of the newArr
    newArr[1] = arrFalsey; //push the falsey array to the 1 index of the new Arr
    return newArr; //return array;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection, func) {
    let newArr = [];
    if (Array.isArray(collection)) { //vet collection for array 1st with Array.isArray
     _.filter (collection, function(element, index, collection) { //use filter to iterate collection for array elements, index, and collection
        if (func (element, index, collection)) { //use func parameter to filter elements, index, and collection
            newArr.push(func(element, index, collection)); //push func filtered elements, index, and collection to the newArr
        }
        });
    } else { //conditional to vet collection objects
        _.filter(collection, function(value, key, collection) { //using filter and updating values for object
         if (func (value, key, collection)) { //use func parameter to filter values, keys, and collection
         newArr.push(func(value, key, collection));  //push func filtered values, keys, and collection to newArr
            }
        }); 
    }
    return newArr; //return newArr
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property) {
    let newArr = [];  //create new array to hold removed object properties(values)
    newArr = _.map(array, function (value, key, array) {//use map to iterate array of objects
    //and assign to newArr
        return array[key][property]; //return the array[key][property] values
        });
    return newArr;  //return the newArr
};




/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, 
*       otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// _.every = function (collection, func) {
//         if (func === undefined) { //checking if function is undefined
//         for (let i in collection) { //looping over collection
//             if ((!!collection[i]) === false) { //collection elements are false
//                 return false; //return false
//             }
//         }
//         return true; //if not, return true
//     } else if (Array.isArray(collection)) { //checking to see if the collection is an array
//         for (let i = 0; i < collection.length; i++) { //loop over collection
//             if (func(collection[i], i, collection) === false) { //checking the function with the collection element, index, and collection to see if false
//                 return false; //return false if false
//             }
//         }
//         return true; //if not, return true
//     } else {
//         for (let key in collection) { //looping over objects
//             if (func(collection[key], key, collection) === false) { //if the current value, current key, and collection are false
//                 return false; //return false
//             }
//         }
//         return true; //if not, return true
//     }
// };


_.every = function(collection, func) {
    
    let flag = true; //set variable flag true, if every element is true
    _.each(collection, function(element, index, collection) { //use each function to vet arrays and objects
        if(typeof func === 'function' || func !== undefined) { //vet func parameter for function
            if (func(element, index, collection) === false) { //if function returns one element false, flag false
                flag = false;  //flag false
            }   
        } else {                //else statement
            if (element === false) { //if one element false, flag false
                flag = false;  //flag false
            }
        }

    });
    return flag;  //return true if above tests fail //like allstringspass
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


// _.some = function(collection, func) {
//     if (func === undefined) { //if function is undefined
//         for (let i in collection) { //looping over collection
//             if ((!!collection[i]) === true) { //if the collection elements are true or false, return true
//                 return true; //return true.  return true beats the return false statement and ends the func/for loop 
//             }
//         }
//         return false; //if all the elements in the collection are false, return false
//     } else if (Array.isArray(collection)) { //Use Array.isArray method vet if collection is an array
//         for (let i = 0; i < collection.length; i++) { //for loop for arrays
//             if (func(collection[i], i, collection) === true) { //if all elements in function are true,
//                 return true; //return true
//             }
//         }
//         return false; //if not, return false
//     } else {
//         for (let key in collection) { //looping over collection, vetted as an object
//             if (func(collection[key], key, collection) === false) { //if some of the elements in the collection are false,
//                 return true; //return true
//             }
//         }
//     return false; //if not, return false
//     }   
// };
  
    
_.some = function(collection, func) { //create some function with collection and function parameters
    let flag = false;  //set a flag variable

    _.each(collection, function(element, index, collection) { //use each function to loop over array or object elements/values
        if (typeof func === 'function' || func !== undefined){ //if statement vetting if function, or func parameter is function
            if (func(element, index, collection) === true) { //if func parameter includes at least one item, flag true
                flag = true; //flag true if collection has at least one item
            }
        } else {
            if (element === true) { //flag true if collection has one element flagging true.
                flag = true; //flag true
            }
        }

    });
    return flag;  //return flag
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) { //create reduce function with array, func, and seed as parameters
  let result; //create result variable as a container.
  if(seed !== undefined) { //if seed is provided
      result = seed; //assign result to the seed parameter
      _.each(array, function(element, index, array) { //use each function to iterate array parameter
         result = func(result, element, index); //assign result to function parameter
      });
    } else { //if no seed is given
          result = array[0]; //set the starting point as the first value of the array parameter
          //begin looping through the array at the 1st index, not the zero index.
          for (let index = 1; index < array.length; index++) { //step 5, return value of final function call, assign to result
              result = func(result, array[index], index);  //assign result to the function result, array iteration, and index
            }
    }
  return result; //return result
    
};

// _.reduce = function(arr, func, seed) {
//     for (let i = 0; i < arr.length; i++) { //for loop to iterate through the given array
//         if (seed === undefined){ //if no seed, set the seed as the 
//             seed = arr[0];  //zero indexed value in array
//         } else {
//             seed = func(seed, arr[i], i); //Run the function for each item in indexed array
//         }   //assign seed the value from the function's actions
//     }
//     return seed; //return the final value;
// }



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, ...objects) { //create extend function, ...objects = object2 (or more) parameters;
//spread syntax (...) permits multiple objects and splits objects into arrays
    for (let i = 0; i < objects.length; i++) { //for loop to vet arrays
        //console.log(i); //printing 0
            for (let keys in objects[i]) { //for in loop to vet objects
                object1[keys] = objects[i][keys]; //assign object1[keys] to object1[i][keys]
            }
    }
    return object1; //return object1 with unique values from ...objects, in order of the ... object parameters
}; 
console.log(_.extend({a: 'one'}, {b: 'two'})); //testing with console.log statement


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
