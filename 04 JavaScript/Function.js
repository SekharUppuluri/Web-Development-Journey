// ======= Functions in JavaScript =======
// Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return an output (return value). Functions help in organizing code, improving readability, and reducing redundancy.
/* 
    1. Function Declaration: A function can be declared using the function keyword followed by the function name and parentheses ().
    2. Function Expression: A function can also be defined as an expression and assigned to a variable.
    3. Arrow Functions: Introduced in ES6, arrow functions provide a shorter syntax for writing functions.
    4. Parameters and Arguments: Functions can accept parameters, which are placeholders for values that are passed to the function when it is called.
    5. Return Statement: Functions can return a value using the return statement.
    6. Default Parameters: Functions can have default values for parameters if no argument is provided during the function call.
    7. Rest Parameters: Functions can use rest parameters to accept an indefinite number of arguments as an array.

*/

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
alert(greet("Alice"));

// 2. Function Expression
const square = function(x) {
    return x * x;
}
alert(square(5));

// 3. Arrow Functions
const add = (a, b) => a + b;
alert(add(3, 4));

// 4. Parameters and Arguments
function multiply(x, y) {
    return x * y;
}
alert(multiply(6, 7));

// 5. Return Statement
function isEven(num) {
    return num % 2 === 0;
}
alert(isEven(10));


// 6. Default Parameters
function greetUser(name = "Guest") {
    return `Welcome, ${name}!`;
}
alert(greetUser());


// 7. Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
alert(sumAll(1, 2, 3, 4, 5));


// callback function example
function fetchData(callback) {
    // Simulating data fetching
    let data = "Sample Data";
    callback(data);
}
fetchData(function(data) {
    alert(`Data received: ${data}`);
});


// IIFE (Immediately Invoked Function Expression) example
(function() {
    alert("This is an IIFE!");
})();

