/*
ARRAYS
*/

// Arrays are collections of items

const veggie1 = "cucumber";
const veggie2 = "kale";
const veggie3 = "beet";

console.log(veggie1);
console.log(veggie2);
console.log(veggie3);

const animals = [
    "monkey",   // 0
    "dog",      // 1
    "cat",      // 2
    "koala",    // 3
    "elephant"  // 4
];

console.log(animals); // animals (array)

// More than one "index" makes up the "indices"
// Indices is the order

const monkey = animals[0];
const koala = animals[3];
console.log(monkey, koala);

console.log("---");

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

animals.push("cow");
console.log(animals);