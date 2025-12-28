// Variables in JavaScript

// variables are containers for storing data values  or references to data values or named storage AND They are case-sensitive!

/* 
 ---> To declare a variable in JavaScript, we use the keywords:
    let,var,const :
    1. let - block scope 
    2. var - function scope or global scope [if declared outside a function] (old way)
    3. const - block scope, cannot be reassigned 
*/

let admin = "Eren";
let name = admin;
//let name = "Mikasa"; // redeclaration is not allowed with let
console.log(`Admin: ${admin}`);
console.log(`Name: ${name}`);


var city = "Seoul";
var city = "Tokyo"; // redeclaration is allowed with var
console.log(`City: ${city}`);

// Using const to declare constants
/* 
 ---> capital const vs normal const :
   -> Capital const is used for values that are meant to be constant and unchanging throughout the program, often referred to as "magic numbers" or fixed values.
   -> Normal const is used for values that are intended to remain constant after their initial assignment but may vary between different executions of the program or different contexts.
*/

const pi = 3.14;
// pi = 3.14159; // Error: Assignment to constant variable
console.log(`Value of Pi: ${pi}`);
const BIRTHDAY = "01.01.2000";
console.log(`Birthday: ${BIRTHDAY}`);


// Variable Naming Rules:
/*
1. Variable names can contain letters, digits, underscores, and dollar signs.
2. Variable names must begin with a letter, underscore (_), or dollar sign ($).
3. Variable names are case-sensitive (e.g., myVar and myvar are different variables).
4. Variable names cannot be JavaScript reserved keywords (like let, const, var, function, etc.).
*/
let $dollar = 100;
let _underscore = "Hello";
let camelCaseVariable = "I am in camel case";
console.log($dollar);
console.log(_underscore);
console.log(camelCaseVariable);

let 1stPlace = "Alice"; // Invalid - starts with a digit
let my-variable = "Bob"; // Invalid - contains a hyphen
let function = "Charlie"; // Invalid - reserved keyword
