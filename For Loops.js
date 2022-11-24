/*
FOR LOOPS
*/


/*
Warm-up
    Create a for loop that prints out the numbers from 5 to 10 (inclusive)
*/

for (let num = 5; num <= 10; num += 1) {
    console.log(num);
}


/*
Problem Set 1
    Create a for loop that will print out all the even numbers between 10 and 40.

    Do the same for all odd numbers as well.
*/

for (let i = 10; i <= 40; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (let i = 10; i <= 40; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}


/*
Problem Set 2
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a for loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials".
    4. After 3 loop iterations, change "loggedIn" to be true.
    5. After the loops are done, print out: "Successfully logged in!"

    HINT1: This is more challenging with a for loop!
    HINT2: This is not an ideal candidate for a for loop!
    HINT3: You don't have to provide all parts of the for loop construct
*/

for (let loggedIn = false, i = 0; !loggedIn; i++) {
    console.log("Incorrect login credentials");

    if (i == 2) {
        loggedIn = true;
    }
}

console.log("Successfully logged in!");


/*
Problem Set 3
    1. Create a for loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50, print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All done!

    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All done!
*/


for (let i = 1; i <= 100; i++) {

    if (i == 50) {
        console.log("Half way there!")
        continue;
    }

    if (i == 100) {
        console.log ("You made it!");
        continue;
    }

    if (i % 10 == 0) {
        console.log(`Checkpoint ${i}`);
    }
}

console.log("All done!");