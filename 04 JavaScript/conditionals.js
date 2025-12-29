// Conditional Statements
// conditional statements are used to perform different actions based on different conditions.
/*

    1. if statement: It executes a block of code if a specified condition is true.
    2. if...else statement: It executes one block of code if a specified condition is true, and another block if it is false.
    3. else if statement: It specifies a new condition to test if the first condition is false.
    4. switch statement: It is used to perform different actions based on different conditions. It is often used as an alternative to multiple if...else if statements when you have many conditions to check against a single variable.
    5. Ternary operator: It is a shorthand for the if...else statement and is used to assign a value based on a condition in a single line.

*/

// 1. if statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult");
}

// 2. if...else statement
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// 3. else if statement
if (age >= 18) {
    console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}

// 4. switch statement
let day = 3;
switch(day) {
    case 1 : 
            console.log("Monday");
            break;
    case 2 :
            console.log("Tuesday");
            break;
    case 3 :
            console.log("Wednesday");
            break;
    case 4 :
            console.log("Thursday");
            break;
    case 5 :
            console.log("Friday");
            break;
    case 6 :
            console.log("Saturday")
            break;
    case 7 :
            console.log("Sunday");
            break;
    default :
            console.log("Invalid day");
}

// 5. Ternary operator
let canVote = (age >= 18) ? "You can Vote " : "you cannot Vote";
console.log(canVote)

let login = prompt("Enter Your Login"," ")
let message = (login == 'Employee') ? "Hello" :
              (login == 'Director') ? "Greetings" :
              (login == '') ? "No login" :
              "invalid login";
alert(message);




