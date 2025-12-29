//  ===== Loops in JavaScript =====
// Loops are used to execute a block of code repeatedly as long as a specified condition is true. JavaScript supports several types of loops:

/*
     1. for Loop: The for loop is used when you know how many times you want to execute a statement or a block of code.
     2. while Loop: The while loop is used when you want to execute a block of code as long as a specified condition is true.
     3. do...while Loop: The do...while loop is similar to the while loop, but it executes the block of code once before checking the condition.
     4. break and continue Statements:
         - break: Exits the loop entirely.
         - continue: Skips the current iteration and continues with the next iteration of the loop.
     5. labelled Statements: Labels can be used with break and continue to control the flow of nested loops.
*/

// 1. for Loop
for (let i = 0 ; i < 5 ; i++) {
    alert(`For Loop iteration: ${i}`);
}


// 2. while Loop
let j = 0;
while (j < 5) {
    alert(`While loop iteration: ${j}`);
    j++;
}


// 3. do...while Loop
let k = 0;
do {
    alert(`Do...While loop iteration: ${k}`);
    k++;
} while (k < 5);


// 4. break and continue Statements
for (let m = 0; m < 10; m++) {
    if (m === 5) {
        break; // Exit the loop when m is 5
    }
    alert(`Break Statement Loop iteration: ${m}`);
}
for (let n = 0; n < 10; n++) {
    if (n % 2 === 0) {
        continue; // Skip even numbers
    }
    alert(`Continue Statement Loop iteration: ${n}`);
}


// 5. labelled Statements
outerLoop: for (let p = 0; p < 3; p++) {
    for (let q = 0; q < 3; q++) {
        if (p === 1 && q === 1) {
            break outerLoop; // Exit the outer loop
        }
        alert(`Labelled Statement Loop iteration: p=${p}, q=${q}`);
    }
}   
