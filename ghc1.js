// Single-line comment: Used for short explanations

/*
  Multi-line comment:
  Use these comments when you need to explain a block of code or provide additional context.
*/

// 'let' declares a block-scoped variable.
let name = "Alice"; // A variable that stores a string named Alice.

// 'const' declares a constant whose value cannot be changed.
const PI = 3.14159; // A constant value for pi (of course the approximate pi value for all the correctionists ♥)

// BASIC ARITHMETIC OPERATIONS, n is a placeholder for numbers
let sum = n + n;      
let product = n * n;
let division = n / n;
let substraction = n - n;   
let percentage = n % n;
let exp = n ** n;
let increment = ++n; //pretty much adds +1 to the variable, decrement does the opposite
let decrement = --n;



// Function declaration: defines a reusable block of code that can be called with different arguments.
function greet(person) {
    // Template literals allow embedding variables in strings
    console.log(`Hello, ${person}!`); // Outputs a greeting to the console
}
greet(name); // Calls the greet function with the variable 'name'

// ARROW FUNCTIONS (ES6)
// A concise way to write functions.
const add = (a, b) => {
    return a + b; // Returns the sum of 'a' and 'b'
};
console.log(add(10, 20)); // Outputs: 30

// CONDITIONAL STATEMENTS(if, else, else if), checks if a number is positive, negative, or zero.
let number = -10;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// ARRAYS
// Arrays store multiple values in a single variable.
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Outputs the first element: "apple"

// Loop through an array using a for loop.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Outputs each fruit in the array
}

// OBJECTS
// Objects are collections of key-value pairs.
let person = {
    firstName: "John", // Object property: first name
    lastName: "Doe",   // Object property: last name
    age: 25,           // Object property: age
    // A method defined within an object.
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName()); // Outputs: "John Doe"

// Loop through object properties using a 'for...in' loop.
for (let key in person) {
    if (person.hasOwnProperty(key)) { // Ensures the property belongs directly to 'person'
        console.log(`${key}: ${person[key]}`); // Outputs each key-value pair
    }
}

// ERROR HANDLING
// Using try...catch to handle errors gracefully.
try {
    // Code that might throw an error.
    let result = someUndefinedFunction();
} catch (error) {
    console.log("An error occurred:", error.message); // Outputs the error message
}

// DOM MANIPULATION (Browser Only)
// The following code shows how to modify the content of an HTML element:
/*
let myElement = document.getElementById("myElement");
myElement.textContent = "Hello, World!";
*/

// ES6 CLASSES
// Demonstrates the use of classes to create objects with similar properties and methods.
class Animal {
    // The constructor initializes the object's properties.
    constructor(name) {
        this.name = name;
    }

    // A method to make the animal "speak".
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

let dog = new Animal("Buddy");
dog.speak(); // Outputs: "Buddy makes a sound."
