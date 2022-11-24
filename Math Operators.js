/*MATH OPERATORS*/

/*
Warm-up
    1. Use let to create a variable that points to a String
        - Then "add" another String to this same variable and print it out
    2. Use let to create a variable that points to a Number
        - Then add another Number to this same variable and print it out
*/

let bro1 = "Joe";
bro1 = bro1 + "Jack"
console.log(bro1); // JoeJack

let num1 = 19;
num1 += 12
console.log (num1); // 31


/*
Problem Set 1
    1. Print out 5 / 2
    2. Print out 5 % 2
    3. Print out 5 ** 2

    4. Print out 6 / 2
    5. Print out 6 % 2
    6. Print out 6 ** 2
*/

console.log(5 / 2); // 2.5
console.log(5 % 2); // 1
console.log(5 ** 2); // 25

console.log(6/2); // 3
console.log (6 % 2); //0
console.log(6 ** 2); // 36


/*
Problem Set 2
    1. Create a let variable called "points" and print it out
    2. Assign "points" the number 20 and print it out
    3. Add 15 to "points" and print it out 

    Question 1: What are all the ways you can achieve step 3 above?
    Question 2: What would happen if you tried to do this with a const variable?
*/

let points;
console.log(points); // undefined

points = 20;
console.log(points); // 20

points += 15;
console.log (points); // 35

/*
    Answer 1:
        1. points = points + 15;
        2. points += 15;

    Answer 2:
        We'd get an error because you can only assign const once.
*/


/*
Problem Set 3
    Try to calculate these all yourself before coding them:

    1. What is 5 / 5?
    2. What is 5 % 5?
    3. What is 256 / 2?
    4. What is 256 % 10?

    BONUS: What are all the possible values of ANY_NUMBER % 2?
    BONUS2: What are all the possible values of ANY_NUMBER % 10?
*/

console.log(5 / 5); // 1
console.log(5 % 5); // 0
console.log(256 / 2); // 128
console.log(256 % 10); // 6

/*
ANSWER: All the possible values of ANY_NUMBER % 2 are 0 and 1.
ANSWER2: All the possible values of ANY_NUMBER % 10 are 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.
*/


/*
Problem Set: BONUS
    1. What happens when you add 2 strings together?
    2. What about when you add a number to a string?
    3. How about when you add booleans together?

    ANSWER1: When you add 2 Strings together, they concatenate.
    ANSWER2: When you add a Number to a String, "logical conversion" happens.
    ANSWER3: When you add Booleans together, true + true = 2, false + false = 0.
*/

// string concatenation
let animal = "dog"
animal += " says woof!";
console.log(animal); // dog says woof!

// logical conversion
let hello = "cat" + 10;
console.log(hello); // cat10

// true = 1; false = 0
let truebools = true + true;
console.log(truebools); // 2

let falsebools = false + false;
console.log(falsebools); // 0