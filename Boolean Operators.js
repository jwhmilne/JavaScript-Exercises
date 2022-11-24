/* BOOLEAN OPERATOR */

/*
Warm-up
    Write out the truth table for the following boolean operators using two boolean values, one on each side:
    - AND
    - OR
    - NOT
    
    Use the console.log() to log out the results for each.

    HINT: AND and OR will have 4 possibilities, while NOT has 2
    HINT2: console.log(true && true);
*/

console.log("---WARM-UP---");

console.log("---AND---");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log("---OR---");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("---NOT---");
console.log(!true); // false
console.log(!false); // true


/*
Problem Set 1
    Try to think of these answers before coding and printing them out;

    1. What is the result of: "1" === 1
    2. What is the result of: (3 > 2) === true
    3. What is the result of: (2 ** 2) !== "4"
    4. What is the result of: (true === true) && (false === false)
*/

console.log("---PROBLEM SET 1---");

console.log("1" === 1); // false
console.log((3 > 2) === true); // true
console.log((2 ** 2) !== "4"); // true
console.log((true === true) && (false === false)); // true;


/*
Problem Set 2
    What would each of these variables evaluate to?

    1. const one = true && "hi";
    2. const two = false && "bye";
    3. const three = true || "meow";
    4. const four = false || "rawr";

    Print them out to the console to see if you got them right.

    HINT: 3 & 4 are more challenging, so don't worry if you don't get them right away.
*/

console.log("---PROBLEM SET 2---")

const one = true && "hi";
console.log(one); // hi

const two = false && "bye";
console.log(two); // false

const three = true || "meow";
console.log(three); // true

const four = false || "rawr";
console.log(four); // rawr


/*
Problem Set 3
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?");
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    This is a very challenging problem set. Once you see the results, try to see if you can see WHY it works that way. This will come in very hand in the future.
*/

console.log("---PROBLEM SET 3---");

true && console.log("moo"); // moo
false && console.log("moo moo?"); // -

true || console.log("hello friend"); // -
false || console.log("bye friend"); // bye friend


/*
BONUS EXERCISE
    First, lookup how logical AND, OR, and NULLISH assignment work using Google.
    Then try the following examples.

    What would each of the following variables evaluate to:

    1. let username = "";
        username &&= "tiger";

    2. let vip = 0;
        vip || 3;
    
    4. let loggedIn = null;
        loggedIn ??= 0;

    Log each of the values out to see the results.

    This is very, very challenging. It might take several tries or coming back to it in the future when it's more relevant.
*/

console.log("---BONUS EXERCISE---");

// LOGICAL AND OPERATOR &&=
let username = "";
username &&= "tiger";   // username = username && "tiger
                        // username = "" && "tiger"
console.log(username);  // empty string

// LOGICAL OR OPERATOR ||=
let vip = 0;
vip ||= 3;  // vip = vip || 3
            // vip = 0 || 3
console.log(vip); // 3

// NULLISH COALESCING ??=
let loggedIn = null;
loggedIn ??= 0;         // loggedIn = loggedIn ?? 0
                        // loggedIn = null ?? 0
console.log(loggedIn);  // false