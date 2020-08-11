// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-debraopspk');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *  //inside of your github folder
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //use filter function to filter male customers
    //output must be a number
    //_.filter(array, function(e, i, a){}) 
    //look for gender, you don't need three param
    // _.filter(array, function(customer, index, array){}) 
    return _.filter(array, function(customer){ 
    //return  a condition that resolves to true or false based on the argument
    //test if customer object has a gender property of male
    return customer.gender === 'male';
    }).length;
    
};

/**
 * ### 2: `femaleCount`
 - **Objective**: Find the number of female customers by using the female.gender dot notation in the customer's array
 - **Input**: `Array` //customers array
 - **Output**: `Number` //seed begins at 0
 - **Constraints**: use `reduce`
 */
//accumulator = counter

//var femaleCount = customers.reduce((counter, female) => female.gender === 'female' ? counter += 1 : counter, 0);

// var femaleCount = customers.reduce(function (counter, female) {
//   if (female.gender === 'female') {
//     counter += 1; //if female gender is female, increase the counter by 1.
//   }
//     return counter; //return the numeric output
// }, 0); //seed starts at zero
   

var femaleCount = array => _.reduce(array, (counter, customer) => {
  if(customer.gender === 'female') { //vet if customer gender strictly equals the string female
    counter++; //add 1 to the counter
  }
  return counter; //return counter outside of the if statement
}, 0); //seed starts a numeric value zero


/**
 * ### 3: `oldestCustomer`
 - **Objective**: Find the oldest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
 */

//assign oldestCustomer to the customers array.  Use reduce with the oldest and customer params 
//in function.  return oldest.age or 0 for the first comparison.  continue iterating and removing 
// items as the comparison is less than the stored value
// return the oldest name value in the key value pair

// var oldestCustomer = customers.reduce(function (oldest, customer) {
//   return (oldest.age || 0) > customer.age ? oldest.name : customer.name;
// }, {});

// var oldestCustomer = function(array){
//   return _.reduce(customers, function (oldest, customer) {
//   return (oldest.age || 0) > customer.age ? oldest.name : customer.name;
// }, {});
// };

/**
 * ### 3: `oldestCustomer`
 - **Objective**: Find the oldest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
 */


var oldestCustomer = function(array) { //create oldestCustomer function.  Input is array
  let oldPeople = _.reduce(array, function(previousValue, value, index){ //assign oldPeople to reduce function, previousValue = accumulator
    if (value.age > previousValue.age){ //use the age key hold/compare the current, age value against the previousValue age
      return value; //return the numeric value if greater than previousValue
    } else {
      return previousValue; //return the previousValue if less than value.age
    }
  });
  return oldPeople.name;
};


/**
 * ### 4: `youngestCustomer`
 - **Objective**: Find the youngest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
 */
 


var youngestCustomer = function(array) { //create youngestCustomer function.  Input is array
  let youngPeople = _.reduce(array, function(previousValue, value, index) { //assign youngPeople to reduce function, previousValue = accumulator
    if (value.age < previousValue.age) { //use the age key hold/compare the current, age value against the previousValue age
      return value; //return the numeric value if less than previousValue
    } else {
      return previousValue; //return the previousValue if larger than value.age
    }
  });
  return youngPeople.name; //return the oldest customer's name
};


/**
### 5: `averageBalance`
 - **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**:
*/

var averageBalance = function(array){ //create averageBalance function with array as parameter
return _.reduce(array, function(sum, customerObj){//return statement required for reduce function.  sum is the accumulator
    var balance = Number(customerObj.balance.replace(/[^0-9\.]+/g,""));//create a balance variable to store constructor function Number. using regex to replace new values
    sum += balance; //use accumulator sum to increase the balance
    return sum; //return sum
}, 0)/array.length; //divide the reduce function by array.length to get average balance
};




/**
 * ### 6: `firstLetterCount`
 - **Objective**: Find how many customer's names begin with a given letter
 - **Input**: `Array`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
 */


var firstLetterCount = function(array, letter){ //create firstLetterCount variable
  let firstLetter = _.filter(array, function(element){ //assign firstLetterCount to filter function
    return element.name[0].toLowerCase() === letter.toLowerCase(); //return the array element name, index zero of the string
  });//use the toLowerCase method with strict equality to make the comparison
  return firstLetter.length; //return the count of customers with the desired first letter of the names with the .length
};

/**
 * ### 7: `friendFirstLetterCount`
 - **Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
 */


var friendFirstLetterCount = function(array, customer, letter){
  var counter = 0;  //set counter at 0, 
  _.each(array, function(element, index, array){ //create each function to iterate over customer array
    //iterate through array of customers
      if(customer === element.name) { //if statement to vet if customer parameter is strictly equal to the element.name; customer name
        _.filter(element.friends, function(value, key, object) { //use the filter function to vet the object values against zero index of each name string
          if(value.name[0].toLowerCase() === letter.toLowerCase()){ //strictly compare them with the toLowerCase method
            counter += 1; //increase the counter by 1, if located
          }
        });
      }
  });
  return counter; //return counter
};


/**
 * ### 8: `friendsCount`
 - **Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array`, `Name`
 - **Output**: `Array`, 'Name'
 - **Constraints**:
 */


var friendsCount = function(array, name) {
  //iterate through the list and find the people who are friends with said person
  //use reduce with an empty array as the seed.  The empty array/seed holds the friends names
  //must have return statement in front of the _.reduce or it will not pass tests.
  return _.reduce(array, function(peopleArr, currCustomer){
    const friendsArr = currCustomer.friends;
      //each iterates over the array
      //each function needs to iterate over the element; not element, index, and array traditionally use
      //each(array, function(element, index, array){}); || each(array, function(e, i, a){});
      _.each(friendsArr, function(friendObj){
        //if the friendObj name property matches the given name, push currCustomer name into peopleArr
          if(friendObj.name === name) {
            peopleArr.push(currCustomer.name);
          }
        
      }); //return the peopleArr for the next iteration containing people friends with person
      return peopleArr; //return accumulator value; 
    
  }, []);
  
};

/**
 * ### 9: `topThreeTags`
 - **Objective**: Find the three most common tags among all customers' associated tags
 - **Input**: `Array`, 'Name' - name of a specific friend
 - **Output**: `Array`, 'Name'
 - **Constraints**:
 */

var topThreeTags = function(array) {
  let tagArray = []; //create empty array to store tags
  //loop through the input array
  for(let i = 0; i < array.length; i++) {
    //concatenate the tags array from each object in the input array and assign the result to the tagArray variable
    tagArray = tagArray.concat(array[i].tags);
  }
  //let tagArray = _.pluck(array, 'tags');
  //use pluck method to iterate over all customers in data file, returning an array of arrays; 
  //each sub-array contains and individual
  //use reduce function to pass the master tagArray and a function that accepts tagObj initialized to the object holding the property for each tag 
  //and a key with the number of times the tag was detected  
  let tagCount = _.reduce(tagArray, function(tagObj, tag){ //tagObj is the accumulator, the tag is the element in the array
    //if the tag key exists on the tagObj, increase the counter by 1
    if (tagObj[tag]) {
      tagObj[tag]++;
    } else { //if the tag does not exist, assign 1 as the starting tag value
      tagObj[tag] = 1;
    } 
    return tagObj; //return tagObj;
  }, {}); //use empty object as seed
  //create a new variable called countsArray and assign it to an empty array;
  let countsArray = [];
  //loop through the tagCount object
  for(let key in tagCount) {
    //push each property key:value pair to an array as subarrays
    countsArray.push([key, tagCount[key]]);
  }
  // sort the sub arrays by the tag count in descending order
  countsArray.sort(function(a, b){
    //the sort function will sort in descending order if you use b-a;
  return b[1] - a[1];
  });
  //use the slice method to move the first three results to a new array
  let topThreeArray = countsArray.slice(0,3);
  //use the map function to return only index zero.
  let topThreeWords = _.map(topThreeArray, function(arr){
    return arr[0];
  });
  //return the topThreeWords
  return topThreeWords;
};

/**
### 10: `genderCount`
 - **Objective**: Create a summary of genders, the output should be:
```javascript
{
    male: 3,
    female: 4,
    non-binary: 1
}
*/
  // use a seed if your output datatype does not match the first value in your seed array.
var genderCount = function(array) {
  // I: customer's array
  // O: an object who's keys are genders and vlaues are the count
  // C: must use reduce
  // use reduce to accumulate gender values
  // will pass with or without the return
  // seeds are only used once. it is where the accumulator starts
  // accumulator is genderObj
  // this passes with return and without return _.reduce(array, function(genderObj, currentCustomer)
  // _.reduce(array, function(genderObj, currentCustomer){
  return _.reduce(array, function(genderObj, currentCustomer){
    //console.log(genderObj);
    
   // if the gender does not exist on our gender object, create a key of the gender 
   // with a value of one
   // if the gender does exist on the object, increment the count
   // return the genderObj for the next iteration
    const gender = currentCustomer.gender;
    if (!genderObj[gender]) {
      genderObj[gender] = 1;
    } else { //if the gender does exist on the object, increment the count
      genderObj[gender]++;
    }
    //return the genderObj for the next iteration
    return genderObj;
  }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
