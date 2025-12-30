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
    `\nArithmetic Operations : 
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

// 3. Comparison Operators
console.log("3. Comparison Operators");
let x = 15;
let y = 20;
/* Equal and Strict comparisons 
    - Equal (==) checks for value equality with type coercion.
    - Strict Equal (===) checks for both value and type equality.
    Not Equal and Strict Not Equal
    - Not Equal (!=) checks for value inequality with type coercion.
    - Strict Not Equal (!==) checks for both value and type inequality.
    Greater Than, Less Than, Greater Than or Equal To, Less Than or Equal To
    - These operators compare two values and return a boolean result.
*/
let isEqual = x == y ;
let isStrictEqual = x === y ;

let isNotEqual = x != y ;
let isStrictNotEqual = x !== y ;

let isGreater = x > y ;
let isLess = x < y ;
let isGreaterEqual = x >= y ;
let isLessEqual = x <= y ;

let comparisonResult = `
Comparison Operations :
                        x == y : ${isEqual}
                        x === y : ${isStrictEqual}
                        x != y : ${isNotEqual}
                        x !== y : ${isStrictNotEqual}
                        x > y : ${isGreater}
                        x < y : ${isLess}
                        x >= y : ${isGreaterEqual}
                        x <= y : ${isLessEqual}
`;
console.log(comparisonResult);

// 4. Logical Operators
console.log("4. Logical Operators");
let p = true;
let s = false;
let andResult = p && s ;
let orResult = p || s ;
let notResult = !p ;

let logicalResult = `
Logical Operations :
                    p && s : ${andResult}
                    p || s : ${orResult}
                    !p : ${notResult}
`;
console.log(logicalResult);

// 5. Bitwise Operators
console.log("5. Bitwise Operators");
let m = 5;  // Binary: 0101
let n = 3;  // Binary: 0011 
let andBitwise = m & n; // Bitwise AND
let orBitwise = m | n;  // Bitwise OR
let xorBitwise = m ^ n; // Bitwise XOR
let notBitwise = ~m;    // Bitwise NOT
let leftShift = m << 1; // Left Shift
let rightShift = m >> 1; // Right Shift

let bitwiseResult = `
Bitwise Operations :
                    m & n : ${andBitwise}
                    m | n : ${orBitwise}
                    m ^ n : ${xorBitwise}
                    ~m : ${notBitwise}
                    m << 1 : ${leftShift}
                    m >> 1 : ${rightShift}
`;
console.log(bitwiseResult);

// 6. Conditional (Ternary) Operator
console.log("6. Conditional (Ternary) Operator");
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(`Can a person of age ${age} vote? ${canVote}\n`);

// 7. Nullish Coalescing Operator
console.log("7. Nullish Coalescing Operator");
let userInput = null;
let defaultValue = "Default Value";
let finalValue = userInput ?? defaultValue;
console.log(`The final value is: ${finalValue}`);

