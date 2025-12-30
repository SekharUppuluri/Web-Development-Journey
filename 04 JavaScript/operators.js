// ====== Operators in JavaScript ======
// Operators are special symbols or keywords that perform operations on operands (values or variables). JavaScript supports various types of operators, including:
/*
    1. Arithmetic Operators: Used for mathematical calculations.
    2. Assignment Operators: Used to assign values to variables.
    3. Comparison Operators: Used to compare two values.
    4. Logical Operators: Used to combine multiple conditions.
    5. Bitwise Operators: Used to perform operations on binary numbers.
    6. Conditional (Ternary) Operator: A shorthand for if...else statements.
    7. Nullish Coalescing Operator: Used to provide a default value when dealing with null or undefined.

*/

// 1. Arithmetic Operators
console.log("1. Arithmetic Operators");
let a = 5;
let b = 10;
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;
let power = a ** b;

console.log(
    `Result Of Operations : 
        Addition : ${addition}
        Subtraction : ${subtraction}
        Multiplication : ${multiplication}
        Division : ${division}
        Modulus : ${modulus}
        Power : ${power}
`
);

// 2. Assignment Operators
console.log("2. Assignment Operators");
let c = 20;
let plusEqual = c += 5 ;
let minusEqual = c -= 5 ;
let multiplyEqual = c *= 3 ;
let divideEqual = c /= 2 ;
let modulusEqual = c %= 4 ;
let powerEqual = c **= 2 ;

let assignResult = `
    Assignment Operations :
    c += 5 : ${plusEqual}
    c -= 5 : ${minusEqual}
    c *= 3 : ${multiplyEqual}
    c /= 2 : ${divideEqual}
    c %= 4 : ${modulusEqual}
    c **= 2 : ${powerEqual}
`;  
console.log(assignResult);


