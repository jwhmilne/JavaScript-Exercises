const cities = ["london", "vancouver", "mumbai", "new york"];

const concatCities = cities.reduce
    ((result, city) => {
        return result + city
    }, "")

    console.log(cities);
    // [ 'london', 'vancouver', 'mumbai', 'new york' ]

    console.log(concatCities);
    // londonvancouvermumbainew york

// ---

const nums = [5, 10, 15, 20, 25, 30, 35];

let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(sum);
// 140 (via "for loop")

// ---

const sum2 = nums.reduce(
    (result, number) => {
        console.log(result, number);
        return result + number;
    }, 0
);

// 0 5
// 5 10
// 15 15
// 30 20
// 50 25
// 75 30
// 105 35

console.log("-----");
console.log(sum2);
// 140



const fees = [12, 10.60, 9.20, 11, 6.80, 5.50, 8];
// const fees = [12, 10, 9, 11, 6, 5, 8];

const feesTotal = fees.reduce(
    (prev, curr) => {
        console.log(prev,curr);
        return prev + curr;
    }, 0
);
// 0 12
// 12 10
// 22 9
// 31 11
// 42 6
// 48 5
// 53 8

console.log(feesTotal);
// 61



//  -----



const animals = [
    "monkey", "dog", "cat", "koala"
];

const concatAnimals = animals.reduce(
    (result, animal) => {
        return result + animal + ","
    }, ""
);

console.log(animals);
// [ 'monkey', 'dog', 'cat', 'koala' ]

console.log(concatAnimals);
// monkey,dog,cat,koala,