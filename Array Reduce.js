/* REDUCE */

/*
Warm-up
    1. Create an array called "points" with the numbers 55-60 (inclusive)

    2. Create a variable called "sum" using reduce that sums up the points in "points"

    3. Print out both "points" and "sum"
*/

const points = [55, 56, 57, 58, 59, 60];

const sum = points.reduce((result, point) => {
  return result + point;
}, 0);

console.log(points);
// [ 55, 56, 57, 58, 59, 60 ]

console.log(sum);
// 345

// ---

/*
Problem Set 1
    1. Create an array called "companies" of the following strings:
        ["apple", "tesla", "spacex", "amazon", "meta", "google"]

    2. Create a const called "modded" that reduces the "companies" array to a string of companies that DO NOT start with the letter 'a', separated by dashes

    3. Print out "companies" and "modded"

    "modded" should be: "tesla-spacex-meta-google-"

    BONUS: How can you get rid of the trailing '-'?
    TIP: Look up reduce on Google using docs like MDN
*/

const companies = [
  "apple",
  "tesla",
  "spacex",
  "amazon",
  "meta",
  "google",
  "ibm",
];

const modded = companies.reduce((result, company, i) => {
  if (company.startsWith("a")) {
    return result;
  }

  if (i === companies.length - 1) {
    return result + company;
  }

  return result + company + "-";
}, "");

console.log(companies);
// [ 'apple', 'tesla', 'spacex', 'amazon', 'meta', 'google' ]

console.log(modded);
// tesla-spacex-meta-google-ibm

// ---

/*
Problem Set 2
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a const called "afterTax" that does a sum like so:
        - If the price is greater than 6, add the price with no tax
        - Otherwise, add the price plus a tax of 20%

    3. Print out "prices" and "afterTax"
*/

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const afterTax = prices.reduce((sum, price) => {
  if (price > 6) {
    return sum + price;
  }

  return sum + price * 1.2;
}, 0);

console.log(prices);
// [ 1.23, 19.99, 85.2, 32.87, 8, 5.2 ]

console.log(afterTax);
// 153.776

// ---

/*
Problem Set 3
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]

    2. Create a new array called "caps" that:
        - maps over "items" and capitalizes each item

    3. Create a const called "concat" that:
        - uses reduce to concatenate all the strings in "caps" using a space to separate each item

    4. Print out "items", "caps", and "concat"

    BONUS: Can you do steps 1-3 in one line?
*/

const items = ["light", "banana", "phone", "book", "mouse"];

const caps = items.map((item) => {
  return item.toUpperCase();
});

const concat = caps.reduce((result, string) => {
  return result + string + " ";
}, "");

console.log(items);
// [ 'light', 'banana', 'phone', 'book', 'mouse' ]

console.log(caps);
// [ 'LIGHT', 'BANANA', 'PHONE', 'BOOK', 'MOUSE' ]

console.log(concat);
// LIGHT BANANA PHONE BOOK MOUSE

// ---

/*
Problem Set 3: BONUS
    Can you do steps 1-3 in one line?
*/

const items2 = ["light", "banana", "phone", "book", "mouse"]
  .map((item) => {
    return item.toUpperCase();
  })
  .reduce((result, string) => {
    return result + string + " ";
  }, "");

console.log(items2);
// LIGHT BANANA PHONE BOOK MOUSE

// ---

/*
Bonus Exercise
    1. Create the following array called "nums":
        [10, 30, 50, 70, 90]
        
    2. Create a new array called "squares" that:
        - maps over "nums" and returns each item squared (x by itself)

    3. Create another new array called "over1000" that:
        - filters "squares" to contain only values over 1000

    4. Create a const called "finale" that:
        - reduces "over1000" to a single sum of its elements

    5. Print out "nums", "squares", "over1000", and "finale"

    BONUS^2: Can you do 1-4 all in one line?
*/

const nums = [10, 30, 50, 70, 90];

const squares = nums.map((number) => {
  return number ** 2;
}, 0);

const over1000 = squares.filter((squared) => {
  return squared > 1000;
});

const finale = over1000.reduce((result, number) => {
  return result + number;
}, 0);

console.log(nums);
// [ 10, 30, 50, 70, 90 ]

console.log(squares);
// [ 100, 900, 2500, 4900, 8100 ]

console.log(over1000);
// [ 2500, 4900, 8100 ]

console.log(finale);
// 15500

// ---

/*
Bonus Exercise: Bonus
    Can you do 1-4 all in one line?
*/

const nums2 = [10, 30, 50, 70, 90]
  .map((number) => {
    return number ** 2;
  }, 0)
  .filter((squared) => {
    return squared > 1000;
  })
  .reduce((result, number) => {
    return result + number;
  }, 0);

console.log(nums2);
// 15500
