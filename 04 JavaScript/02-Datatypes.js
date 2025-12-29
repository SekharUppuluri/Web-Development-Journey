// ========== Data Types in JavaScript ==========
// JavaScript has several data types which can be categorized into two main types: Primitive and Non-Primitive (Reference) types.

// 1. Primitive Data Types:
// These are the most basic data types in JavaScript. They include:
/*
    a) Number
    b) String
    c) Boolean
    d) Undefined
    e) Null
    f) Symbol
    g) BigInt
*/  

// a) Number: Represents both integer and floating-point numbers.
let num = 42; 
console.log(typeof num);   

// we can use the `typeof` operator to check the data type of a variable.

// b) String: Represents a sequence of characters.
let greeting = "Hello, world!"; 
console.log(typeof greeting);

// c) Boolean: Represents a logical entity and can have two values: true or false.
let isJavaScriptFun = true;  
console.log(typeof isJavaScriptFun);

// d) Undefined: A variable that has been declared but not assigned a value.
let undefinedVar;
console.log(typeof undefinedVar);

// e) Null: Represents the intentional absence of any object value.
let nullVar = null;
console.log(typeof nullVar); // Note: typeof null returns "object" due to a historical bug in JavaScript.

// f) Symbol: A unique and immutable primitive value used as the key of an object property.
let sym = Symbol("unique"); 
console.log(typeof sym);

// g) BigInt: Represents integers with arbitrary precision.
let bigIntNum = 9007199254741991n;
console.log(typeof bigIntNum);

// 2. Non-Primitive (Reference) Data Types:
// These data types are more complex and can store collections of values or more complex entities. They include:
/*
    a) Object: A collection of properties, where each property is defined as a key-value pair.
    b) Array: A special type of object used to store ordered collections of values.
    c) Function: A block of code designed to perform a particular task.
    d) Date: An object that represents a single moment in time.
    e) RegExp: An object that represents a regular expression, used for pattern matching within strings.
    f) Map: A collection of keyed data items, similar to an object but with keys of any type.
    g) Set: A collection of unique values, where each value can only occur once.
*/
// a) Object:
let person = { name: "Alice", age: 30 };
console.log(typeof person);

// b) Array:
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);

// c) Function:
function add(a, b) {
  return a + b;
}
console.log(typeof add);

// d) Date:
let currentDate = new Date();
console.log(typeof currentDate);

// e) RegExp:
let pattern = /ab+c/;
console.log(typeof pattern);

// f) Map:
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(typeof map);

// g) Set:
let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate, will not be added
console.log(typeof set);

// Note: JavaScript is a dynamically typed language, meaning that variables can hold values of any data type and can change types at runtime.
