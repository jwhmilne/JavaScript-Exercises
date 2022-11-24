console.log("---cities to CITIES---")

const cities = [
    "london",
    "vancouver",
    "mumbai",
    "new york"
]

const bigCities = cities.map(
    (city) => {
        return city.toUpperCase();
    }
)

console.log(cities);
// [ 'london', 'vancouver', 'mumbai', 'new york' ]

console.log(bigCities);
// [ 'LONDON', 'VANCOUVER', 'MUMBAI', 'NEW YORK' ]



console.log("---MULTIPLYING---")

const fiveTable = [
    5, 10, 15, 20, 25, 30, 25, 40
]

const multiplyBySix = fiveTable.map(
    (num) => {
        return num * 6;
    }
)

console.log(fiveTable);
// [ 5, 10, 15, 20, 25, 30, 25, 40 ]

console.log(multiplyBySix);
// [ 30,  60,  90, 120, 150, 180, 150, 240 ]