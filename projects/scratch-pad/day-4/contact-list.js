// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. 
 *         The printAllContactNames() Function should return a String formated with all 
 *         the full-names of the separated with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {//4a: create factory function makeContact with parameters(id, nameFirst, nameLast)
    return { //return contact object
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    };
}

function makeContactList(id, nameFirst, nameLast) {//4.b create factory function called makeContactList that retirns an Object that manages contacts
    let contacts = []; //create array container for contact list
    return {        //return object with id, nameFirst, and nameLast object
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
        // we implemented the length api for you //
        length: function() {        //length api created
          return contacts.length;   //return contact.length, the total number of contacts
        },
        addContact: function(contact){ //create addContact function
          return contacts.push(contact);    //return statement pushes new contact to the end of the contacts array
        },
        findContact: function(fullName) {   //create findContact function
          for(var i = 0; i < contacts.length; i++) { //for loop designed to search array for fullName
              if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) { //if statement combines nameFirst and nameLast with a concatenated space via fullName.
                return contacts[i];         //return contacts with iteration located
              }
          }
        },
        removeContact: function(contact){   //create removeContact function
          for(var i = 0; i < contacts.length; i++){     //for loop to search contacts
             if(contacts[i] === contact) {              //if contact located
              return contacts.splice(i, 1);             //remove contact from contacts array with splice method
             }
          }
        },
        printAllContactNames: function() {    //create printAllContactNames function
          let str = ""; //create a string to hold the contact list
          for(var i = 0; i < contacts.length; i++) {    //for loop to discover all contacts
                str += (contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"] + "\n");  //assigns newArray to nameFirst and nameLast with a concatenated space via fullName

                //return str;
                //return mynewArray.join("\n");
                //myContacts.printAllContactNames(); // => Max Gaudin

                //return ((myContacts[i])U+000A);
                //return myContacts[i].split("\n").join("<br/>"); //return myContacts with str.split("\n").join("<br/>")

            } return str.slice(0, str.length - 1);
        }
    };
}



// function makeContact(id, nameFirst, nameLast) {
//     return {  
//         id: id,                 //create id
//         nameFirst: nameFirst,   //use the name(First/Last) parameters as values
//         nameLast: nameLast      //cannot use alternates like firstName/lastName as keys, will not pass
//     }; 
// } 

// function makeContactList(id, nameFirst, nameLast) {
//     /*
//      * You need something here to hold contacts. See length api for a hint:
//      */
//     var contacts = [];  //create array to hold the contact list
//     return {
//         id: id,
//         nameFirst: nameFirst,
//         nameLast: nameLast,
//         // we implemented the length api for you //
//         length: function() {            //length api create
//             return contacts.length;     //return contact.length, the total number of contacts
//         },
//         addContact: function(contact) {     //create addContact function
//             return contacts.push(contact);  //return statement pushes new contact to end of the contacts array
//         },
//         findContact: function(fullName) {   //create findContact function
//             for(var i = 0; i < contacts.length; i++); {     //for loop designed to search array for fullName 
//                 if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) {  //if statement combines nameFirst and nameLast with a concatenated space via fullName.
//                     return contacts[i];     //return contacts array with iteration located
//                 }
//             }
//         },
//         removeContact: function(contact) {              //create removeContact function
//             for (var i = 0; i < contacts.length; i++) { //for loop to search contacts
//                 if(contacts[i] === contact) {           //if contact located
//                     return contacts.splice(i, 1);        //remove contact from contacts array with splice
//                 }
//             }
//         },
//         printAllContactNames: function() {              //create printAllContactName function
//             let str = '';                               //create a string to hold the contact list
//             for(var i = 0; i < contacts.length; i++) {  //for loop to discover all contacts
//                 //assigns and adds str to nameFirst and nameLast with a concatenated space via fullName
//                 str += (contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"] + "\n");
//             } return str.slice(0, str.length - 1);
//         }
//     };
// }
// makeContactList(1, 'Max', 'Gaudin');
// makeContactList(2, 'John', 'Fraboni');
// makeContactList(3, 'Your', 'Mom');
// console.log(makeContactList());




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}