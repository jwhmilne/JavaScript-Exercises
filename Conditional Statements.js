/* CONDITIONAL STATEMENTS */

/*
Warm-up
    1. Create a variable called points that starts at 40
    2. Create an if statement that checks if points are greater than 20
    3. If points are greater than 20, subtract 10 from points
    4. Log out the points at the end of the program (this should always log)
    5. Change points to start at 15 and run the program again
*/

let fortyPoints = 40;

if (fortyPoints > 20) {
    fortyPoints -= 10
};

console.log(fortyPoints); // 30

//

let fifteenPoints = 15;

if (fifteenPoints > 20) {
    fifteenPoints -= 10
};

console.log(fifteenPoints); // 15


/*
Problem Set 1
    1. At the start of the program, print out: "--- Animal Checker Program ---"
    2. Create a variable called animal that starts at the value "cat"
    3. Create an if statement that checks if animal is equal to "cat"
    4. If it is equal to "cat", print out "Meow!" to the screen
    5. If it is equal to "dog", print out "Woof!" to the screen
    6. If it is neither "cat" nor "dog", print out "Must be an alien"
    7. At the end of the program, print out: "--- Animal check complete ---"
    8. Change animal to different values to make sure it works in all cases
*/

console.log("--- Animal Checker Program ---");

let animal = "cat"; // test with "dog" and "alien"

if (animal === "cat") {
    console.log("Meow!")
} else if (animal === "dog") {
    console.log("Woof!")
} else {
    console.log("Must be an alien")
};

console.log("--- Animal check complete---");


/*
Problem Set 2
    Create a program that starts with a number variable.
    The program will print out whether the variable is even or odd to the screen when run.

    Change the variable to test it works in both cases.

    HINT: modules operator ( % ) is your friend
*/

console.log("--- EVEN or ODD ---")

let number = 128;

if (number % 2 === 0) {
    console.log(number + " is an even number");
} else {
    console.log(number + " is an odd number")
}


/*
Problem Set 3
    Spot the bug 🐛
    Should print:
    "Most places consider you an adult."
    but it doesn't. Why?
*/

console.log("---errorAge---");

const errorAge = 20;

if (errorAge < 3) {
    console.log("You're just a baby!");
} else if (errorAge >= 3) {
    console.log("You are in elementary school, kid."); // This runs.
} else if (errorAge >=13) {
    console.log("Nice, you're a teenager!");
} else if (errorAge >= 18) {
    console.log("Most places consider you an adult.");
} else {
    console.log("What? How did this happen!?");
}

console.log("---correctAge---");

const age = 20;

if (age < 3) {
    console.log("You're just a baby!");
} else if (age < 14) {
    console.log("You are in elementary school, kid.");
} else if (age < 18) {
    console.log("Nice, you're a teenager!");
} else if (age > 17) {
    console.log("Most places consider you an adult."); // This runs
} else {
    console.log("What? How did this happen!?");
}