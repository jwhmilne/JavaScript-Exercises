/*
ARRAY FILTER
*/

/*
Warm-up
    1. Create an array called "practice" with the numbers 10-20 (inclusive)

    2. Create another array using filter that keeps the even numbers in practice

    3. Printout both "practice" and the new filtered array
*/

const practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const practiceEven = practice.filter((num) => {
    if (num % 2 === 0) {
        return true
    }
    return false;
});

// const practiceEven = practice.filter(num => (num % 2 === 0));
// ^ shorter version

console.log(practice);
// [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(practiceEven);
// [ 10, 12, 14, 16, 18, 20 ]



/*
Problem Set 1
    1. Create an array called "countries" of the following strings:
        ["France", "South Africa", "Brazil", "United States", "Sweden"]

    2. Filter over "countries" and keep only the countries that have a blank space in their name.

    3. Print out both arrays

    HINT: Google for "javascript string contains"
*/

const countries = ["France", "South Africa", "Brazil", "United States", "Sweden"];

const countriesSpace = countries.filter((country) => {
    if (country.includes(" ")) {
        return true
    }
    return false
});

// const countriesSpace = countries.filter((country) => country.includes(" ") === true);
// ^ shorter version

console.log(countries);
// ["France", "South Africa", "Brazil", "United States", "Sweden"]

console.log(countriesSpace);
// ["South Africa", "United States"]



/*
Problem Set 2
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a new array using filter called "lowPrices" that
       keeps all the prices where the price plus a 15% tax is
       less than 10.00

    3. Print out both arrays
*/

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const lowPrices = prices.filter((price) => {
    if (price * 1.15 < 10) {
        return true
    }
    return false
});

// const lowPrices = prices.filter((price) => (price * 1.15 < 10));
// ^ shorter version

console.log(prices);
// [1.23, 19.99, 85.2, 32.87, 8, 5.2]

console.log(lowPrices);
// [ 1.23, 8, 5.2 ]



/*
Problem Set 3
    1. Create the following array called "values":
        [[1,2,3], [0,0,1], [3,6,9], [0,1,2]]

    2. Create a new array called "hasTwos" that:
        - filters over values and keeps only the sub-arrays
          that have a 2 in them

    3. Print out both arrays

    "hasTwos" should be equal to: [[1,23], [0,1,2]]

    HINT: Google for "javascript array includes"
*/

const values = [[1,2,3], [0,0,1], [3,6,9], [0,1,2]];

const hasTwos = values.filter((array) => {
    if (array.includes(2)) {
        return true
    }
    return false
})

// const hasTwos = values.filter((array) => array.includes(2));
// ^ shorter version

console.log(values);
// [ [ 1, 2, 3 ], [ 0, 0, 1 ], [ 3, 6, 9 ], [ 0, 1, 2 ] ]

console.log(hasTwos);
// [ [ 1, 2, 3 ], [ 0, 1, 2 ] ]



/*
BONUS EXERCISE
    1. Create the following array called "nums";
        [10, 20, 30, 40, 50]

    2. Create a new array called "timesTwo" that:
        - maps over "nums" and returns each number multiplied by two

    3. Create a new array called "over50" that:
        - filters "timesTwo" to keep only values over 50

    4. Print out all 3 arrays

    "over50" should contain: [60, 80, 100]
*/

const nums = [10, 20, 30, 40, 50];

const timesTwo = nums.map((num) => num * 2);

const over50 = timesTwo.filter((num) => num > 50);

console.log(nums);
// [10, 20, 30, 40, 50]

console.log(timesTwo);
// [20, 40, 60, 80, 100]

console.log(over50);
// [60, 80, 100]



// // Crazy short way to do the above:

// const nums = [10, 20, 30, 40, 50]
// .map((num) => {
//     return num * 2;
// })
// .filter((num) => {
//     if (num > 50) {
//         return true;
//     }
// }
// );