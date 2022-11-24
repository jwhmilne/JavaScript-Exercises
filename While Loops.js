/*
WHILE LOOPS
*/

/*
Warm-up
    Create a while loop that prints out the numbers from 5 - 10 (incusive)
*/

let loopNumber = 5;

while (loopNumber < 11) {
    console.log(loopNumber);
    loopNumber++;
};


/*
Problem Set 1
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    4. After 3 loop iterations, change "loggedIn" to be true.
    5. After the loop is done, print out: "Successfully loggedin!"

    HINT: Be careful for an infinite loop!
    HINT2: Use CTRL+C to get out of an infinite loop in node
*/

let loggedIn = false;
let loopCounter = 0;

while (!loggedIn) {
    console.log("Incorrect login credentails");
    if (loopCounter === 2) {
        loggedIn = true;
    }
    loopCounter++;
}

console.log("Successfully logged in!");


/* 
Problem Set 2
    Create a while loop that will print out all the even numbers between 10 and 40
    Do the same for all odd numbers as well.
*/

console.log("Even numbers from 10 to 40 (inclusive)");

let evenNumber = 10;

while (evenNumber < 41) { // or (evenNumber <= 40)
    if ((evenNumber % 2) === 0) {
        console.log(evenNumber);
    }
    evenNumber++;
}

console.log("Odd numbers from 10 to 40 (inclusive)");

let oddNumber = 10;

while (oddNumber < 41) { // or (oddNumber <= 40)
    if ((oddNumber % 2) === 1) {
        console.log(oddNumber);
    }
    oddNumber++;
}


/*
Problem Set 3
    1. Create a while loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50, print out ONLY: Half way there!
    4. On the final loop (100), print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

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

    HINT: Lookup the "continue" keyword for loops
*/

let count = 1;

while (count <= 100) {
        if (count === 50) {
            console.log("Half way there!");
            count++;
            continue;
        }

        if (count === 100) {
            console.log("You made it!");
            count++;
            continue;
        }

    if ((count % 10) === 0) {
        console.log(`Checkpoint! ${count}`);
    }

    count++;
}

console.log("All done!");