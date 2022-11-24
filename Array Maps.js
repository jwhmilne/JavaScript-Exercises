/* ARRAY MAPS */

/*
Warm-up
    1. Create an array called "practice" with the numbers 25-30 (inclusive)

    2. Create another array using map that squares each number in "practice"

    3. Print out both "practice" and the new mapped array
*/

const practice = [25, 26, 27, 28, 29, 30];

const practiceSquared = practice.map(
    (num) => {
        return num ** 2
    }
)

console.log(practice);
// [ 25, 26, 27, 28, 29, 30 ]

console.log(practiceSquared);
// [ 625, 676, 729, 784, 841, 900 ]



/*
Problem Set 1
    1. Create an array called "bools" of the following booleans:
        [true, true, false, true, false, false]

    2. Map over "bools" and do the following:
        - if "true", return a random number in its place
        - if "false", return 0

    3. Print out both arrays

    HINT: Google for "random number js" to find a random number function built-in to Javascript to use
*/

const bools = [true, true, false, true, false, false];

const rng = bools.map((x) => {
        if (x === true) {
            return Math.floor(Math.random() * 100)
        } else {
            return 0
        }
    }
);

console.log(rng);
// [ 74, 29, 0, 85, 0, 0 ]
// non-0 numbers are rng



/*
Problem Set 2
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a new array using map called "taxedPrices" that:
        - If the price is greater than 10, add 20% tax to it
        - Otherwise, do not add any tax

    3. Print out both arrays
*/

const prices = [
    1.23, 19.99, 85.2, 32.87, 8, 5.2
]

const taxedPrices = prices.map((price) => {
        if (price > 10) {
            return price += (price * 0.2)
        }
        return price
    }
);

console.log(prices);
// [ 1.23, 19.99, 85.2, 32.87, 8, 5.2 ]

console.log(taxedPrices);
// [ 1.23, 23.988, 102.24000000000001, 39.443999999999996, 8, 5.2 ]



/*
Problem Set 3
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]

    2. Create a new array called "plurals" that:
        - maps over "items" and adds an 's' to each one

    3. Print out both arrays

    4. Change it so if we see "mouse", we instead return "mice"
*/

const items = [
    "light",
    "banana",
    "phone",
    "book",
    "mouse"
]

const plurals = items.map((word) => {
        if (word === "mouse") {
            return "mice"
        }
        return word + "s";
    }
)

console.log(items);
// [ 'light', 'banana', 'phone', 'book', 'mouse' ]

console.log(plurals);
// [ 'lights', 'bananas', 'phones', 'books', 'mice' ]



/*
Bonus Exercise
    1. Create the following array called "row":
        [10, 20, 30, 40, 50]

    2. Create a new array called "matrix" that:
        - maps over "row" and returns each item, but in an array
        (We should have a 2-dimensional array as a result)

    3. Print out both arrays

    "matrix" should look like this:
        [[10], [20], [30], [40], [50]]
    */

const row = [10, 20, 30, 40, 50]

const matrix = row.map((num) => {
        return [num]
    }
);

// ALTERNATIVELY:
// const matrix = row.map((num) => {
//     const array = [];
//     array.push(num);
//     return array;
// }
// );

console.log(row);
// [ 10, 20, 30, 40, 50 ]

console.log(matrix);
// [ [ 10 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]