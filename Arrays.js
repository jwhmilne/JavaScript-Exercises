/* ARRAYS */

/*
Warm-up
    1. Create an array with the following strings:
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"
    2. Add the string "Jupiter" to the END of the array
    3. Add the string "Sun" to the START of the array
    4. Remove the last two strings from the array
    5. Remove the first two strings from the array

    *Print out the array after each of these steps ^
*/

console.log("1. Start");
const planets = ["Mercury", "Venus", "Earth", "Mars"];
console.log(planets);
// [ 'Mercury', 'Venus', 'Earth', 'Mars' ]

console.log("2. Add Jupiter end"); 
planets.push("Jupiter");
console.log(planets);
// [ 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter' ]

console.log("3. Add Sun start");
planets.unshift("Sun");
console.log(planets);
// [ 'Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter' ]

console.log("4. Remove last 2");
planets.splice(4, 5);
console.log(planets);
// [ 'Sun', 'Mercury', 'Venus', 'Earth' ]

console.log("5. Remove first 2");
planets.splice(0,2);
console.log(planets);
// [ 'Venus', 'Earth' ]



/*
Problem Set 1
    1. Create a variable called "multiple" and initialize it to 5
    2. Create an array with the numbers 10-15 (inclusive)
    3. Loop through the array and on each iteration:
        - Multiply the number by the multiple and print out the result
        - As you're printing, use this format (example):
            10 x 5 = 50
            11 x 5 = 55
            ...
            15 x 5 = 75

    BONUS: Try to see if you can make it so that all you need to change
    is the "multiple" variable and the program still works correctly.
*/

const multiple = 5;
const numbers = [10,11,12,13,14,15];

for (let i = 0; i < numbers.length; i++) {
    const result = multiple * numbers[i];
    console.log(`${numbers[i]} x ${multiple} = ${result}`);
};
// 10 x 5 = 50
// 11 x 5 = 55
// 12 x 5 = 60
// 13 x 5 = 65
// 14 x 5 = 70
// 15 x 5 = 75


/*
Problem Set 2
    1. Create a variable called "greeting" and initialize it to:
        "Hello, nice to meet you!"
    
    2. Use a loop to loop through this String (just like you would an array)
        - On each loop iteration, print out what is at that index

    WHY does this happen?
    WHAT is a String, really?
*/

const greeting = "Hello, nice to meet you!";

for (let i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}

// H
// e
// l
// l
// o
// ,
 
// n
// i
// c
// e
 
// t
// o
 
// m
// e
// e
// t
 
// y
// o
// u
// !



/*
Problem Set 3
    1. Create a variable called "total" that starts at 0

    2. Create an array called "grades" with the following values:
        - 55
        - 63
        - 82
        - 98
        - 91
        - 43

    Figure out how to print out the AVERAGE grade
    (This is the sum of all grades divided by the number of grades)
*/

var total = 0;
const grades = [55, 63, 82, 98, 91, 43];

for (let i = 0; i < grades.length; i++) {
    (total += grades[i]) / grades.length
}

console.log(total / grades.length);
// 72



/*
Bonus Exercise
    1. Create a variable called "bakery" that points to an array
    2. Fill the array with the following String:
        - "Cake"
        - "Cookie"
        - "Bread"
        - "Scones"

    3. Print out bakery to make sure it has these 4 Strings in it.

    4. Create another variable called "myBakery" and assign it
    to "bakery" that we declared previously.

    5. Add the following items to "myBakery";
        - "Croissant"
        - "Granola"

    Print out myBakery and bakery and observe the contents.

    WHY is this?
*/

const bakery = ["Cake", "Cookie", "Bread", "Scones"]
console.log(bakery);

const myBakery = bakery;

myBakery.push("Croissant", "Granola");
console.log(myBakery);
console.log(bakery);

// They are the same because they point to the same memory set.
// Duplicates aren't made because for efficiency purposes.