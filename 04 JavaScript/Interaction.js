// ======  Interaction in JavaScript ======
// JavaScript provides several methods to interact with users through dialog boxes. The most commonly used methods are alert(), prompt(), and confirm().

/* 
        1. alert() method: Displays a message to the user.
        2. prompt() method: Displays a dialog box that prompts the user for input. It takes two arguments: the message to display and an optional default value.
        3. confirm() method: Displays a dialog box with a message and OK and Cancel buttons. It returns true if the user clicks OK and false if the user clicks Cancel.
*/

// 1. alert() method
alert("Welcome to JavaScript Interaction!");

// 2. prompt() method
let userName = prompt("Please enter your name:", "Guest");
alert("Hello, " + userName + "!");

// 3. confirm() method
let isConfirmed = confirm("Do you want to proceed?");
if (isConfirmed) {
    alert("You chose to proceed.");
} else {
    alert("You chose to cancel.");
}

// 4. Combining Interaction Methods
let age = prompt("Please enter your age:", "18");
if (age !== null) {
    age = parseInt(age);
    if (!isNaN(age)) {
        let canDrive = (age >= 18) ? "You are eligible to drive." : "You are not eligible to drive.";
        alert(canDrive);
    } else {
        alert("Please enter a valid number for age.");
    }
} else {
    alert("Input cancelled.");
}

// 5. Console Interaction
// In addition to dialog boxes, we can also interact with users through the browser console.
console.log("This message is logged to the console.");
let favoriteColor = prompt("What is your favorite color?", "Blue");
console.log("User's favorite color is: " + favoriteColor);
alert("Thank you for interacting!");

// Note: The prompt() and confirm() methods may not work in some modern browsers due to security restrictions. They are primarily used for simple demonstrations and should be avoided in production code.