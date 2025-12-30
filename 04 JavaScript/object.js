// ======= Objects in JavaScript =======
// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any data type. They are used to store and organize data in a structured way.
// Objects are real-world entities that have properties (attributes) and behaviors (methods).

// Creating an Object
let person = {
    name : "Eren",
    age : 20 ,
    isStudent : true,
    dayScholar : function() {
        return this.name + ` is a day scholar`;
    }
};

// Accessing Object Properties
alert(person.name); 
console.log(person.name);
console.log(person['age']);

//calling object method
alert(person.dayScholar());

// Adding New Properties
person.course = "Computer Science";
alert(person.course);

// Modifying Existing Properties
person.age = 21;
alert(person.age);

// Deleting Properties
delete person.isStudent;
alert(person.isStudent) //undefined

// Iterating Over Object Properties
for(let key in person) {
    alert(`${key} : ${person[key]}`);
    console.log(` ${key} : ${person[key]}`);
}

// Nested Objects
let student = {
    name: "Mikasa",
    details: {
        age: 19,
        major: "Engineering"
    }
};
alert(student.details.major); // Accessing nested object property
console.log(student.details.age);

// Object Methods
student.getInfo = function() {
    return `${this.name} is ${this.details.age} years old and majors in ${this.details.major}.`;
}
alert(student.getInfo());
console.log(student.getInfo());

// Object.keys() and Object.values()
let keys = Object.keys(student);
let values = Object.values(student);
alert(`Keys: ${keys}`);
console.log(`Values: ${values}`);
console.log(`Keys: ${keys}`);
