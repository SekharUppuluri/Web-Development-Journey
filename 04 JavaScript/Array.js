// Arrays in JavaScript
// An array is a special type of object used to store ordered collections of values. Each value in an array has a numeric index, starting from 0.

// Creating an array
let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("Fruits Array:", fruits);

// or creating an array using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers Array:", numbers);

// Accessing array elements
let firstFruit = fruits[0];
console.log("First Fruit:", firstFruit);

// Modifying array elements
console.log(fruits[1]);
fruits[1] = "Blueberry";
console.log("Modified Fruits Array:", fruits);

// ----- Array properties and methods -----
// Length property
let numberOfFruits = fruits.length;
console.log("Number of Fruits:", numberOfFruits);

// push() method - adds an element to the end of the array
let pushedFruit = fruits.push("Elderberry");
console.log("After push:", fruits);
console.log("New length after push:", pushedFruit);

// pop() method - removes the last element from the array
let lastFruit = fruits.pop();
console.log("After pop:", fruits);
console.log("Popped Fruit:", lastFruit);

// shift() method - removes the first element from the array
let firstFruitRemoved = fruits.shift();
console.log("After shift: ", fruits);
console.log("Shifted fruit: ", firstFruitRemoved);

// unshift() method - adds an element to the beginning of the array
let newFirstFruit = fruits.unshift("A");
console.log("After unshift: ", fruits);
console.log("New length after unshift: ", newFirstFruit);

// indexOf() method - finds the index of an element in the array
let indexOfFruit = fruits.indexOf("Cherry");
console.log("Index of Cherry:", indexOfFruit);

// slice() method - creates a new array from a portion of the original array
let citrusFruits = fruits.slice(1, 3);
console.log("Sliced Fruits (1 to 3):", citrusFruits);

// splice() method - adds/removes elements from the array
let removedFruits = fruits.splice(2, 1, "Coconut", "Dragonfruit");
console.log("After splice:", fruits);
console.log("Removed Fruits:", removedFruits);

// forEach() method - executes a function for each array element
console.log("Fruits using forEach:");
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// map() method - creates a new array by applying a function to each element
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log("Uppercase Fruits:", upperCaseFruits);

// filter() method - creates a new array with elements that pass a test
let longNamedFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});
console.log("Fruits with long names:", longNamedFruits);

// reduce() method - reduces the array to a single value
let totalLength = fruits.reduce(function(total, fruit) {
    return total + fruit.length;
}, 0);
console.log("Total length of all fruit names:", totalLength);

// Arrays are versatile and powerful, making them essential for managing collections of data in JavaScript.

