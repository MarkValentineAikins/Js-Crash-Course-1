// Declare a variable

var firstName = "Mark";
let lastName = "Valentine Aikins";
const fullName = firstName + " " + lastName; //concatenation 
const myself = `My name is ${firstName} ${lastName}.`; //string interpolation
// console.log(fullName);
console.log(myself);

// declaring number 
let age = 27;

// Boolean declaration
let isMarried = true;

// Array declarartion
let children =["Mark", "Kofi", "Mensah"];

// obejct declaration 
let favouriteColour = {Mark:"Seablue", John:"Red", Kofi:"Green"};

// STRINGS    

let sentence = "This is a story about Mark Cobby in Pre-MEST program";

// methdos in Javascript

console.log(sentence.length); //Check the length of characters in the above sentence 
console.log(sentence.split(" ")); // split sentence using space 
let email = "example@email.com";
console.log(email.split('@'));
console.log(sentence.replace("Mark", "Esi")); //replaces last work with the first word
console.log(sentence.toLowerCase()); //changes sentence to lower cases
console.log(sentence.toLocaleUpperCase()); // change sentence to uppercase
console.log(sentence.startsWith("T")); //boolean arguments
console.log(sentence.endsWith("R")); //boolean arguments
console.log(sentence.includes("in")); // boolean argument to check whether the word in argument is found in the pre-existing words

// ARRAYS 

let days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(days.length);
console.log(days.indexOf("Thursday")); //check the index of an element in the array
//days =days.push("Friday Night"); //return the number of element in array
console.log(days);
days.push("Monday Afternnon"); //return the element in the array including the added element
console.log(days);
console.log(days.pop()); //return an element from the back
days.unshift("Friday"); // add the element to the beginning of the list
console.log(days);
days.shift("Tuesday"); // takeout the first element in the arrays
console.log(days);
console.log(days[4]); // return the element which has the index in the argument 
days[0] = "Tuesday"; // return the assignment element to the index quoted.
console.log(days);

// OBJECTS 

let person = {firstName: "Kofi", middleName:"Johnson", lastName:"Aikins", Age:26};
console.log(person.middleName);
console.log(person["Age"]);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(Object.length(person));








