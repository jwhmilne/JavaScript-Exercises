/* VARIABLES AND PRIMITIVE TYPES

Warm-up
    1. Create a constant variable of each of the following primitive types:
    - String
    - Number
    - Boolean
    - Null
    - Undefined

    Use console.log to log out each variable to the terminal at the end

    HINT1: You can run your file in the terminal using this command: node <file_name>
            For example, if your file is called ps1.js, you would type: node ps1.js

    HINT2: Make sure your terminal is "looking at" the correct folder where your code is.
*/

const colour = "Blue";
const age = "22";
const on = true;
const emptyThing = null;
const anotherEmptyThing = undefined;

console.log(colour); // Blue
console.log(age); // 22
console.log(on); // true
console.log(emptyThing); // null
console.log(anotherEmptyThing); // undefined


/*
Problem Set 1
    1. Create a variable called name that points at a string containing your name
    2. On the next line, re-assign the variable above to your favourite musician's name
    3. On the next line, re-assign the variable again to the value: true
    
    After each of the above steps, log out the variable to the terminal with console.log()
*/

let name = "Joe";
console.log(name); // Joe

name = "Justin Vernon";
console.log(name); // Justin Vernon

name = true;
console.log(name); // true

name = 42;
console.log(name); // 42


/*
Problem Set 2
    1. Declare a variable using let with any name you like but without a value
    2. On a separate line, assign the variable the String: "Moo!"
    3. Log out this variable to the terminal using console.log()

    Repeat the above steps but try using a const variable. What happens?
*/

let myVariable; // the let variable can be created before assignment
myVariable = "Moo!"
console.log(myVariable); // Moo!

// const jacket; // Once declared, it's frozen; needs a value assignment here.
// jacket = "Denim";
// console.log(jacket); // SyntaxError: Missing initializer in const declaration

// const jacket = "Denim"; // This works!
// console.log(jacket); // Denim


/*
Problem Set 3
    Use Google/search to look up the "typeof" operator in JavaScript.

    Use typeof to log out the types for each of the 5 primitive types to the terminal using console.log()

    *HINT* - MDN Web Docs are a good resource
*/

console.log(typeof 42); // number
console.log(typeof "Hi!"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); //undefined